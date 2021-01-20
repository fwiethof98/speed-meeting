import React from 'react'
import { djangoLookup } from '../../functions/lookup'
import {FormEntry} from '../templates/Forms'

function EventCurrent(props) {
    const {setParticipate, socket} = props
    const entries = [{name: "participating", displayName: "Yes, I want to join!", type: "checkbox", onClick: ""}]

    const handleParticipationBox = () => {
        const participating = document.getElementsByName("participating")[0].checked
        djangoLookup("POST", "/participate/", {participate: participating}, (response, status) => {
            socket.emit("UpdateMatch", {})
            setParticipate(participating)
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