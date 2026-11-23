#!/usr/bin/env bash
set -euo pipefail

marker="<!-- content-checks -->"
body=""
if [ -n "${REPORT:-}" ] && [ -f "$REPORT" ]; then
  body=$(cat "$REPORT")
fi

comment_id=$(
  gh api --paginate "repos/${GITHUB_REPOSITORY}/issues/${PR_NUMBER}/comments" \
    --jq ".[] | select(.body | startswith(\"${marker}\")) | .id" \
    | head -n 1
)

if [ -z "${body//[[:space:]]/}" ]; then
  if [ -n "$comment_id" ]; then
    gh api --method DELETE "repos/${GITHUB_REPOSITORY}/issues/comments/${comment_id}"
  fi
  exit 0
fi

payload=$(jq -n --arg body "$body" '{body: $body}')
if [ -n "$comment_id" ]; then
  printf '%s' "$payload" | gh api --method PATCH "repos/${GITHUB_REPOSITORY}/issues/comments/${comment_id}" --input -
else
  printf '%s' "$payload" | gh api --method POST "repos/${GITHUB_REPOSITORY}/issues/${PR_NUMBER}/comments" --input -
fi
