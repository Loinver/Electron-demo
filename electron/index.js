/*
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2023-02-17 14:09:09
 * @LastEditors: Linyer
 * @LastEditTime: 2023-03-03 13:38:17
 */
import { app, BrowserWindow, Menu } from 'electron'
import path from 'path'

// 修改应用属性设置
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1366,
    height: 768,
    title: '示例工程',
    transparent: true,
    frame: app.isPackaged ? false : true,
    // autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, './preload/index.js'),
      nodeIntegration: true,
    },
  })
  // 菜单配置
  const myMenuTemplate = [
    {
      // 设置菜单项文本
      label: '文件',
      // 设置子菜单
      submenu: [
        {
          label: '关于 Electron',
          // 设置菜单角色
          role: 'about', // about （关于），此值只针对 Mac  OS X 系统
          // 点击事件 role 属性能识别时 点击事件无效
          click: () => {
            var aboutWin = new BrowserWindow({
              width: 400,
              height: 200,
              parent: win,
              modal: true,
            })
            aboutWin.loadFile('about.html')
          },
        },
        {
          // 设置菜单的类型是分隔栏
          type: 'separator',
        },
        {
          label: '关闭',
          // 设置菜单的热键
          accelerator: 'Command+Q',
          click: () => {
            win.close()
          },
        },
      ],
    },
    {
      label: '编辑',
      submenu: [
        {
          label: '复制',
          click: () => {
            win.webContents.insertText('复制')
          },
        },
        {
          label: '剪切',
          click: () => {
            win.webContents.insertText('剪切')
          },
        },
        {
          type: 'separator',
        },
        {
          label: '查找',
          accelerator: 'Command+F',
          click: () => {
            win.webContents.insertText('查找')
          },
        },
        {
          label: '替换',
          accelerator: 'Command+R',
          click: () => {
            win.webContents.insertText('替换')
          },
        },
      ],
    },
  ]
  //  创建菜单对象
  const menu = Menu.buildFromTemplate(myMenuTemplate)
  //  设置应用菜单
  Menu.setApplicationMenu(menu)
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
