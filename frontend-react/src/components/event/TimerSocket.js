import React, { useEffect, useState } from 'react'
import Countdown from '../templates/Timer'
import openSocket from "socket.io-client"
import { djangoLookup } from '../../functions/lookup'
import { bbbCall } from '../../functions/createApiCall'

const ENDPOINT = "http://" + window.location.hostname + ":4001"

function TimerSocket(props) {
    const [socket, setSocket] = useState(false)
    const [timer, setTimer] = useState([])
    const [difference, setDifference] = useState(0)
    const [nextMeeting, setNextMeeting] = useState([])
    const [mainMeeting, setMainMeeting] = useState([])
    const nextDate = new Date()

    const {showEventDisplay, showFeedbackDisplay} = props

    if(!socket) {
        setSocket(openSocket(ENDPOINT, {transports: ['websocket']}))
    }

    useEffect(() => {
        djangoLookup("GET", "/matching/events/?action=next", {}, (response, status) => {
            setNextMeeting(response)
        })
        djangoLookup("GET", "/matching/events/?action=main", {}, (response, status) => {
            setMainMeeting(response)
        })
    }, [])

    useEffect(() => {
        socket.on("SetSocket", data => {
            console.log(data)
        })
        socket.on("TimerUpdate", data => {
            // INITIALIZE MEETING
            if(data.difference < 0 && difference > 0) {
                showEventDisplay(true)
                window.open(bbbCall("join", mainMeeting)) // REDIRECT TO MAIN MEETING, SHOW MEETING PAGE
            }
            if(data.difference < 0) {
                if((parseInt(timer.minutes) - 5) % 15 < 0 && (parseInt(data.timer.minutes) - 5) % 15 === 0) {
                    showEventDisplay(true)
                    showFeedbackDisplay(false)
                    window.open(bbbCall("join", nextMeeting)) // GET AND REDIRECT TO NEXT BREAKOUT ROOM, SHOW MEETING PAGE
                } else if((parseInt(timer.minutes) - 5) % 15 < 10 && (parseInt(data.timer.minutes) - 5) % 15 > 10) {
                    showEventDisplay(false)
                    showFeedbackDisplay(false)
                }
            }
            if(parseInt(timer.hours) === 2) {
                showEventDisplay(true)
                showFeedbackDisplay(false)
                socket.emit("EndEvent", {})
            }
            setTimer(data.timer)
            setDifference(data.difference)
        })
    }, [socket])

    return <div>
        {timer && difference >= 0 && <Countdown days={timer.days} hours={timer.hours} minutes={timer.minutes} seconds={timer.seconds} />}
    </div>
}

export default TimerSocket