// src/electron-api.d.ts
export {};

declare global {
  interface Window {
    electronApi: {
      setTitle: (title: string) => void;
      openFile: () => Promise<string | undefined>;
      onUpdateValue: (event: Electron.IpcRendererEvent, ...args: any[]) => void;
      // 可以继续添加其他方法
    };
  }
}
