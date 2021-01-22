import React, { useEffect, useRef, useState } from 'react'
import { djangoLookup } from '../../functions/lookup'
import EventMatch from './EventMatch'
import Feedback from './Feedback'
import {event} from '../config'
import openSocket from "socket.io-client"
import ContainerTemplate from '../templates/ContainerTemplate'
import Countdown from '../templates/Timer'
import {feedback_entries} from '../config'
import EventCurrent from './EventCurrent'
import EventNoMatch from './EventNoMatch'

const ENDPOINT = "http://" + window.location.hostname + ":4001"

function Event(props) {
    const [eventDisplay, _setEventDisplay] = useState("waiting")
    const eventDisplayRef = useRef(eventDisplay)
    const setEventDisplay = data => {
        eventDisplayRef.current = data
        _setEventDisplay(data)
    }
    const [meetingCounter, _setMeetingCounter] = useState(0)
    const meetingCounterRef = useRef(meetingCounter)
    const setMeetingCounter = data => {
        meetingCounterRef.current = data
        _setMeetingCounter(data)
    }

    const [leaveError, setLeaveError] = useState({display: false, message: "This is an error"})

    const [nextEvent, setNextEvent] = useState([])
    const [nextRoom, _setNextRoom] = useState([])
    const nextRoomRef = useRef(nextRoom)
    const setNextRoom = data => {
        nextRoomRef.current = data
        _setNextRoom(data)
    }

    const [match, _setMatch] = useState([])
    const matchRef = useRef(match)
    const setMatch = data => {
        matchRef.current = data
        _setMatch(data)
    }

    const [socket, setSocket] = useState(false)
    const [timer, _setTimer] = useState({days: "-1", hours: "0", minutes: "0", seconds: "0"})
    const [matchTimer, setMatchTimer] = useState({days: "-1", hours: "0", minutes: "0", seconds: "0"})
    const [feedbackTimer, setFeedbackTimer] = useState({days: "-1", hours: "0", minutes: "0", seconds: "0"})
    const [timeRef, _setTimeRef] = useState(new Date())
    const timeRefRef = useRef(timeRef)
    const setTimeRef = data => {
        timeRefRef.current = data
        _setTimeRef(data)
    }

    const [difference, _setDifference] = useState(0)
    const differenceRef = useRef(difference)
    const timerRef = useRef(timer)
    const setDifference = data => {
        differenceRef.current= data
        _setDifference(data)
    }
    const setTimer = data => {
        timerRef.current = data
        _setTimer(data)
    }

    const [participate, _setParticipate] = useState(true)
    const participateRef = useRef(participate)
    const setParticipate = data => {
        participateRef.current = data
        _setParticipate(data)
    }

    if(!socket) {
        setSocket(openSocket(ENDPOINT, {transports: ['websocket']}))
    }

    useEffect(() => {
        djangoLookup("GET", "/event/?action=next", {}, (response, status) => {
            status === 200 && setNextEvent(response)
        })
        djangoLookup("GET", "/room/?action=my", {}, (response, status) => {
            status === 200 && setNextRoom(response)
            console.log(response)
        })
        djangoLookup("GET", "/match/", {}, (response, status) => {
            status === 200 && setMatch(response)
            console.log(response)
        })
    }, [])

    useEffect(() => {
        socket.on("SetSocket", data => {
            djangoLookup("POST", "/socket/", {socketID: data}, (response, status) => {
                console.log(response)
            })
        })
        socket.on("LeaveEvent", data => {
            setEventDisplay("current")
            setLeaveError({display: true, message: "Your match left the event, please wait for the next round!"})
        })
        socket.on("TimerUpdate", data => {
            // INITIALIZE MEETING
            let begin_to_first_match = 5
            let talk_duration = 10
            let feedback_duration = 5
            let n_rounds = 3
            
            let match_duration = talk_duration + feedback_duration
            if(timerRef.current.seconds < 0 && eventDisplayRef.current === "waiting") {
                djangoLookup("GET", "/event/?action=next", {}, (response, status) => {
                    status === 200 && setNextEvent(response)
                })
                setEventDisplay("current")
            }
            if(parseInt(timerRef.current.seconds) + parseInt(timerRef.current.minutes) * 60 <= -begin_to_first_match) {
                let match_time = (Math.abs(parseInt(timerRef.current.seconds)) - begin_to_first_match + Math.abs(parseInt(timerRef.current.minutes) * 60)) % match_duration
                if(match_time === 0 && eventDisplayRef.current === "current" && meetingCounterRef.current !== n_rounds) {
                    setMeetingCounter(meetingCounterRef.current + 1)
                    if(participateRef.current === true) {
                        djangoLookup("GET", "/room/?action=my", {}, (response, status) => {
                            status === 200 && setNextRoom(response)
                        })
                        djangoLookup("GET", "/match/", {}, (response, status) => {
                            status === 200 && setMatch(response)
                            console.log(response)
                        })
                        if(matchRef.current.length === 0) {
                            setEventDisplay("nomatch")
                        } else {
                            setEventDisplay("match")
                        }
                        let date = new Date()
                        setTimeRef(new Date(date.getTime() + match_duration*1000))
                    }
                } else if(match_time === talk_duration && eventDisplayRef.current === "match") {
                    setEventDisplay("feedback")
                    let date = new Date()
                    setTimeRef(new Date(date.getTime() + feedback_duration*1000))
                } else if(match_time === 0 && eventDisplayRef.current === "feedback" || eventDisplayRef.current === "nomatch") {
                    setMeetingCounter(meetingCounterRef.current + 1)
                    djangoLookup("GET", "/room/?action=my", {}, (response, status) => {
                        status === 200 && setNextRoom(response)
                    })
                    djangoLookup("GET", "/match/", {}, (response, status) => {
                        status === 200 && setMatch(response)
                    })
                    if(matchRef.current.length === 0) {
                        setEventDisplay("nomatch")
                    } else {
                        setEventDisplay("match")
                    }
                    let date = new Date()
                    setTimeRef(new Date(date.getTime() + match_duration*1000))
                } else if(meetingCounterRef.current === n_rounds) {
                    console.log("meeting ended")
                    setEventDisplay("end")
                    socket.emit("EndEvent")
                    djangoLookup("GET", "/event/?action=next", {}, (response, status) => {
                        status === 200 && setNextEvent(response)
                    })
                }
            }
            let new_date = new Date()
            setMatchTimer(parseMillisecondsToDate(timeRefRef.current - new_date))
            setFeedbackTimer(parseMillisecondsToDate(timeRefRef.current - new_date))
            setDifference(data.difference)
            setTimer(data.timer)
        })
    }, [socket])

    event.title_component = <div style={{textAlign: "center"}}>
        <Countdown days={timer.days} hours={timer.hours} minutes={timer.minutes} seconds={timer.seconds} />
        <p style={{marginBottom: 20}}>{prettifyDate(new Date(nextEvent.time))}</p>
        </div>

    event.event_tab_options.current.component = <EventCurrent leaveError={leaveError} nextEvent={nextEvent} socket={socket} setEventDisplay={setEventDisplay} setParticipate={setParticipate} />
    event.event_tab_options.match.component = <EventMatch setParticipate={setParticipate} setLeaveError={setLeaveError} timer={matchTimer} setEventDisplay={setEventDisplay} nextEvent={nextEvent} match={nextRoomRef.current} socket={socket} user={match} />
    event.event_tab_options.feedback.component = <Feedback timer={feedbackTimer} setEventDisplay={setEventDisplay} user={match} entries={feedback_entries} />
    event.event_tab_options.nomatch.component = <EventNoMatch timer={matchTimer} setParticipate={setParticipate} socket={socket} setEventDisplay={setEventDisplay} user={match} entries={feedback_entries} />
    if(participate) {
        if(eventDisplay === "waiting") { event.tabs[2] = event.event_tab_options.waiting }
        else if(eventDisplay === "current") { event.tabs[2] = event.event_tab_options.current }
        else if(eventDisplay === "match") { event.tabs[2] = event.event_tab_options.match }
        else if(eventDisplay === "nomatch") { event.tabs[2] = event.event_tab_options.nomatch }
        else if(eventDisplay === "feedback") { event.tabs[2] = event.event_tab_options.feedback }
        else if(eventDisplay === "end") { event.tabs[2] = event.event_tab_options.end }
    } else {
        if(eventDisplay === "waiting") { event.tabs[2] = event.event_tab_options.waiting }
        else if(eventDisplay === "current") { event.tabs[2] = event.event_tab_options.current }
        else if(eventDisplay === "end") { event.tabs[2] = event.event_tab_options.end }
    }
    return <ContainerTemplate tabData={event} showButtons={false} />
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

function prettifyDate(date) {
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const displayTwoDigits = (number) => {
        if(number < 10) {
            return "0" + number
        } else {
            return number
        }
    }
    return weekdays[date.getDay()] + ", " + date.getDate() + ". " + months[date.getMonth()] + " " + date.getFullYear() + ", " + displayTwoDigits(date.getHours()) + ":" + displayTwoDigits(date.getMinutes())
}

export default Event