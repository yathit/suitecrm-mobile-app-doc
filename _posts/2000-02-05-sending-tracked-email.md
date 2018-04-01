---
title: Track Email
section: User Guide
index: 5
---

Yathit Browser Extension provides you an option to easily track on email you sent.

## How to track an email

To track an outbound email, select the **Track** checkbox when compose or reply a message: 

{% include full-screenshot.html file="sending-tracked-email.png" %}

For more detail see [How email tracking works](how-email-tracking-work.html). 

## Tracking links

To ensure that the link tracking is enabled in your email, select the Tracking check box before sending the email. 

All hyperlink embedded in your email will be tracked automatically when you track the email.

## Get notified

Yathit will send you a notification when the recipient opens the email or clicks any embedded link.

The “get notification” feature provides you real-time notification in Google Chrome browser as soon as the recipient opens a *recently* tracked email or clicks the link.

## Easy to view tracking

To see the status of your tracked message, just look beside the Gmail message thread.

{% include full-screenshot.html file="view-tracked-email.gif" %}
<br/>

The tracked emails are viewable via extension [Option Page](chrome-extension://ldikiokclnbceabnlbkabmcacpiednop/option-page.html).


{% include full-screenshot.html file="tracking-result.gif" %}

## Do-not-track setting

Yathit server also has a unique feature. With this feature, if you are receiving a signal from a website and if you do not want to track that person, you can do so by entering his/ her email address in the do-not-track members list. On tracking, the beacon slips the members list, even if you select the address for tracking. With this feature, any email address from the list is ignored. However, any existing signal that is found has to be deleted manually.

{{ "do-not-track-setting.gif" | screenshot }}

