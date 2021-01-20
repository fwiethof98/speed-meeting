const socketIo = require('socket.io')
const express = require('express')
const http = require('http')
const https = require('https')
const { formatWithOptions } = require('util')

const minutes_before_first_match = 5
const minutes_for_each_match = 15

let update_interval
httprequest('/api/event/?action=next').then(data => {
    let new_date = new Date()
    setTimeout(matchUpdateInterval, data.time - new_date + 60000*minutes_before_first_match)
})

function matchUpdateInterval() {
    update_interval = setInterval(() => {
        httprequest('/api/event/start/').then(data => {
            console.log(data)
        })
    }, 60000*minutes_for_each_match)
}

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

const server = http.createServer(app)

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
        httprequest('/api/event/leave/?socket=' + socket.id).then(data => {
            io.to(data.socket).emit("LeaveEvent", "leave")
        })
        console.log("Client disconnect")
    })
    socket.on("UpdateMatch", () => {
        httprequest('/api/event/start/').then(data => {
            console.log(data)
        }) 
    })
    socket.on("LeaveEvent", data => {
        console.log("User left")
        console.log(data)
        io.to(data.socket).emit("LeaveEvent", "leave")
    })
    socket.on("EndEvent", () => {
        clearInterval(interval)
        console.log("Event finished")
        clearInterval(update_interval)
    })
})

const myFun = (data, socket) => {
    const date = new Date(data.time)
    const difference = date - new Date()
    const timer = parseMillisecondsToDate(difference)
    console.log(timer)
    socket.emit("TimerUpdate", {difference: difference, timer: timer, eventDate: date})
    
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