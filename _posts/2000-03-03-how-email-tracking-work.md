---
title: How email tracking works
section: Admin Guide
index: 3
---

Yathit's email tracker uses a pixel-beacon that is being used by many prominent newsletter services for one-to-one communication. With this feature, a pixel gets embedded in your email that helps in its tracking. As soon as the recipient opens the email or the application loads the image, Yathit's server instantly gets notified by the IP address providing you with all necessary information, such as who, when, where, and on which device the email has been opened.

A transparent GIF image, barely of one pixel size with unique URL, has been added to the content body of your email before it gets delivered to the Google email server. With this option, the recipient will get the exact email that you have sent. In this case, the recipient might see the message "Load images from this user?" depending on his / her email client.

All the image URLs are unique; hence, Yathit's server knows exactly which email is attached to the image on being accessed. An IP address is sent to the client when the email recipient or a browser requests to load the image. This IP address is used to track the location of the recipient.

If the email sender opens the email message, the Yathit server also acquires the image as well. This is recorded in the server as a _self open_ access by sending an additional request from the extension.

## When email tracking does not work

In fact, email tracking only works when the image is being accessed, but not all email clients embed images to be displayed in the email body for privacy or security reasons. In Gmail, [embedded images are displayed](http://gmailblog.blogspot.sg/2013/12/images-now-showing.html) by default, but they are accessed via Google [image proxy sever](https://support.google.com/mail/answer/145919?p=display_images&rd=1). It means, Yathit cannot trace the IP address of the email reader. However, the time when the email has been accessed is recorded and considered as the recipient has intentionally opened and read the email.

## How link tracking works

Apart from tracking emails, Yathit's email tracker also tracks links embedded in the email body. Link tracking works by creating a proxy link on any link within the email body. On clicking that link, the Yathit server records its access and then redirects it to the original link. The original link maintains the link tracking ability without making any change in the appearance of the original link. Link tracking is very reliable as compared to the email tracking.


