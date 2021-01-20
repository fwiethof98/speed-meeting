import React, { useEffect, useState } from 'react'
import { djangoLookup } from '../../functions/lookup'
import { PersonForm } from '../templates/Forms'
import $ from 'jquery'
import { event_entries } from '../config'
import { bbbCall } from '../../functions/createApiCall'

function ManageEvents(props) {
    const {name, field} = props
    const [options, setOptions] = useState([])
    const [currentEvent, setCurrentEvent] = useState([])

    useEffect(() => {
        djangoLookup("GET", "/" + name + "/?action=all", {}, (response, status) => {
            status === 200 && setOptions(response)
        })
    }, [])

    const handleEventSubmit = (event) => {
        event.preventDefault()
        const formEl = document.getElementById("event-form")
        const formData = new FormData(formEl)
        const eventData = {}
        formData.forEach((value, key) => {
            eventData[key] = value
        })
        if(eventData.time !== "") {
            eventData.time = eventData["date"] + " " + eventData["time"]
        } else {
            eventData.time = eventData["date"]
        }
        delete eventData.date
        djangoLookup("POST", "/event/create/", eventData, (response, status) => {
        })
    }

    const handleEventModifier = (command) => {
        const eventName = $("#event option:selected").val()
        if(command === "start") {
            djangoLookup("GET", "/event/?action=next", {}, (nextEvent, status) => {
                let params = {}
                params["meetingID"] = nextEvent.meetingID
                params["moderatorPW"] = nextEvent.moderatorPW
                window.open(bbbCall("create", params))
                status === 200 && djangoLookup("GET", "/event/start/", {name: eventName}, (startFeedback, status) => {
                    // console.log(startFeedback)
                })
            })
        } else {
            djangoLookup("POST", "/event/" + command + "/", {name: eventName}, (response, status) => {
            })
        }
    }

    const events =[{name: "event", displayName: "Upcoming events", type: "dropdown", entries: options.map(option => option.name)}]
    
    return <div><form id="event-form">
        <PersonForm entries={event_entries} />
        <button className="btn btn-primary" onClick={handleEventSubmit}>Submit</button>
        <PersonForm entries={events} />
        </form>
        <button type="button" className="btn btn-primary" onClick={() => handleEventModifier("delete")}>Delete</button>
        <button type="button" className="btn btn-primary" onClick={() => handleEventModifier("start")}>Start</button>
    </div>
}

export default ManageEvents