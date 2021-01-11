import React, { useEffect, useState } from 'react'
import Countdown from './Countdown'
import openSocket from "socket.io-client"

const ENDPOINT = "http://" + window.location.hostname + ":4001"

function Event(props) {
    const [socket, setSocket] = useState(false)
    const [timer, setTimer] = useState([])
    const nextDate = new Date()

   if(!socket) {
        setSocket(openSocket(ENDPOINT, {transports: ['websocket']}))
    }

    useEffect(() => {
        socket.on("SetSocket", data => {
            console.log(data)
        })
        socket.on("NewDate", data => {
            let difference = new Date(data) - nextDate
            // console.log(parseMillisecondsToDate(difference))
            setTimer(parseMillisecondsToDate(difference))
        })
    }, [socket])



    return <div>
        {timer && <Countdown days={timer.days} hours={timer.hours} minutes={timer.minutes} seconds={timer.seconds} />}
    </div>
}

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

export default Event