This repository contains all that is needed to fully generate the [Knowledge Base](https://www.yathit.com/sugarcrm-gmail/) for [Yathit InboxCRM](https://www.yathit.com).

For this opensource Knowledge Base web site generator, please see : [Lessons Learned Building a Git-Based Knowledge Base for my SaaS product](https://www.wisecashhq.com/blog/lessons-learned-creating-a-git-based-knowledge-base-for-my-saas-product).


## How to run locally

* Clone this repository to your machine.
* Make sure to have Ruby installed (tested fine on Ruby 2.1.x).
* Install required dependencies with `bundle install`
* Run 

    jekyll serve
    
* Go to [http://localhost:4000/sugarcrm-gmail/(http://localhost:4000/sugarcrm-gmail/)

## Images

Resizing screenshots, 

    sips -Z 466 *.png

Uploading

    gsutil -m rsync -r ~/screenshot gs://yathit-assets/screenshot 
    
List files

    gsutil ls gs://yathit-assets/screenshot    

## Updating tutorial list

To update [tutorial video list](https://www.yathit.com/sugarcrm-gmail/tutorial-videos.html) go to [video data page](http://127.0.0.1:4000/sugarcrm-gmail/video-data.html). Authorize if necessary and copy data in chrome console by `copy(JSON.stringify(data, null, 2))`. Paste data to `_data\playlistTutorial.json`.

## How to build in production

This is mostly:

    ant
    
To build the site    

    bundle exec jekyll build --destination ~/gae/yathit-app/src/main/webapp/static/sugar-mobile-app

Then replace token on forum.html 

    ant forum
