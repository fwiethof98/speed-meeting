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
        if(command === "start" || command === "join") {
            djangoLookup("GET", "/event/?action=next", {}, (nextEvent, status) => {
                let create_params = {}, join_params = {}
                if(command === "start") {
                    create_params["meetingID"] = nextEvent.meetingID
                    create_params["moderatorPW"] = nextEvent.moderatorPW
                    create_params["attendeePW"] = nextEvent.moderatorPW + "1"
                    create_params["redirect"] = true
                    window.open(bbbCall("create", create_params))
                } else {
                    join_params["fullName"] = "Florian+Wiethof"
                    join_params["meetingID"] = nextEvent.meetingID
                    join_params["password"] = nextEvent.moderatorPW
                    join_params["redirect"] = true
                    window.open(bbbCall("join", join_params))
                }
                // status === 200 && djangoLookup("GET", "/event/start/", {name: eventName}, (startFeedback, status) => {
                //     // console.log(startFeedback)
                // })
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
        <button type="button" className="btn btn-primary" onClick={() => handleEventModifier("join")}>Join</button>
    </div>
}

export default ManageEvents