#!/bin/sh

# docker build -t <registry:dockerport>/<username>/<packagename>:<tag> .
docker build -t localhost:4200/commerce-app:0.0.0 .

# docker push <registry:dockerport>/<username>/<packagename>:<tag>
# docker push localhost:4200/commerce-app:0.0.0
