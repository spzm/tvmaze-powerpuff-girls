#!/bin/bash

set -e

DOCKERFILE=${1:-"Dockerfile"}

docker build -f "$DOCKERFILE" -t rtl-powerpuff-girls .
docker tag rtl-powerpuff-girls:latest uladzimir/rtl-powerpuff-girls:"$DOCKER_BUILD_TAG"
docker login -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD"
docker push uladzimir/rtl-powerpuff-girls:"$DOCKER_BUILD_TAG"
