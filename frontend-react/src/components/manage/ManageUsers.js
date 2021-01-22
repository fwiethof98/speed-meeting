import React, { useEffect, useState } from 'react'
import { djangoLookup } from '../../functions/lookup'
import { PersonForm } from '../templates/Forms'
import $ from 'jquery'
import { hobby_entries } from '../config'

function ManageHobbies(props) {

    const handleUserImport = () => {
        djangoLookup("GET", "/import/", {}, (response, status) => {
            console.log(response)
        })
    }

    const handleTriggerMatching = () => {
        djangoLookup("GET", "/event/start/", {}, (response, status) => {
            console.log(response)
        })
    }
    
    return <div style={{textAlign: "center", marginTop: 50}}>
        <h5>Import users and user profiles from CSV</h5>
        <button type="button" className="btn btn-primary" onClick={handleUserImport}>Import Users</button>
        <h5>Trigger the matching process</h5>
        <button type="button" className="btn btn-primary" onClick={handleTriggerMatching}>Trigger Matching</button>
    </div>
}

export default ManageHobbies