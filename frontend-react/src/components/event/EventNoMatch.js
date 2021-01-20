import React from 'react'
import { djangoLookup } from '../../functions/lookup'
import {FormEntry} from '../templates/Forms'

function EventCurrent(props) {
    const {setParticipate} = props
    const entries = [{name: "participating", displayName: "Yes, I want to join!", type: "checkbox", onClick: ""}]

    const handleParticipationBox = () => {
        const participating = document.getElementsByName("participating")[0].checked
        djangoLookup("POST", "/participate/", {participate: participating}, (response, status) => {
            console.log(response)
            setParticipate(participating)
        })
    }

    const checkboxes = entries.map(entry => {
        return <FormEntry name={entry.name} displayName={entry.displayName} type={entry.type} onClick={handleParticipationBox} />
    })


    return <div style={{marginTop: 50, marginBottom: 50, textAlign: "center"}}>
        <div className="col-sm-5">
            <h4>There's no match for you this round. <br /> Would you like to join the next?</h4>
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