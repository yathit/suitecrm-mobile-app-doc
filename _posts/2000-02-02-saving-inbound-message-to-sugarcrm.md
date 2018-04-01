---
title: Email Archiving
section: User Guide
index: 2
---

{{ site.product }} provides an easy way to save or archive incoming and outgoing emails with attachments to Sugar.

* TOC
{:toc}

## Archiving Inbound Emails

{{ "TcwbeEQsId0" | youtube_popup }}

Open the email which you want to save or archive.

❶ Click on Yathit menu {{ "1" | step }}, and then select *Archive* menu item. 

![archive-menu](https://yathit-assets.storage.googleapis.com/web/archive-menu.png)


It will bring up the following **Archive Email Dialog Box**.

![archive-dialog](https://yathit-assets.storage.googleapis.com/web/archive-dialog.png) 

{{ site.product }}  provides the ability to add various types of related records to the archived email.

❷ The related records {{ "2" | step }} will automatically be populated as per the sender and recipient email addresses.

❸ Other possible related records {{ "3" | step }} are suggested base on your historical selection. To related a suggested record, click on it.

❹ To add additional related records, choose module {{ "4" | step }} and then search {{ "5" | step }} for a specific related record. Select the search result item to add as related record.

❺ If email has attachment(s), those will be listed in **Attachments** section {{ "6" | step }}. Click on the Attachments checkbox to include attachment(s) with the email.

➏ If you need to change email subject {{ "7" | step }}, you can change it.

➐ Click **Archive** button to archive the email immediately in the Sugar.

Notice that archive menu icon change from Yathit logo, {{ "ydn-logo" | svg_icon }} to cloud upload icon {{ "cloud-done" | svg_icon }}. The menu is now linked to archived email record in Sugar.


## Archiving Outbound Emails

Although you can archive outbound email like inbound email, usually it is easier to mark to archive before sending. 

Yathit toolbor appeared in Gmail _compose_ and _reply_ panels. 

❶ To archive the outbound emails to SugarCRM, select the **Archive** checkbox in the toolbar.

❷ If you want to assign the archived email or relate to a particular contact or record, then click Archive in the Yathit toolbar. It will show you the primary contact and record already assigned to the email. If you want to change it, then click Details. You will see a Lead or Contact record that exists in SugarCRM. Select them as per your requirement to save your email in any of the existing record:
 
{% include full-screenshot.html file="archiving-outbound-email.gif" %}

❸ After you have selected the required contact or record, send the email. When you will send the email, it will be archived, including the attachments, if selected. Archiving attachment requires additional permission for web site data access to download the attached files.


## Uploading Attachment

{{ "4m4uhUj1iDo" | youtube_popup }}

You can also upload attachment to the SugarCRM’s Documents module directly from your Gmail interface using {{site.product}}. 

❶ To upload an attachment, click the Upload button {{ "cloud-upload" | svg_icon }} on the attachment. You may need to give permission to upload the document. 

❷ Once the document upload process starts, the cloud icon will become green. And, after the upload is finished, the cloud icon will be changed to the SugarCRM {{ "sugarcrm-bw" | svg_icon }} icon.

{% include screenshot.html file="upload-attachment.gif" %}

❸ In case, the attachment is already available on the SugarCRM’s Document module, you will not see the Upload button. Rather you will see the SugarCRM {{ "sugarcrm-bw" | svg_icon }} icon. Clicking this icon will provide you details about the attachment on the side panel. If you want more details, you can visit to the Record detail page in the SugarCRM.


## View Archived Email

After email is archived, the archive menu label change to 'View Archive' and Yathit icon into cloud icon, {{ "cloud-done" | svg_icon}}. To view the archived email, click the 'View Archive' menu item:

{{ "view-archive.png" | screenshot }}

* You can also view your archived email via your SugarCRM Account's contact, leads, opportunities, or case modules and this is easily done without having you to leave your working module:

{{ "related-records-panel-email.png" | screenshot }}

* In fact, the archiving ability of SugarCRM allows you to easily store your Gmail messages into the SugarCRM record of your account, contacts, or cases. You also get a complete record of your communication as all your Gmail attachments, images, and calendar events get updated instantly:

<hr>

## Email Archive Settings

SugarCRM makes archiving of email messages easier and faster through the Yathit toolbar.

To understand how email archiving works, click the Gear {{ "settings" | svg_icon }} icon on the sidebar. 

A list will appear. In this list, select the “Email Archive Setting” option.

{% include full-screenshot.html file="archive-setting.png" %}


### Archive message content

SugarCRM can save email messages in three formats: 
* Save only email content, 
* Save the whole email content, or 
* Save just the visible content viewable in your Gmail.

Email messages are saved on SugarCRM as HTML email version and only text version. To save only the text version, select “Text only” option. By using the “Text only” option you will save space on the server.


### Outgoing email archive preference

the below archiving configurations are available:

* **Always Archived**: all your outgoing email messages from your browser are saved in the SugarCRM.

* **Archived Normally**: Archive all outgoing emails in SugarCRM. If you don't want to archive all emails, then uncheck the “archive” option in the message toolbar. 

* **Not Archived Normally**: Means your outgoing emails will not be saved in the SugarCRM.

* **Enabled for Archiving**: This is the default settings option. With this option activated, your previous email archive selection will become active.

* **Disabled for Archive**: For those who do not want to use the archive feature can select this option.


### Relationship record suggestion

With the {{ site.product }}, you can add the accounts record as a relationship along with your emails for the Contacts (email recipients). 

The available options  are:

* linked to the archived email
* suggested to add as linked to the archived email
* be ignored
* be treated as appropriate

Gmail is a necessity for anyone who uses the net, whether personal or business and the {{site.product}} Integration just enhances your experience. It is ideal for administration in search of a perfect CRM solution to save email securely out of Gmail. You can use your existing Gmail account as the address to receive emails and save them on the SugarCRM as an integrated email client.

{{site.product}} offers an easy option for saving your mails in SugarCRM. And, to do this all you have to do is click the {{ "ydn-logo-bw" | svg_icon }} icon in the Gmail message toolbar.

