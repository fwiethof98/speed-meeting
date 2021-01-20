import React, { useEffect, useRef, useState } from 'react'
import { bbbLookup, djangoLookup } from '../../functions/lookup'
import EventMatch from './EventMatch'
import Feedback from './Feedback'
import {event} from '../config'
import openSocket from "socket.io-client"
import ContainerTemplate from '../templates/ContainerTemplate'
import Countdown from '../templates/Timer'
import { bbbCall, urlCall } from '../../functions/createApiCall'
import {feedback_entries} from '../config'
import EventCurrent from './EventCurrent'
import EventNoMatch from './EventNoMatch'

const ENDPOINT = "http://" + window.location.hostname + ":4001"

function Event(props) {
    const [eventDisplay, setEventDisplay] = useState("current")

    const [nextEvent, setNextEvent] = useState([])
    const [nextRoom, setNextRoom] = useState([])
    const [match, setMatch] = useState([])

    const [socket, setSocket] = useState(false)
    const [timer, setTimer] = useState([])
    const [difference, _setDifference] = useState(0)
    const differenceRef = useRef(difference)
    const setDifference = data => {
        differenceRef.current= data
        _setDifference(data)
    }

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
            console.log(differenceRef.current)
            console.log(data.difference)
            if(data.difference <= 0 && differenceRef.current > 0) {
                setEventDisplay("current")
                // window.open(bbbCall("join", params)) // REDIRECT TO MAIN MEETING, SHOW MEETING PAGE
            }
            if(data.difference < 0) {
                if((parseInt(timer.minutes) - 5) % 15 < 0 && (parseInt(data.timer.minutes) - 5) % 15 === 0) {
                    setEventDisplay("match")
                    window.open(bbbCall("join", nextRoom)) // GET AND REDIRECT TO NEXT BREAKOUT ROOM, SHOW MEETING PAGE
                } else if((parseInt(timer.minutes) - 5) % 15 < 10 && (parseInt(data.timer.minutes) - 5) % 15 > 10) {
                    setEventDisplay("feedback")
                }
            }
            // if(parseInt(timer.hours) === 2) {
            //     setEventDisplay("end")
            //     socket.emit("EndEvent", {})
            // }
            setTimer(data.timer)
            setDifference(data.difference)
        })
    }, [socket])

    event.title_component = <Countdown days={timer.days} hours={timer.hours} minutes={timer.minutes} seconds={timer.seconds} />

    event.event_tab_options.current.component = <EventCurrent nextEvent={nextEvent} socket={socket} setParticipate={setParticipate} />
    event.event_tab_options.match.component = <EventMatch socket={socket} user={match} />
    event.event_tab_options.feedback.component = <Feedback setEventDisplay={setEventDisplay} user={match} entries={feedback_entries} />
    event.event_tab_options.nomatch.component = <EventNoMatch socket={socket} setEventDisplay={setEventDisplay} user={match} entries={feedback_entries} />
    if(participate) {
        if(eventDisplay === "waiting") { event.tabs[1] = event.event_tab_options.waiting }
        else if(eventDisplay === "current") { event.tabs[1] = event.event_tab_options.current }
        else if(eventDisplay && "match") { event.tabs[1] = event.event_tab_options.match }
        else if(eventDisplay && "nomatch") { event.tabs[1] = event.event_tab_options.nomatch }
        else if(eventDisplay && "feedback") { event.tabs[1] = event.event_tab_options.feedback }
    } else {
        event.tabs[1] = event.event_tab_options.current
    }

    return <ContainerTemplate tabData={event} showButtons={false} />
}

export default Event