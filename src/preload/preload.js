const { contextBridge, ipcRenderer } = require('electron')
const fs = require('fs')
const path = require('path')
const os = require('os')

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json')))

contextBridge.exposeInMainWorld('$electron', {
    title: 'Electron-Vite',
    packageJson: packageJson,
    platform: os.platform(),
    // ipcRenderer: ipcRenderer,
    ipcRenderer: {
        on: (channel, listener) => {
            ipcRenderer.on(channel, listener)
        },
        once: (channel, listener) => {
            ipcRenderer.once(channel, listener);
        },
        removeListener: (channel, listener) => {
            ipcRenderer.removeListener(channel, listener);
        }
    }
})