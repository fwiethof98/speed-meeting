import React, { useEffect, useState } from 'react'
import { djangoLookup, bbbLookup } from '../../functions/lookup'
import { PersonForm } from '../templates/Forms'
import $ from 'jquery'
import { event_entries } from '../config'
import { bbbCall, urlCall } from '../../functions/createApiCall'

function ManageEvents(props) {
    const {name} = props
    const [options, setOptions] = useState([])

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
                let create_params = {}, join_params = {}
                create_params["meetingID"] = nextEvent.meetingID
                create_params["moderatorPW"] = nextEvent.moderatorPW
                create_params["attendeePW"] = nextEvent.moderatorPW + "1"
                create_params["redirect"] = true
                
                join_params["fullName"] = "Florian+Wiethof"
                join_params["meetingID"] = nextEvent.meetingID
                join_params["redirect"] = true
                join_params["password"] = nextEvent.moderatorPW
                bbbLookup("GET", urlCall("create", create_params), (response) => {
                    window.open(bbbCall("join", join_params))
                })
            })
        } else if(command === "cleanup") {
            djangoLookup("GET", "/event/cleanup/", {}, (response, status) => {
                console.log(response)
            })
        } else if(command === "delete") {
            djangoLookup("GET", "/event/delete/", {name: eventName}, (response, status) => {
                console.log(response)
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
        <button type="button" className="btn btn-primary" onClick={() => handleEventModifier("cleanup")}>Cleanup</button>
    </div>
}

export default ManageEvents