To setup the app:
`npm install`

To start the webpack-dev-server with HMR:
`npm run watch`

To start the app using Electron with ES6:
`npm run start-electron-es6`

To start the app using Electron with ES5:
`npm run start-electron-es5`

To build the executable for Electron (Windows, default to ES5, using app_root/index.js):
`npm run electron-build-exe`

To start the app using OpenFIN:
1. Spin up the server first.
2. Open the link with a browser: https://dl.openfin.co/services/download?fileName=openfin-app&config=http://localhost:9070/app_local.json to download the installer
3. Install the app
4. Run the app