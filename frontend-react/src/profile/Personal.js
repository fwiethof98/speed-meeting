import React, { useEffect, useState } from 'react'
import {djangoLookup} from '../functions/lookup'

function Personal(props) {
    const [userData, setUserData] = useState([])
    const {username} = props

    useEffect(() => {
        djangoLookup("GET", "/accounts/?username=" + username, {}, (response, status) => {
            setUserData(response)
        })
    }, [])

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const formEl = document.getElementById("personal-form")
        const formData = new FormData(formEl)
        let data = {}
        formData.forEach((value, key) => {
            data[key] = value
        })
        console.log(data)
        djangoLookup("POST", "accounts/profile/", {data: data, username: username}, (response, status) => {
            console.log(response)
        })
    }

    return <div>
        <form id="personal-form" method="POST" onSubmit={handleFormSubmit}>

        </form>
    </div>
}

export default Personal;