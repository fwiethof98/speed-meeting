import React from 'react'
import {PersonForm} from '../../templates/Forms'

function LoginForm(props) {
    const {entries, handleSubmit} = props
    const handleRegisterButton = (event) => {
        event.preventDefault()
        window.location.href = '/register/'
    }
    return <div>
        <form id="login-form">
            <PersonForm entries={entries} />
            <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
            <button className="btn btn-secondary" onClick={handleRegisterButton}>Register</button>
        </form>
    </div>
}

export default LoginForm