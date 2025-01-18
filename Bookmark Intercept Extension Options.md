To make your Firefox extension more permanent and avoid the need to re-add it every time you restart the browser, you have a few options:

1. **Using Firefox Developer Edition or Nightly**: Firefox Developer Edition and Firefox Nightly allow you to install temporary extensions that persist between browser restarts. You can use this feature to install your extension once and it will remain installed until you explicitly remove it.
    
    **Steps**:
    
    1. Download and install [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) or [Firefox Nightly](https://www.mozilla.org/en-US/firefox/nightly/).
    2. Open Firefox Developer Edition or Nightly.
    3. Go to `about:debugging`.
    4. Click on "This Firefox".
    5. Click on "Load Temporary Add-on" and select your `manifest.json` file.
    6. Your extension will remain installed even after you restart the browser.
2. **Using an `extensions.json` file**: You can configure Firefox to install extensions automatically by creating an `extensions.json` file in your Firefox profile directory. This approach is suitable for personal use but requires some setup.
    
    **Steps**:
    
    1. Find your Firefox profile directory:
        - Open Firefox.
        - Go to `about:support`.
        - Under "Profile Folder", click on "Open Folder".
    2. Create a new file named `extensions.json` in your profile directory with the following content, replacing `path/to/your/extension` with the actual path to your extension:
       ```json
		{
		   "addons": {
		      "your-extension@your-domain.com": {
		         "id": "your-extension@your-domain.com",
		         "location": "app-profile",
		         "path": "/path/to/your/extension"
		      }
		   }
		}

        ```
    3. Make sure the path to your extension is correct. This should be the absolute path to the directory containing your `manifest.json` file.
    4. Restart Firefox, and your extension should be installed automatically.
- **Packaging and Installing as a Permanent Extension**: If you prefer to create a more permanent solution without needing to use Developer Edition or Nightly, you can package your extension as an XPI file and install it manually. This method involves creating an official extension but only for personal use.
    
    **Steps**:
    
    1. Package your extension:
        - Zip the contents of your extension directory (including `manifest.json` and other files).
        - Rename the zip file to `your-extension.xpi`.
    2. Install the extension:
        - Open Firefox.
        - Go to `about:addons`.
        - Click on the gear icon and select "Install Add-on From File".
        - Select your `your-extension.xpi` file.
        - Your extension will be installed and persist between restarts.
- **Using Policies to Install Extensions**: If you want to automate the installation of the extension without manually adding it, you can use Firefox policies (suitable for enterprise environments but can also be used for personal use).
    
    **Steps**:
    
    1. Create a `policies.json` file in the Firefox installation directory (e.g., `/usr/lib/firefox/distribution/policies.json` on Linux).
    2. Add the following content to the `policies.json` file, replacing `path/to/your/extension` with the actual path to your extension:
       ```json
		{
		   "policies": {
		      "Extensions": {
		         "Install": [
		            "file:///path/to/your/extension/your-extension.xpi"
		         ]
		      }
		   }
		}

		```
    1. Restart Firefox, and your extension should be installed automatically.

These methods provide varying levels of permanence and automation for your extension. Choose the one that best suits your needs and setup. If you have any questions or need further assistance with any of these methods, feel free to ask!