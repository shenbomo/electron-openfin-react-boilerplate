import electron from 'electron' 
import devtron from 'devtron'

const app = electron.app
const BrowserWindow = electron.BrowserWindow

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit()
  }
})
app.on('ready', function() {
  let mainWindow = new BrowserWindow({width: 1360, height: 800})
  mainWindow.loadURL('http://localhost:8080/index_electron.html')
  mainWindow.openDevTools()
  devtron.install()
  mainWindow.on('closed', function() {
    mainWindow = null
  })
})