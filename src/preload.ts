const { contextBridge, ipcRenderer } = require('electron');

// Expose APIs to the renderer process securely
contextBridge.exposeInMainWorld('electronAPI', {
    sendData: (data:any) => ipcRenderer.send('send-data', data),
    receiveData: (callback:any) => ipcRenderer.on('receive-data', (_, data) => callback(data))
});
