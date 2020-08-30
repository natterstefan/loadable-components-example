interface IAppSettings {
  staticUrl: string
}

declare global {
  interface Window {
    app: IAppSettings
  }
}

export { IAppSettings }
