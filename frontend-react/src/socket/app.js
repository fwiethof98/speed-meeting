const socketIo = require('socket.io')
const express = require('express')
const http = require('http')

const port = process.env.PORT || 4001
const index = require("./routes/index")

const app = express()
app.use(index)

const server = http.createServer(app)

const io = socketIo(server)
let interval

io.on('connection', (socket) => {
    console.log("New connection: " + socket.id)
    socket.emit("SetSocket", socket.id)
    // if(interval) {
    //     clearInterval(interval)
    // }
    interval = setInterval(() => myFun(socket), 1000)
    socket.on("disconnect", () => {
        console.log("Client disconnect")
        // clearInterval(interval)
    })
})

const myFun = socket => {
    const response = new Date()
    socket.emit("NewDate", response)
}


server.listen(port, () => console.log(`Listening on port ${port}`))

function lookupHttp(url, callback) {
    
    var options = {
        host: 'localhost',
        path: url,
        headers: {
            'Accept': 'application/json',
        },
    }
    http.get(options, (res) => callback(res)).on('error', function (err) {
        console.log('Error:', err);
    }); 
}