#!/bin/bash
## Resample iPhone XR screencast

# extract frame as poster image at 10 s
# ffmpeg  -i check-restore-purchase.mov -vframes 1 -ss 00:10 check-restore-purchase.jpeg

IN="$1"
IN_MOV="$IN.mov"
if [ -f $IN_MOV ] ; then
    echo "$IN"
else
    echo "input file $IN_MOV not exist"
    exit 1
fi

FN_JPG="$IN.jpeg"
if [ -f $FN_JPG ] ; then
  echo "$FN_JPG"
else
  echo "Image file does not exist, creating screenshot image $FN_JPG at 10 s"
  ffmpeg  -i "$IN_MOV" -vframes 1 -ss 00:10 "$FN_JPG"
  echo "Please check the image and rerun"
  exit 1
fi

sips --resampleWidth 360 "$FN_JPG"
ffmpeg -i "$IN.mov" -an -vf  scale="360:780" "$IN.mp4"
ffmpeg -i "$IN.mp4" -vcodec libvpx -cpu-used -5 -deadline realtime "$IN.webm"

trash $IN.mov
gsutil mv $IN.* gs://yathit-assets/screencast/sm/xr/
echo "https://yathit-assets.storage.googleapis.com/screencast/sm/xr/$IN.mp4"
