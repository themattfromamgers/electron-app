const {app, BrowserWindow} = require('electron')

function createWin(){
    const win = new BrowserWindow({
        width: 800,
        height: 400
    })
    win.loadURL('https://www.google.com')
}

app.whenReady().then(()=>{
    createWin()

    app.on('activate', ()=>{
        if(BrowserWindow.getAllWindows().length ===0){
            createWin()
        }
    })
})

app.on('window-all-closed',()=>{
    if(process.platform !=='darwin'){
        app.quit()
    }
})