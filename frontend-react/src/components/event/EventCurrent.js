import React, { useEffect, useState } from 'react'
import { djangoLookup } from '../../functions/lookup'
import {FormEntry} from '../templates/Forms'
import {bbbCall} from '../../functions/createApiCall'

function EventCurrent(props) {
    const {setParticipate, socket, nextEvent} = props
    const entries = [{name: "participating", displayName: "Yes, I want to join!", type: "checkbox", onClick: ""}]
    const [user, setUser] = useState([])

    useEffect(() => {
        djangoLookup("GET", "/authenticated/", {}, (response, status) => {
            status === 200 && setUser(response)
        })
    }, [])

    const handleParticipationBox = () => {
        const participating = document.getElementsByName("participating")[0].checked
        djangoLookup("POST", "/participate/", {participate: participating}, (response, status) => {
            socket.emit("UpdateMatch", {})
            console.log("hallo")
            let join_params = {}
            let fullName = user.first_name + " " + user.last_name
            fullName.replace(" ", "+")
            join_params["fullName"] = fullName
            join_params["meetingID"] = nextEvent.meetingID
            join_params["redirect"] = true
            join_params["password"] = nextEvent.moderatorPW + "1"
            setParticipate(participating)
            window.open(bbbCall("join", join_params))
        })
    }

    const checkboxes = entries.map(entry => {
        return <FormEntry name={entry.name} displayName={entry.displayName} type={entry.type} onClick={handleParticipationBox} />
    })


    return <div style={{marginTop: 50, marginBottom: 50, textAlign: "center"}}>
        <div className="col-sm-5">
            <h4>An event is currently in process <br /> Would you like to join?</h4>
            {checkboxes}
        </div>
        <div className="col-sm-5">
        <div class="flash_art">
            <img src="/static/assets/img/flash_art.png" alt="GATHR" />
        </div>
        </div>
    </div>
}

export default EventCurrent