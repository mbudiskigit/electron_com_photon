const electron = require('electron')
const url = require('url')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog;
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;

let janela

function createWindow () {
  
  janela = new BrowserWindow({width: 800, height: 600})
  janela.setMenu(null);

  //janela.loadURL("http://www.schoolofnet.com")
  janela.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file'
  }));

  //janela.webContents.openDevTools();
  

}

app.on('ready', createWindow)