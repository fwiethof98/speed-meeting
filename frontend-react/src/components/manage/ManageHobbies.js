import React, { useEffect, useState } from 'react'
import { djangoLookup } from '../../functions/lookup'
import { PersonForm } from '../templates/Forms'
import $ from 'jquery'
import { hobby_entries } from '../config'

function ManageHobbies(props) {
    const {name, field} = props
    const [options, setOptions] = useState([])

    useEffect(() => {
        djangoLookup("GET", "/" + name + "/?action=all", {}, (response, status) => {
            status === 200 && setOptions(response)
            console.log(response)
        })
    }, [])

    const handleHobbySubmit = (event) => {
        event.preventDefault()
        const formEl = document.getElementById("hobby-form")
        const formData = new FormData(formEl)
        const hobbyData = {}
        formData.forEach((value, key) => {
            hobbyData[key] = value
        })
        if(hobbyData.time !== "") {
            hobbyData.time = hobbyData["date"] + " " + hobbyData["time"]
        } else {
            hobbyData.time = hobbyData["date"]
        }
        djangoLookup("POST", "/hobby/create/", hobbyData, (response, status) => {
            console.log(response)
        })
    }

    const handleHobbyModifier = (command) => {
        const hobbyName = $("#hobby option:selected").val()
        djangoLookup("POST", "/hobby/" + command + "/", {name: hobbyName}, (response, status) => {
            console.log(response)
        })
    }

    const hobbies =[{name: "hobby", displayName: "Existing hobbies", type: "dropdown", entries: options.map(option => option.name)}]
    
    return <div><form id="hobby-form">
        <PersonForm entries={hobby_entries} />
        <button className="btn btn-primary" onClick={handleHobbySubmit}>Submit</button>
        <PersonForm entries={hobbies} />
        </form>
        <button type="button" className="btn btn-primary" onClick={() => handleHobbyModifier("delete")}>Delete</button>
    </div>
}

export default ManageHobbies