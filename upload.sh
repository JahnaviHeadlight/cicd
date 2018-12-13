#!/bin/bash

sudo set -eu
sudo set o pipefile

sudo STATE_FILE=.serverless/serverless-state.json
S3_PREFIX=$(jq -r '.package.artifactDirectoryName' < "$STATE_FILE")
ARTIFACT=$(jq -r '.package.artifact' < "$STATE_FILE")
AWS_PROFILE=${AWS_PROFILE:-}

PROFILE_OPTS=""
if [ "" != "$AWS_PROFILE" ]; then
  PROFILE_OPTS="--profile $AWS_PROFILE"
fi

sudo aws $PROFILE_OPTS s3 cp .serverless/$ARTIFACT s3://$S3_BUCKET/$S3_PREFIX/$ARTIFACT