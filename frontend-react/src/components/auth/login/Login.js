import React from 'react'
import { djangoLookup } from '../../../functions/lookup'
import ContainerTemplate from '../../templates/ContainerTemplate'
import {login, login_entries} from '../../config'
import LoginForm from './LoginForm'

function Login(props) {
    const handleFormSubmitButton = (event) => {
        event.preventDefault()
        const formEl = document.getElementById("login-form")
        console.log(formEl)
        const formData = new FormData(formEl)
        let profileData = {}
        
        formData.forEach((value, key) => {
            profileData[key] = value
        })
        console.log(profileData)
        djangoLookup("POST", "/login/", profileData, (response, status) => {
            console.log(response)
            if(status === 200) {
                window.location.href = "/"
            }
        })
    }
    login.tabs[0].component = <LoginForm entries={login_entries} handleSubmit={handleFormSubmitButton} />
    return <ContainerTemplate tabData={login} showButtons={false} />
}
export default Login