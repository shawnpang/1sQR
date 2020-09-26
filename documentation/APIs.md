# 1s QR APIs

---
[toc]

---

## Use Cases

### Create QR Display
1s QR should allow clients to use the platform to create, publish and create a QR code for a virtual display of flyers and menus. A user should go through the following steps:

- **Step 1**: upload the media
    - through the following methods:
        - Mobile - Upload from Photo Galleries
        - Mobile - Take a picture with camera
        - Desktop - Upload pictures from local
        - Desktop - Upload a pdf file from local
    - Note that in the last option the received media is a pdf file ready to be published, so the system goes to Step 2.
- **Step 2**: Modify the media
    - Flatten the image (optional)
        - We should flaten the image from back end
    - Change orders
        - the default order should be the order our user uploaded all the images in
        - if there is only one image, we do not need to change orders
- **Step 3**: Set access code, title, and domain for the media
    - The **access code** will be the only and unretrivable credential to manage the QR display once created
    - The **domain** will be the subdomain (file path) of the file, and this should unique among all published media

    - **Note that we can decide whether send the access code to email or not**

- **Step 4**: receive and share the QR code
    - The user should see the QR code on screen with the option to receive it
    - The user can also share the QR code through email or other social media



### View QR Display
Any one should be able to view the published media by scanning the QR code on their phone.

**It should be decided whether we want to render the PDF file directly and set a separate page for other options, or render the PDF file through an iframe so we can add other options on the same page**

The user should be able to get redirected to the admin dashboard by using the access code.




### Manage QR Display
The following features should be supported:

- Display Metrics
    - total view
    - graphs for # of views
    - others?
- Change title and Domain
    - Change the title and domain
- Change Media
    - Reupload a new media with the same steps in Create **QR Display**
- Delete Media
    - Permanently delete the media


---
## API Reference




---
## Others
