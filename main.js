const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 860, backgroundColor: "#111",
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, "app", "index.html"));
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
