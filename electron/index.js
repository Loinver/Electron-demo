/*
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2023-02-17 14:09:09
 * @LastEditors: Linyer
 * @LastEditTime: 2023-02-20 10:37:30
 */
import { app, BrowserWindow } from 'electron'
import path from 'path'

// 修改应用属性设置
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1366,
    height: 768,
    title: '示例工程',
    transparent: true,
    frame: app.isPackaged ? false : true,
    webPreferences: {
      preload: path.join(__dirname, './preload/index.js'),
      nodeIntegration: true,
    },
  })

  win.webContents.openDevTools() // 打开控制台
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, '../index.html'))
  } else {
    // 🚧 Use ['ENV_NAME'] avoid vite:define plugin
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
