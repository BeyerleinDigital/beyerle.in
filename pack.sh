#!/bin/bash

cd dist
tar -zcf release.tar.gz beyerlein-website/
zip -rq release.zip beyerlein-website/
