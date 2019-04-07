#!/bin/sh

docker build --build-arg env=test -t semyonic/commerce-app:latest .
docker push semyonic/commerce-app:latest
