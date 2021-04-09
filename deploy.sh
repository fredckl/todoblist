#!/usr/bin/env sh

# abort on errors
set -e

yarn new-version

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:fredckl/todoblist.git master:gh-pages

cd -

# Added all files
git add -A
git commit -m "new version ${PAKAGE_VERSION}"
# Push new tag
git tag $PACKAGE_VERSION
git push --follow-tags