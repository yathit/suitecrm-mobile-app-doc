---
title: Server side configuration
section: Admin Guide
index: 1
---

Yathit Mobile App for SugarCrM/SuiteCRM work out-of-the-box and does **not** require server side setup or plugin installation. However, if you need the following features, install Yathit Mobile App Service Plugin on your CRM,

1. SAML SSO Login
1. SuiteCRM Alerts
1. Reporting

## Yathit Mobile App Service Plugin installation

Yathit Mobile App Service Plugin is standard SuiteCRM/SugarCRM plugin, which is installed via [Module Loader](https://docs.suitecrm.com/admin/administration-panel/developer-tools/#_module_loader) in admin panel. Yathit Mobile App is released under GNU GPL v3 (same as SuiteCRM ) license. The license file is included in the package. Yathit Mobile App Service Plugin is free.

* Download [Yathit Mobile App Service Plugin](https://yathit-assets.storage.googleapis.com/code/yathit_mobile_app_plugin.zip)
* Login as CRM admin and install the plugin. 

No configuration is need after installation. For more detail about installing and uninstalling the plugin, see in SuiteCRM [Module Loader](https://docs.suitecrm.com/admin/administration-panel/developer-tools/#_module_loader) instruction.

To uninstall the plugin, simply go to Module Loader panel and click uninstall. Yathit Mobile App Service plugin is very simple plugin without altering CRM database. 

### SAML SSO login 

The REST API login, which use build-in CRM authentication does not work with external SAML SSO authentication. Yathit Mobile App Service Plugin add new REST API methods for seamless login service.

Seamless login service provides token based authorization for REST API from web login session. This is the reverse authorization of [`seamless_login` method](https://docs.suitecrm.com/developer/api/api-v4.1-methods/#_seamless_login) in REST API. Seamless login service can be used along with SugarCRM instances which use SAML SSO (such as Microsoft Azure) authentication. Seamless login service itself can be used to avoid entering password to third party login form.

This service introduces two Sugar entry points. 1) `SeamlessSession` is an authenticated entry point which redirects to a URL with  `seamless_token` in query parameters. A 512-bit cryptographically secure pseudo random by openssl library is used to generate the token, which is valid for 2 minutes. 2) A token consumer, usually the Yathit Mobile App, uses the token to exchange for REST API `session_id`. The resulting `session_id` is consumed to invoke standard REST API endpoints.

### SuiteCRM Alerts

SuiteCRM Alerts are an excellent way of calling user’s attention immediately as it happens. 

You can customize additional alerts such as when a Task is assigned to a user using [Workflow or Logic hook](https://community.suitecrm.com/t/how-to-create-notifications-by-using-workflows-logic-hooks/70809). Once an alerts is created, the assigned user of the Alert record will receive notification in Yathit mobile app immediately. Alert record's `title` and `description` will be display in the notification. If `url_redirect` field of the Alert record is set, the redirected record will be displayed upon tapping on the notification.

### Report panel

SugarCRM CE REST API v4 does not have API to query reporting data. Yathit Mobile App Service Plugin add new REST API methods to query Report data.

{{ "sm-report-data-table-panel.png width360" | screenshot }}


