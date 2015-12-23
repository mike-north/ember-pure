#!/bin/bash
echo "Attempting to generate pages"
if [[ "${TRAVIS_PULL_REQUEST}" = "false" && "${TRAVIS_BRANCH}" == 'master' && "${EMBER_TRY_SCENARIO}" == 'release' ]]; then
  ember github-pages:commit --message "New release" --branch "gh-pages"
  git push deploy gh-pages 2>&1 >/dev/null
else
  echo "Not a main build -- no deploy"
fi
