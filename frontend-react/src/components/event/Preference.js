import React, { useEffect, useState } from 'react'
import {PersonForm} from '../templates/Forms'
import $ from 'jquery'
import { djangoLookup } from '../../functions/lookup'
import {preference} from '../config'

function Preference(props) {
    const [hobbyEntries, setHobbyEntries] = useState([])
    const [alert, setAlert] = useState({display: false, message: "Data successfully submitted"})

    useEffect(() => {
        djangoLookup("GET", "/hobby/?action=all", {}, (response, status) => {
            if(status===200) {
                setHobbyEntries(response.map(hobby => {
                    return hobby.name
                }))
            }
        })
    }, [])

    let hobbies = []
    for(let i = 0; i < preference.hobbies.n_hobbies; i++) {
        hobbies.push({name: "hobby" + i, displayName: "Hobby " + i, type: "dropdown", entries: hobbyEntries})
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const formEl = document.getElementById("matching-form")
        console.log(formEl)
        const formData = new FormData(formEl)
        let preferenceData = {
            hobbies: []
        }

        formData.forEach((value, key) => {
            if(key.startsWith("language-")) {
                preferenceData['language'] = key.replace("language-", "")
            } else if(key.startsWith("study-")) {
                preferenceData['studies'] = key.replace("study-", "")
            }
        })
        for(let i = 0; i < preference.hobbies.n_hobbies; i++) {
            preferenceData.hobbies.push({name: $('#hobby' + i + ' option:selected').val()})
        }
        console.log(preferenceData) 
        djangoLookup("POST", "/preference/assign/", preferenceData, (response, status) => {
            console.log(response)
            status === 200 && setAlert({display: true, message: "Data successfully submitted!"})
            status !== 200 && setAlert({display: true, message: "An error occurred, please try again!"})
        })
    }

    return <div>
        <form id="matching-form">
            <PersonForm entries={hobbies} title={preference.hobbies.subtitle} n_columns={2} />
            <PersonForm entries={preference.language.entries} title={preference.language.subtitle} n_columns={2} />
            <PersonForm entries={preference.studies.entries} title={preference.studies.subtitle} n_columns={2} />
        </form>
        <button className="btn btn-primary btn_full_width" onClick={handleFormSubmit}>Submit</button>
        <div style={{textAlign: "center", color: "green"}}>
            {alert.display && alert.message}
        </div>
    </div>
}

export default Preference