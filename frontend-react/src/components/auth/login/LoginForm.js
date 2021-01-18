import React from 'react'
import {PersonForm} from '../../templates/Forms'

function LoginForm(props) {
    const {entries, handleSubmit} = props
    return <div>
        <form id="login-form">
            <PersonForm entries={entries} />
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
}

export default LoginForm