import React, { useEffect, useState } from 'react'
import { djangoLookup } from '../../functions/lookup'
import EventMatch from './EventMatch'
import Feedback from './Feedback'
import {event} from '../config'
import openSocket from "socket.io-client"
import ContainerTemplate from '../templates/ContainerTemplate'
import Countdown from '../templates/Timer'
import { bbbCall } from '../../functions/createApiCall'
import {feedback_entries} from '../config'
import EventCurrent from './EventCurrent'
import EventNoMatch from './EventNoMatch'

const ENDPOINT = "http://" + window.location.hostname + ":4001"

function Event(props) {
    const [eventDisplay, setEventDisplay] = useState("waiting")

    const [nextEvent, setNextEvent] = useState([])
    const [nextRoom, setNextRoom] = useState([])
    const [match, setMatch] = useState([])

    const [socket, setSocket] = useState(false)
    const [timer, setTimer] = useState([])
    const [difference, setDifference] = useState(0)

    const [participate, setParticipate] = useState(true)

    if(!socket) {
        setSocket(openSocket(ENDPOINT, {transports: ['websocket']}))
    }

    useEffect(() => {
        djangoLookup("GET", "/event/?action=next", {}, (response, status) => {
            status === 200 && setNextEvent(response)
        })
        djangoLookup("GET", "/room/?action=my", {}, (response, status) => {
            status === 200 && setNextRoom(response)
        })
        djangoLookup("GET", "/match/", {}, (response, status) => {
            status === 200 && setMatch(response)
        })
    }, [])

    useEffect(() => {
        socket.on("SetSocket", data => {
            console.log(data)
        })
        socket.on("TimerUpdate", data => {
            // INITIALIZE MEETING
            // if(Math.abs(parseInt(data.timer.seconds) % 3) === 0) {
            //     setEventDisplay(false)
            //     setFeedbackDisplay(true)
            // }
            // if(Math.abs(parseInt(data.timer.seconds) % 3) === 1) {
            //     setEventDisplay(true)
            //     setFeedbackDisplay(false)
            // }
            // if(Math.abs(parseInt(data.timer.seconds) % 3) === 2) {
            //     setEventDisplay(true)
            //     setFeedbackDisplay(true)
            // }
            if(data.difference < 0 && difference > 0) {
                setEventDisplay("current")
                window.open(bbbCall("join", nextEvent)) // REDIRECT TO MAIN MEETING, SHOW MEETING PAGE
            }
            if(data.difference < 0) {
                if((parseInt(timer.minutes) - 5) % 15 < 0 && (parseInt(data.timer.minutes) - 5) % 15 === 0) {
                    setEventDisplay("match")
                    window.open(bbbCall("join", nextRoom)) // GET AND REDIRECT TO NEXT BREAKOUT ROOM, SHOW MEETING PAGE
                } else if((parseInt(timer.minutes) - 5) % 15 < 10 && (parseInt(data.timer.minutes) - 5) % 15 > 10) {
                    setEventDisplay("feedback")
                }
            }
            if(parseInt(timer.hours) === 2) {
                setEventDisplay("end")
                socket.emit("EndEvent", {})
            }
            setTimer(data.timer)
            setDifference(data.difference)
        })
    }, [socket])

    event.title_component = <Countdown days={timer.days} hours={timer.hours} minutes={timer.minutes} seconds={timer.seconds} />

    // false - true = Waiting, 
    // true - false = Match, 
    // true - true = Feedback
    // false - false = Participate
    
    event.event_tab_options.current.component = <EventCurrent setParticipate={setParticipate} />
    event.event_tab_options.match.component = <EventMatch user={match} />
    event.event_tab_options.feedback.component = <Feedback setEventDisplay={setEventDisplay} user={match} entries={feedback_entries} />
    event.event_tab_options.nomatch.component = <EventNoMatch setEventDisplay={setEventDisplay} user={match} entries={feedback_entries} />
    if(participate) {
        if(eventDisplay === "waiting") { event.tabs[1] = event.event_tab_options.waiting }
        else if(eventDisplay === "current") { event.tabs[1] = event.event_tab_options.current }
        else if(eventDisplay && "match") { event.tabs[1] = event.event_tab_options.match }
        else if(eventDisplay && "nomatch") { event.tabs[1] = event.event_tab_options.nomatch }
        else if(eventDisplay && "feedback") { event.tabs[1] = event.event_tab_options.feedback }
    } else {
        event.tabs[1] = event.event_tab_options[3]
    }

    return <ContainerTemplate tabData={event} showButtons={false} />
}

export default Event