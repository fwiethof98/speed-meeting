import React from 'react'
import LogoHeadline from './LogoHeadline'
import {djangoLookup} from '../functions/lookup'
import styles from './auth.module.css'
import loginStyles from './login.module.css'


function Login(props) {
    const handleLoginFormSubmit = (event) => {
        event.preventDefault()
        const formEl = document.getElementById("login-form")
        const formData = new FormData(formEl)
        let data = {}
        formData.forEach((value, key) => {
            data[key] = value
        })
        // djangoLookup("POST", "/accounts/login/", data, (response,status) => {
        //     console.log(response)
        // })
    }

    return <div className={styles.wholeForm}>
        <LogoHeadline />
        <div className={styles.title}>
            <h1>Login</h1>
        </div>
        <form id="login-form" onSubmit={handleLoginFormSubmit} >
            <PersonalForm />
            <div className={loginStyles.orRegisterHere}>
                Or register <a href="#">here</a>.
                <button type="submit" className={loginStyles.loginButton}>Login</button>
            </div>
        </form>
    </div>
}

function PersonalForm(props) {
    let entries = [{name: "Username", type: "text"},
                    {name: "Password", type: "password"}]

    return <div>
        {entries && entries.map((item, index) => {
            return <FormEntry key={item.name + index} entry={item} />
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

export default Login