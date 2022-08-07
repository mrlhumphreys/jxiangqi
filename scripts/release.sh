#!/bin/bash

# prepare for release
node -p "require('./package.json').version" | xargs -I {} git tag -a v{} -m 'Version {}'
npm run build

# release upstream 
git push origin main 
git push --tags
npm publish

