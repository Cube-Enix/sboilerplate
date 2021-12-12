/* boilerplate, no touch. ever. */

const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    // probably a bad idea that these are hardcoded in, but there isnt a real alternative tbh
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('electron/index.html')
}

app.whenReady().then(() => {
  createWindow()
})