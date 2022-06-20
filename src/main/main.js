const path = require('path');
const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const axios = require('./modules/axios')

const isDev = process.env.IS_DEV == "true" ? true : false;
let mainWindow;

function createWindow() {
  Menu.setApplicationMenu(null)

  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/preload.js'),
      nodeIntegration: true,
      webSecurity: false
    },
  });
 
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../../core/index.html')}`
  );
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

// 初始化事件监听器
initHandles()

app.whenReady().then(() => {
  
  createWindow()
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});
 
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});



function initHandles(){
  ipcMain.handle('axios', async (event, method, ...args) => {
      let result = await axios[method](args)
      return result
  })
}