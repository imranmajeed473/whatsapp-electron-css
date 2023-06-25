const { BrowserWindow, shell } = require('electron');
const path = require('path');

const userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.131 Safari/537.36';

function loadWhatsApp() {
  const window = new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, '../assets/512x512.png'),
    webPreferences: { 
      // devTools: false,
      preload: path.join(__dirname, 'preload.js')
    },
  });

  window.setMenuBarVisibility(false);

  window.on('close', (event) => { 
    event.preventDefault();
    window.hide();
  });

  window.webContents.on('new-window', (event, url) => {
    shell.openExternal(url);
    event.preventDefault();
  });

  window.loadURL('https://web.whatsapp.com/', { userAgent });
  // Wait for the window to finish loading
  window.webContents.on('did-finish-load', () => {
    // Inject CSS styles - 1
    window.webContents.insertCSS(`
      span[data-display="Imran Majeed"] {color: #ff0000; font-size: xx-large; font-weight: 900; }
      span[title="Shiraz Inserito"] {color: #3e00ff; }
      span[data-testid="chat-butterbar"] {display: none; }
    `);
    // Inject CSS styles - 2
    // const rootDir = path.resolve(__dirname, '..');
    // const cssPath = path.join(rootDir, 'style.css');
    // const cssContent = fs.readFileSync(cssPath, 'utf8');
    // window.webContents.insertCSS(cssContent);
    // Inject CSS styles - end

  });

  return window;
}

module.exports = { loadWhatsApp };
