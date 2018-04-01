---
title: Enterprise deployment
section: Admin Guide
index: 7
---


A network admin may deploy Yathit InboxCRM extension throughout their organization by the following two methods. 

1. Chrome Management (for Google Apps)
2. Platform Management


### Deployment by Chrome Management

In [Google Admin console](https://admin.google.com/) visit to [Chrome App Management](https://admin.google.com/AdminHome?fral=1#ChromeAppList:) under Device management section.
 
Search for [Yathit InboxCrm](https://admin.google.com/AdminHome?fral=1#ChromeAppDetails:appId=iccdnijlhdogaccaiafdpjmbakdcdakk&flyout=reg). In the User settings panel set "Force Installation". See the following GIF for detail steps.

{% include full-screenshot.html file="domain-install.gif" %}


### Deployment by Platform Management

A network admin may deploy Yathit InboxCRM extension throughout their organization using [group policy or preference settings](https://developer.chrome.com/extensions/external_extensions) depending on OS platform used.

#### Deployment for Windows

1. Find or create the following key in the registry:
  * 32-bit Windows: `HKEY_LOCAL_MACHINE\Software\Google\Chrome\Extensions`
  * 64-bit Windows: `HKEY_LOCAL_MACHINE\Software\Wow6432Node\Google\Chrome\Extensions`
2. Create a new key (folder) as `iccdnijlhdogaccaiafdpjmbakdcdakk`. 
3. In the key, create a property, `"update_url"`, and set it to the value: `"https://clients2.google.com/service/update2/crx"`. 
4. Launch the browser and go to chrome://extensions; you should see the extension listed.
5. Enable the extension if necessary.


You may also use the follow command to create above registry key:

*32-bit Windows*

    reg add HKEY_LOCAL_MACHINE\Software\Google\Chrome\Extensions\iccdnijlhdogaccaiafdpjmbakdcdakk /v update_url /t REG_SZ /d https://clients2.google.com/service/update2/crx /f
    
*64-bit Windows*

    reg add HKEY_LOCAL_MACHINE\Software\Wow6432Node\Google\Chrome\Extensions\iccdnijlhdogaccaiafdpjmbakdcdakk /v update_url /t REG_SZ /d https://clients2.google.com/service/update2/crx /f
    
Admin level access right is required to change registry setting.    
      
You may deploy the registry changes through [Group Policy](http://blogs.technet.com/b/askds/archive/2007/08/14/deploying-custom-registry-changes-through-group-policy.aspx).
  
    

#### Deployment for OS X

1. Download Chrome extension preference setting file [iccdnijlhdogaccaiafdpjmbakdcdakk.json](http://www.yathit.com/extensions/iccdnijlhdogaccaiafdpjmbakdcdakk.json).
2. Place the downloaded setting file to
  * For a specific user: `~/Library/Application Support/Google/Chrome/External Extensions/`
  * For all users: `/Library/Application Support/Google/Chrome/External Extensions/`
3. Launch Google Chrome and go to chrome://extensions; you should see the extension listed.  
4. Enable the extension.


#### Deployment for Linux

1. Download Chrome extension preference setting file [iccdnijlhdogaccaiafdpjmbakdcdakk.json](http://www.yathit.com/extensions/iccdnijlhdogaccaiafdpjmbakdcdakk.json).
2. Place the downloaded setting file to
  * For a specific user: `/opt/google/chrome/extensions/`
  * For all users: `/usr/share/google-chrome/extensions/`
3. Use chmod if necessary to make sure that the iccdnijlhdogaccaiafdpjmbakdcdakk.jsonn file is world-readable.  
4. Launch Google Chrome and go to chrome://extensions; you should see the extension listed.  
5. Enable the extension if necessary.


