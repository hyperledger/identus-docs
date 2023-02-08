#!/bin/bash

VERSION="${1}"

cd "$(dirname "${BASH_SOURCE[0]}")/.." || exit 126
yarn build --out-dir infra/website
docker build -t ghcr.io/input-output-hk/prism-documentation-portal:${VERSION} -f infra/Dockerfile .
docker push ghcr.io/input-output-hk/prism-documentation-portal:${VERSION}
