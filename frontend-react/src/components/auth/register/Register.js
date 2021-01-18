import React from 'react'
import { djangoLookup } from '../../../functions/lookup'
import $ from 'jquery'
import {register,profile_entries} from '../../config'
import ContainerTemplate from '../../templates/ContainerTemplate'

function Register(props) {
    const handleFormSubmitButton = (event) => {
        event.preventDefault()
        const formEl = document.getElementById(register.form_name + "-form")
        const formData = new FormData(formEl)
        let profileData = {}

        formData.forEach((value, key) => {
            profileData[key] = value
        })
        console.log($('#university option:selected').val())
        console.log(profile_entries)
        for(let i = 0; i < profile_entries.length; i++) {
            console.log(profile_entries[i].type === "dropdown")
            if(profile_entries[i].type === "dropdown") {
                console.log(i)
                profileData[profile_entries[i].name] = $('#' + profile_entries[i].name + " option:selected").val()
            }
        }
        console.log(profileData)
        // Form error handling
        // if(typeof profileData.intent === 'undefined') {
        //     profileData.intent = 'students'
        // }

        // let complete = true
        // for(const [key, value] of Object.entries(profileData)) {
        //     if(value === "") {
        //         complete = false
        //     }
        // }
        // if(complete === false) {
        //     alert("Please fill all form entries!")
        // } else if(profileData.mail_accept === false || profileData.privacy_accept === false) {
        //     alert("You have to accept the data policy and mail notifications!")
        //     complete = false
        // }

        djangoLookup("POST", "/register/", profileData, (response, status) => {
            console.log(response)
            if(status === 200) {
                window.location.href = "/submission_successful/"
            }
        })
    }

    return <ContainerTemplate tabData={register} handleFormSubmitButton={handleFormSubmitButton} showButtons={true} />
}

export default Register