#!/bin/bash

sips -Z 466  ~/screenshot/*.png
gsutil -m rsync -r ~/screenshot gs://yathit-assets/screenshot
rm ~/screenshot/*