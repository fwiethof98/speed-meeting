import React, { useEffect, useState } from 'react'
import { djangoLookup } from '../../functions/lookup'
import {FormEntry} from '../templates/Forms'
import {bbbCall} from '../../functions/createApiCall'

function EventCurrent(props) {
    const {setParticipate, socket, nextEvent, setEventDisplay, leaveError} = props
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
            let join_params = {}
            let fullName = user.first_name + " " + user.last_name
            fullName = fullName.replace(" ", "+")
            join_params["fullName"] = fullName
            join_params["meetingID"] = nextEvent.meetingID
            join_params["redirect"] = true
            join_params["password"] = nextEvent.moderatorPW + "1"
            setParticipate(participating)
            setEventDisplay("match")
            window.open(bbbCall("join", join_params))
        })
    }

    const checkboxes = entries.map((entry, index) => {
        return <FormEntry key={index+entry} name={entry.name} displayName={entry.displayName} type={entry.type} onClick={handleParticipationBox} />
    })


    return <div style={{marginTop: 30, marginBottom: 50, textAlign: "center"}}>
        {leaveError.display && <div className="col-sm-12" style={{color: "red"}}>
            {leaveError.message}
        </div>}
        <div className="col-sm-12" style={{marginTop:30}}>
            <div className="col-sm-5">
                <h4>An event is currently in process <br /> Would you like to join?</h4>
                {checkboxes}
            </div>
            <div className="col-sm-5">
                <div className="flash_art">
                    <img src="/static/assets/img/flash_art.png" alt="GATHR" />
                </div>
            </div>
        </div>
    </div>
}

export default EventCurrent