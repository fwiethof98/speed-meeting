import React, { useEffect, useState } from 'react'
import {PersonForm} from '../templates/Forms'
import $ from 'jquery'
import { djangoLookup } from '../../functions/lookup'
import {preference} from '../config'

function Preference(props) {
    const [hobbyEntries, setHobbyEntries] = useState([])
    const [myPref, setMyPref] = useState([])

    useEffect(() => {
        djangoLookup("GET", "/hobby/?action=all", {}, (response, status) => {
            if(status===200) {
                setHobbyEntries(response.map(hobby => {
                    return hobby.name
                }))
            }
        })
        djangoLookup("GET", "/preference/", {}, (response, status) => {
            if(status===200) {
                setMyPref(response)
            }
        })
    }, [])

    let hobbies = []
    for(let i = 0; i < preference.hobbies.n_hobbies; i++) {
        hobbies.push({name: "hobby" + i, displayName: "Hobby " + i, type: "dropdown", entries: hobbyEntries})
    }
    console.log(hobbies)

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
        })
    }

    return <div>
        <form id="matching-form">
            <PersonForm entries={hobbies} title={preference.hobbies.subtitle} n_columns={2} />
            <PersonForm entries={preference.language.entries} title={preference.language.subtitle} n_columns={2} />
            <PersonForm entries={preference.studies.entries} title={preference.studies.subtitle} n_columns={2} />
        </form>
        <button className="btn btn-primary btn_full_width" onClick={handleFormSubmit}>Submit</button>
    </div>
}

export default Preference