// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronApi", {
  setTitle: (title: string) => ipcRenderer.send("set-title", title),
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
  onUpdateValue: (
    cb: (event: Electron.IpcRendererEvent, ...args: any[]) => void
  ) => ipcRenderer.on("update-value", cb),
});
