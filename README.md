# WhatsApp Electron
WhatsApp Electron is an unofficial WhatsApp desktop client using Electron to wrap WhatsApp Web. While it should work on Windows, Mac and Linux, development was targeted for Linux.

## Run
Use yarn or npm.
`npm install` or `yarn install` to install dependencies, then run `npm run start` or `yarn start`.

## Compilation
`npm run build` or `yarn build` to build AppImage.

#### Credits
Icon by dtafalonso from [IconArchive](http://www.iconarchive.com/show/android-l-icons-by-dtafalonso/WhatsApp-icon.html)


--

#https://github.com/kenxjy/whatsapp-electron
# https://www.digitalocean.com/community/tutorials/how-to-create-your-first-cross-platform-desktop-application-with-electron-on-macos#step-5-building-your-first-application
# https://www.electronjs.org/docs/latest/tutorial/application-distribution

# Step 5 — Building Your First Application
# install the electron-builder CLI tools globally
npm install -g electron-builder

# verify the success of it by running the following command in your terminal
electron-builder --version

# Now you can build your first cross-platform application. To do this open your terminal and run the following command in your project directory:
electron-builder -mwl

# Build applications for Windows:
electron-builder --win


# Your project directory creates a new folder called dist. All your built applications and unzip versions of the application are located in that folder.
cd dist
