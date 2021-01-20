const socketIo = require('socket.io')
const express = require('express')
const http = require('http')
const https = require('https')
const { formatWithOptions } = require('util')


async function httprequest(my_url) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'localhost',
            port: '8000',
            path: my_url
        }
        const req = http.request(options, (res) => {
            let rawData = ''
            res.on('data', (chunk) => {
                rawData += chunk
            })
            res.on('end', () => {
                resolve(JSON.parse(rawData))
            })
        }).on('error', function (err) {
            console.log(err);
        }).end()

    })
}

const port = process.env.PORT || 4001
const index = require("./routes/index")

const app = express()
app.use(index)

const server = https.createServer(app)

const io = socketIo(server)

io.on('connection', (socket) => {
    var interval
    console.log("New connection: " + socket.id)
    socket.emit("SetSocket", socket.id)
    httprequest('/api/event/?action=next').then(data => {
        interval = setInterval(() => myFun(data, socket), 1000)
    }) 
    socket.on("disconnect", () => {
        clearInterval(interval)
        console.log("Client disconnect")
    })
    socket.on("UpdateMatch", () => {
        httprequest('/api/event/start/').then(data => {
            console.log(data)
        }) 
    })
    socket.on("EndEvent", () => {
        clearInterval(interval)
        console.log("Event finished")
    })
})

const myFun = (data, socket) => {
    const date = new Date(data.time)
    const difference = date - new Date()
    const timer = parseMillisecondsToDate(difference)
    console.log(timer)
    socket.emit("TimerUpdate", {difference: difference, timer: timer})
    
}
server.listen(port, () => console.log(`Listening on port ${port}`))

function parseMillisecondsToDate(milliseconds) {
    let result = {}
    milliseconds = Math.floor(milliseconds/1000)
    result.days = Math.floor(milliseconds/86400).toString()
    milliseconds = milliseconds % 86400
    result.hours = Math.floor(milliseconds/3600).toString()
    milliseconds = milliseconds % 3600
    result.minutes = Math.floor(milliseconds / 60).toString()
    milliseconds = milliseconds % 60
    result.seconds = milliseconds.toString()
    return result
}