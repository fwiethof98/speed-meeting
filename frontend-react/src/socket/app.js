const socketIo = require('socket.io')
const express = require('express')
const http = require('http')
const needle = require('needle')

const port = process.env.PORT || 4001
const index = require("./routes/index")

const app = express()
app.use(index)

const server = http.createServer(app)

const io = socketIo(server)

io.on('connection', (socket) => {
    console.log("New connection: " + socket.id)
    socket.emit("SetSocket", socket.id)
    socket.on("disconnect", () => {
        // needle.post('http://localhost/api/auth/users/socket', {action: "disconnect", socketId: socket.id}, (err, res) => {
        //     if(err) {
        //         // console.error(err)
        //     }
        //     console.log(res.body)
        // })
        console.log("Client disconnected")
    })
    socket.on('channelMessage', (data) => {
        for(let i=0; i < data.users.length; i++) {
            io.to(data.users[i].socket).emit('channelMessageResponse', {content: data.content, channel: data.channel, sender: data.sender})
        }
    })
    socket.on('stream', (data) => {
        socket.emit('userStream', data)
    })
    socket.on('radio', function(blob) {
        // can choose to broadcast it to whoever you want
        // socket.emit('voice', blob);
    });
    socket.on('duelInvite', (data) => {
        // console.log(data)
        receivers = data.duel.receivers
        for(let i = 0; i < receivers.length; i++) {
            io.to(receivers[i].socket).emit('duelInvite', data)
            console.log(receivers[i].socket)
        }
    })
    socket.on('duelAccept', (data) => {
        receivers = data.duel.receivers
        creator = data.duel.creator
        all_users = receivers.concat(creator)
        for(let i = 0; i < all_users.length; i++) {
           io.to(all_users[i].socket).emit('duelStart', data)
        }
    })
    socket.on('duelFinished', (data) => {
        receivers = data.receivers
        creator = data.creator
        all_users = receivers.concat(creator)
        for(let i = 0; i < all_users.length; i++) {
            lookupHttp('/api/auth/users/?action=all&name='+all_users[i].username, res => {
                var json = '';

                res.on('data', function (chunk) {
                    json += chunk;
                });
            
                res.on('end', function () {
                    var data = JSON.parse(json);
                    console.log(data)
                    io.to(data[0].socket).emit('duelFinished', {})
                });
            })
        }
    })
})


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