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
            <div className="col-sm-5">
                <PersonForm entries={entries} />
            </div>
            <div className="col-sm-5" style={{marginTop: 50}}>
                <div class="flash_art">
                    <img src="/static/assets/img/flash_art.png" alt="GATHR" />
                </div>
            </div>
            <div className="col-sm-12">
                <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
                <button className="btn btn-secondary" onClick={handleRegisterButton}>Register</button>
            </div>
        </form>
    </div>
}

export default LoginForm