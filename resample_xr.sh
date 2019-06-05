#!/bin/bash
## Resample iPhone XR screencast

# extract frame as poster image
# ffmpeg  -i check-restore-purchase.mov -vframes 1 -ss 00:10 check-restore-purchase.jpeg

sips --resampleWidth 360 "$1.jpeg"
ffmpeg -i "$1.mov" -an -vf  scale="360:780" "$1.mp4"
ffmpeg -i "$1.mp4" -an "$1.webm"

trash $1.mov
gsutil mv $1.* gs://yathit-assets/screencast/sm/xr/
echo https://yathit-assets.storage.googleapis.com/screencast/sm/xr/
