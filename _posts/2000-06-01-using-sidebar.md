---
title: Sidebar
index: 1
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/8nIw6KVEVII" frameborder="0" allowfullscreen></iframe>

{% include side-image.html file="sidebar.gif" %}

Once [Yathit InboxCRM Chrome extension](https://chrome.google.com/webstore/detail/{{ site.sugarcrm.extension_id }}) is installed, a sidebar tab is appeared on right side of [Gmail](https://mail.google.com). Click the sidebar tab to bring up the sidebar.

*Note*: If you sign in with [multiple accounts](https://support.google.com/accounts/answer/1721977) to Gmail, only the account that login to Yathit server will be active. Inactive account still have sidebar tab, but not prominent. Inactive account can use sidebar in read only mode.

Sidebar panel has header at the top, footer at the bottom and body in between.

## Sidebar header

At the top of the sidebar is header consisting _log message panel_ and _SugarCRM head panel_.

The message panel show the last message. Older log messages up to 50, are displayed by clicking down arrow icon, {{ "arrow-drop-down" | svg_icon }}, which appear mouse hovering over on the panel. Some message has a link. For example, when a record is created or updated, a link is appear on the log, which can be use quickly navigate back to [record detail view](http://support.sugarcrm.com/02_Documentation/01_Sugar_Editions/02_Sugar_Enterprise/Sugar_Enterprise_6.5/Application_Guide/02_User_Interface/#Detail_View) on SugarCRM website.

SugarCRM head panel, which is below the message panel, mainly consists a link to SugarCRM instance website. Use the link to visit SugarCRM website.

## Sidebar footer

A the bottom of the sidebar is footer, which as link to [Chrome Extension options panel](https://developer.chrome.com/extensions/options) on the left and link to help.

## Sidebar body

Sidebar body is the main content of the sidebar comprising seven tabbed panels.

* {{ "magnifying-glass" | svg_icon }} **Search Panel** is used to search SugarCRM records.
* {{ "plus" | svg_icon }} **New Record Panel** is used to create a new SugarCRM record.
* {{ "rss" | svg_icon }} **Feed Panel** displays last 10 activities.
* {{ "Meetings" | svg_icon }} **Meeting Panel** displays upcoming meetings.
* {{ "Calls" | svg_icon }} **Call Panel** displays upcoming calls.
* {{ "Tasks" | svg_icon }} **Task Panel** displays upcoming task.
* {{ "Opportunities" | svg_icon }} **Opportunity Panel** displays remaining opportunities to be closed.
