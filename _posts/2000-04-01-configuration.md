---
title: Configuration
section: Admin Guide
index: 5
---

* TOC
{:toc}


## Overview

Yathit Mobile App use layout defined in [SugarCRM Studio](http://support.sugarcrm.com/Knowledge_Base/Studio_and_Module_Builder/Editing_a_Modules_Layouts/), and hence tweaking is not required. You can also configure in the mobile app itself. However if such configuration persists across whole domain, a configuration file can be set in license server. 


## Sugar configuration key

The following section explains many configuration keys available under the root `Sugar` configuration key. 

#### LoginInfo

By using simple configuration, you can change the current user login info.; for example, the below configuration will change the default currency of the login user.

    {
      "Sugar": {
        "LoginInfo": {
          "user_currency_name": "THB"
        }
      }
    }

### ModuleSetting

Remove the Module Setting Panel from the extension sidebar by using the configuration given below.

    {
      "Sugar": {
        "ModuleSetting": {
          "disabledPanel": true
        }
      }
    }

Not only you can remove the module setting but also make changes in a specific property. To do this, you can use the `Modules` key. The following settings will make the `id` fields visible in the record edit panel for Account record types. The `id` field in the panel is hidden by default.

     {
       "Sugar": {
         "ModuleSetting": {
           "Modules": {
             "Accounts": {
               "Fields": {
                 "id": {
                   "normallyHide": false
                 }
               }
             }
           }
         }
       }
     }
     
To set all fields, replace module name with '*', such as     

     {
       "Sugar": {
         "ModuleSetting": {
           "Modules": {
             "*": {
               "Fields": {
                 "id": {
                   "normallyHide": false
                 }
               }
             }
           }
         }
       }
     }
     
Define color and symbol for custom module "Recruitment".

     {
       "Sugar": {
         "ModuleSetting": {
           "Modules": {
             "Recruitment": {
               "color": "#555",
               "symbol": "Ki"
             }
           }
         }
       }
     }   
       
       

In the above settings, the module name is "Account." To apply the same changes to all modules, use the * sign instead of the module name. This configuration given below will make the Assign user fields visible to all the modules.

     {
       "Sugar": {
         "ModuleSetting": {
           "Modules": {
             "*": {
               "Groups": {
                 "assigned_user_name": {
                   "normallyHide": false
                 }
               }
             }
           }
         }
       }
     }


### RecordBrowsePanel

The following configuration changes the menu item in the Record search panel and the Record Browser panel. 

     {
       "Sugar": {
         "RecordBrowsePanel": {
           "modules": [
              "Contacts",
              "Cases",
              "Opportunities",
              "Leads",
              "Accounts",
              "Bugs",
              "Campaigns",
              "Documents",
              "Notes",
              "Tasks",
              "Calls",
              "Users"
           ]
         }
       }
     }

By following the above configuration, the two modules "Bugs" and "Campaign" are visible in the browser panel and are editable. These modules are not visible by default. You can add any module in the browser panel by adding its name in the configuration given above.

### Modules

Adjust the SugarCRM meta data as a result with the REST API method named `get_module_fields` using `Modules`. Your CRM meda data can be download as json file in Sugar Setting panel.

The following configuration adjusts the correct grouping for the `campaing_name` fields. (Note: incorrect spelling).

     {
       "Sugar": {
          "Modules": {
            "Accounts": {
              "module_fields": {
                "campaing_name": {
                  "group": "campaign"
                }
              }
            }
          }
       }
     }

When related module name is missing in the field option, the field value will not suggest properly. It can be fixed as follow:

     {
       "Sugar": {
          "Modules": {
            "Opportunities": {
              "module_fields": {
                "currency_id": {
                  "related_module": "mstr_Currency_s"
                }
              }
            }
          }
       }
     }

Where `mstr_Currency_s` is Module name, which stores currency conversion rate.

When displaying records, its relationships are also displayed in the below sections such as Activities, Relateded and Emails. To included module selection, CRM Meta Data of the module must have configure as follow:
  
    "Contacts": {
       "module_fields": { 
          "link_fields": {
            "opportunities": {
              "name": "opportunities",
              "type": "link",
              "group": "",
              "id_name": "",
              "relationship": "opportunities_contacts",
              "module": "Opportunities",
              "bean_name": "Opportunity"
            }
         }
       }
    }
        
Where "module" fields is required, but sometimes not appear in custom module. It can be fixed as follow:
         
     {
       "Sugar": {
          "Modules": {         
            "Contacts": {
               "module_fields": { 
                  "link_fields": {
                    "opportunities": {
                      "name": "opportunities",
                      "type": "link",
                      "group": "",
                      "id_name": "",
                      "relationship": "opportunities_contacts",
                      "module": "Opportunities",
                      "bean_name": "Opportunity"
                    }
                 }
               }
            }
         }
      }
            

### Disabling editing/deleting

For some reason, you may not want user to update certain module from Yathit extension. You can modify ACL for this purpose.

In the following example configuration, `Leads` module is disabled for editing and deleting from the extension.

    {
      "Sugar": {
        "Acls": {
          "Leads": {
            "acls": [
              {
                "action": "view",
                "access": false
              },
              {
                "action": "edit",
                "access": false
              },
              {
                "action": "delete",
                "access": true
              },
              {
                "action": "list",
                "access": true
              },
              {
                "action": "import",
                "access": true
              },
              {
                "action": "export",
                "access": true
              }
            ]
          }
        }
      }
    }

