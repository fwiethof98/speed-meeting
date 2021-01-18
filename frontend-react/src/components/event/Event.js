import React, { useEffect, useState } from 'react'
import { djangoLookup } from '../../functions/lookup'
import EventWaiting from './EventWaiting'
import EventCurrent from './EventCurrent'
import Feedback from './Feedback'
import {event} from '../config'
import ContainerTemplate from '../templates/ContainerTemplate'

function Event(props) {
    const [eventDisplay, setEventDisplay] = useState(false)
    const [feedbackDisplay, setFeedbackDisplay] = useState(true)

    const [nextEvent, setNextEvent] = useState([])
    const [nextRoom, setNextRoom] = useState([])
    const [match, setMatch] = useState([])

    useEffect(() => {
        djangoLookup("GET", "/event/", {}, (response, status) => {
            status === 200 && setNextEvent(response)
        })
        djangoLookup("GET", "/room/", {}, (response, status) => {
            status === 200 && setNextRoom(response)
        })
        djangoLookup("GET", "/match/", {}, (response, status) => {
            status === 200 && setMatch(response)
        })
    }, [])

    // false - true = Waiting, 
    // true - false = Current, 
    // true - true = Feedback
    
    if(!eventDisplay && feedbackDisplay) { event.tabs[1] = event.event_tab_options[0] }
    else if(eventDisplay && !feedbackDisplay) { event.tabs[1] = event.event_tab_options[1] }
    else if(eventDisplay && feedbackDisplay) { event.tabs[1] = event.event_tab_options[2] }

    return <ContainerTemplate tabData={event} showButtons={false} />
}

export default Event