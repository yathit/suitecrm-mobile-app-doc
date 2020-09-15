This repository contains all that is needed to fully generate the [Knowledge Base](https://www.yathit.com/sugar-mobile-app/overview.html) for [Yathit Mobile App for Sugar/SuiteCRM](https://www.yathit.com/suitecrm-mobile-app/index.html).

For this opensource Knowledge Base web site generator, see : [Lessons Learned Building a Git-Based Knowledge Base for my SaaS product](https://www.wisecashhq.com/blog/lessons-learned-creating-a-git-based-knowledge-base-for-my-saas-product).


## How to run locally

* Clone this repository to your machine.
* Make sure to have Ruby installed (tested fine on Ruby 2.4.x).

     rvm reinstall 2.4 

* Install required dependencies with `bundle install`. Install `rvm` if bundle not found.
* Run 

    jekyll serve
    
Or `bundle exec jekyll serve`    
    
* Go to [http://localhost:4000/sugarcrm-gmail/(http://127.0.0.1:4000/sugar-mobile-app/)

## Images

Resizing screenshots, 

    sips -Z 466 *.png

    sips -Z 466  ~/screenshot/*.png

Ubuntu
    
    mogrify -resize  360x *.png

In windows, `choco install ImageMagick`.

    magick mogrify -resize  360x *.png
    
Install gifsicle to resize

    sudo apt-get install gifsicle
    brew install gifsicle
    
Resize for 300 px width.
    
    gifsicle --colors 256 --resize-fit-width 300 -i  animation.gif -o animation-300.gif     
    
Or bigger     
     
    gifsicle --colors 256 --resize-fit-width 466 -i  animation.gif -o animation-466.gif      
    gifsicle --resize-fit-width 466 -i  animation.gif -o animation-466.gif      

Uploading

    gsutil -m rsync -r ~/screenshot gs://yathit-assets/screenshot
    rm ~/screenshot/*

Or

    gsutil mv ~/Desktop/*.png  gs://yathit-assets/screenshot/
    
To reference 

    ![centered-image-466](https://yathit-assets.storage.googleapis.com/screenshot/sm-sugar-site-license-check-300.gif)    
    
List files

    gsutil ls gs://yathit-assets/screenshot/sm-*
    
Convert mp4 to gif 

    ffmpeg -i desktop-dashlet-setup.mp4 -vf fps=5,scale=360:-1 desktop-dashlet-setup.gif   
    
Use `resample_xr.sh` to automate.    

## How to build in production

In windows, use WSL2 with Ubuntu.

To build the site    

    jekyll build --destination ~/gae/yathit-app/src/main/webapp/static/sugar-mobile-app

This is mostly:

    ant

Then, to publish quickly as latest version

    (cd ~/gae/yathit-app; mvn appengine:deploy -Dapp.deploy.version=website)
