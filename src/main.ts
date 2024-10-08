import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow | null = null;

// Disable hardware video acceleration (libva)
app.commandLine.appendSwitch('disable-accelerated-video');
app.commandLine.appendSwitch('disable-accelerated-video-decode');

// Also disable GPU hardware acceleration entirely (for software rendering)
app.disableHardwareAcceleration();  // Disable GPU
app.commandLine.appendSwitch('disable-gpu');  // Disable GPU completely
app.commandLine.appendSwitch('disable-gpu-compositing');  // Disable GPU compositing
app.commandLine.appendSwitch('disable-software-rasterizer');  // No fallback to GPU rasterizer

function createWindow(): void {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
