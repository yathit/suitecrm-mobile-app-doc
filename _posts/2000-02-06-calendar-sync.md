---
title: Sync Calendar
section: User Guide
index: 7
---

{{ site.product }} provides a bi-directional sync of events between Google and Sugar. Events created and edited in either platform will automatically be synced in regular interval by your browser.

To setup Calendar Sync, visit to **Setting** panel, {{ "settings" | svg_icon }}, on the sidebar and then click **Calendar Sync Setting**. 


### Permission

If you have not grant read and write access right of your Google calendar to Yathit, a grant permissions link will appear in the setting panel.

![calendar-grant-permission](https://yathit-assets.storage.googleapis.com/screenshot/calendar-grant-permission.png)

Click Grant link, to open popup window that allow you to give Yathit access to your calendar. Scroll down and click Accept.


## Sync Direction Setting

Yathit provide very flexible option to sync so that it meets any business need. Sync can be from Sugar to Google or Google to Sugar or both.

To enable sync from Sugar Meetings to Google Calendar Events, check **Update from Sugar** checkbox option. Additionally you have option to

* **Update Google events**: For Google Calendar event, that is already sync with Sugar Meeting event, to update if Sugar Meeting event is updated.
* **Create Google events**: Create a new Google Calendar event if a new Sugar Meeting event is created in a given _sync window_.
* **Create Google event from Task**: Create a new Google Calendar Event if a new Sugar Meeting event if a new Sugar Task record is created in a given _sync window_.
* **Delete Google events**: Delete the Google Calendar event that is sync with Sugar record of deleted.
  
To enable sync from Google Calendar events to Sugar Meetings, select **Update from Google**. Additionally you have option to:

* **Update Sugar records**: For Sugar Meeting/Task record, that is already sync with Google Calendar event, to update if the Calendar event is updated.
* **Create Sugar records**: Create a new Sugar Meeting or Task record when a new Google Calendar event is create in _sync window_ in target Calendar. Check **Meeting** option, if Meeting record is to be create or check **Task** option if Task record is to be created. Default **Auto** option will create Task record if Google Calendar event title is starts with "Task:", otherwise Meeting.
* **Delete Sugar Records**: Delete Sugar record that is sync with Google Calendar event of deleted.  
  
{{ "cal-sync-option.png" | screenshot }}

To apply bi-directional sync, select both above options.

## Auto Sync

To run sync process in regular interval check **Sync regularly** check box. Change suitable sync interval in minutes, default to 5 minutes.

Please note that the sync process will be executed only when Chrome browser is running. Short sync interval definition might cause more load on your server. Only 100 records will be sync at a time, the remained records will be synced in next period.

## Manual Sync

To apply manual calendar sync whenever you need, select the sync direction settings and then click on the “Sync Now” button.
 
## Advanced Settings 

There are additional settings or reports, mostly to understand what is happen after the sync.
 
#### Sync Preview

Displays what will happen if sync is performed:

![cal-sync-preview](https://yathit-assets.storage.googleapis.com/screenshot/cal-sync-preview.png)
 
#### Sync History

Displays a time based history for all synced records with their previous record details and the applied changes:

![cal-sync-history](https://yathit-assets.storage.googleapis.com/screenshot/cal-sync-history.png)

#### Sync Backlogs

Backlogs are failed update, quarantine from synchronization. To participate in synchronization again, click release after manually inspecting each records.

![cal-sync-backlog](https://yathit-assets.storage.googleapis.com/screenshot/cal-sync-backlog.png)
 
