import React from 'react'
import LogoHeadline from './LogoHeadline'
import {djangoLookup} from '../functions/lookup'
import styles from './auth.module.css'

function Register(props) {

    const handleSubmitRegisterForm = (event) => {
        event.preventDefault()
        const formEl = document.getElementById("register-form")
        const formData = new FormData(formEl)
        let data = {}
        formData.forEach((value, key) => {
            data[key] = value
        })
        console.log(data)
        // djangoLookup("POST", "/auth/register/", data, (response, status) => {
        //     console.log(data)
        // })
    }

    return <div className={styles.wholeForm}>
        <LogoHeadline />
        <div className={styles.title}>
            <h1>Register</h1>
        </div>
        <form id="register-form" method="POST" onSubmit={handleSubmitRegisterForm}>
            <PersonalForm />
            <button type="submit" className={styles.submitButton}>Register</button>
        </form>
    </div> 
}

export function PersonalForm(props) {
    let entries = [{name: "First name", type: "text"},
                    {name: "Last name", type: "text"},
                    {name: "Birthday", type: "date"},
                    {name: "University", type: "text"},
                    {name: "University mail", type: "email"},
                    {name: "Password", type: "password"},
                    {name: "Confirm PW", type: "password"}]

    return <div>
        {entries && entries.map((item, index) => {
            // return <FormEntry key={item.name + index} entry={item} values={} />
        })}
    </div>
}

function FormEntry(props) {
    const {entry, value} = props
    if(entry.type === "University") {
        return <div></div>
    } else {
        return <div><label>{entry.name}</label><input type={entry.type} name={entry.name.toLowerCase().replace(" ", "_")} /></div>
    }
}

export default Register