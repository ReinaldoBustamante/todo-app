import { ServerApp } from "./presentation/server"


(() => {
    main()
})()

function main() {
    const serverApp = new ServerApp()

    serverApp.start()
}