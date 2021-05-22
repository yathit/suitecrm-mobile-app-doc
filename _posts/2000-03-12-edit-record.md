---
title: Editing
section: User Guide
index: 12
---

Yathit Mobile App provides you with all the functionality you need to create new records, edit existing ones, and delete records.

### Creating Records

You can create any record in your CRM as long as you have edit access right in your CRM [module permission](https://support.sugarcrm.com/Documentation/Sugar_Versions/7.9/Ent/Administration_Guide/Role_Management/#Setting_Module-Level_Permissions). 

There are couples of way to create a new record with Yathit Mobile App. A common way is from the [Module Page, module], tap the plus sign {{ "add" | svg_icon }} to add a new record. That will present with record edit screen with default field values.

![centered-image-466](https://yathit-assets.storage.googleapis.com/screenshot/sm-create-contact.png)    


Filled all require fields and click save.

### Editing A Record

Editing is very similar and use same interface for creating record. Go to the record you want to edit and click  {{ "pencil" | svg_icon }} floating action button.

![centered-image-466](https://yathit-assets.storage.googleapis.com/screenshot/sm-edit-contact.png)    

### Inline Editing

Each field can be edited independently in record detail page. 

#### Editing a name field

![centered-image-466](https://yathit-assets.storage.googleapis.com/screenshot/sm-inline-edit-last-name.gif)  

#### Editing address fields by picking a place in Google Map

![centered-image-466](https://yathit-assets.storage.googleapis.com/screenshot/sm-inline-edit-address-466.gif)    

#### Phone numbers

Phone number has multiple fields like work, home, mobile, etc. For phone number field, in addition to inline editing phone number, these fields can be swap if in wrong labels. 

![centered-image-466](https://yathit-assets.storage.googleapis.com/screenshot/sm-inline-edit-phone-swap-fields.gif)    

#### Editing a related field

![centered-image-466](https://yathit-assets.storage.googleapis.com/screenshot/sm-inline-edit-related.gif)  

#### Using QR / Barcode

QR or barcode are commonly used in industry and often records those values in CRM record fields. You can use mobile phone to scan QR / barcode to update the field. To do so long press on the label of the field to bring up bottom-up menu. Select 'Scan QR/Barcode' menu option to start scanning with your phone camera. Once scanning is completed, the field will be updated. 

![centered-image-466](https://yathit-assets.storage.googleapis.com/screenshot/sm-inline-edit-qr-barcode.gif)

It is also possible to display barcode scanning button on the editing field. Tapping the QR/barcode button will bring up scanning with your phone camera.

![centered-image-466](https://yathit-assets.storage.googleapis.com/screenshot/sm-inline-ocr-button.png)

To display barcode scanning button, specify`'barcode' => true` in `displayParams` of the field in `editviewdefs.php` edit view metadata file. 


    array(
        'EditView' =>
        array(
          ...
    'panels' =>
    array(
      'lbl_account_information' =>
        ...
             array(
                    'name' => 'website',
                    'type' => 'link',
                    'label' => 'LBL_WEBSITE',
                    'displayParams' =>
                      array(
                        'barcode' => true,
                      ),
                  ),
            ),
    ...

Instead of editing original `editviewdefs.php`, copy the file into custom folder, for example `custom/modules/Accounts/metadata/editviewdefs.php`, as [a best practice for customization](https://docs.suitecrm.com/developer/metadata/). 

### Deleting A Record

Go to the record you want to delete and tap overflow menu button, {{ "more-vert" | svg_icon }}, and then tap 'Delete' menu item.

![centered-image-466](https://yathit-assets.storage.googleapis.com/screenshot/sm-record-overflow-menu.png)    
    

### Uploading Files

Be it document or images, you can get an access to the root memory of your device and upload numerous files from your device to CRM. There is no restriction to file types. It can be a DOC, PDF, Presentation, Spreadsheet, Video file, etc. You can also click pictures from your device’s camera (product placements or technical defects) and sync them with your CRM.

To upload a file to Documents module, go to Documents module. If Documents module is not appear in your drawer menu, use CUSTOMIZE MODULE option in the menu and switch on Documents module. In the Document module page, click {{ "add" | svg_icon }}, this will bring up creating a new document record. Tap the upload icon {{ "file-upload" | svg_icon }} in the _File Name_ field. After uploaded, it will create a Document record with the uploaded file. You can edit or relate to the newly created Document. 

![centered-image-466](https://yathit-assets.storage.googleapis.com/screenshot/sm-create-document.gif)    

### Creating And Removing Relationship

If you want to create a new related record, click the Plus {{ "plus" | svg_icon }} button again. You will notice that there is a 'New' button in the select a record dialog panel. Click 'New' button to create a new record. After you click saved, a record will be created and then related to the parent record.

{{ "sm-new-related-case.gif width466" | screenshot }}

To remove the record, simply swipe to the left.

{{ "sm-delete-related.gif width466" | screenshot }}
