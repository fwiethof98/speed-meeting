import React, { useEffect, useState } from 'react'
import { djangoLookup } from '../functions/lookup'
import { manage } from './config'

function PageLogo(props) {
    const [authenticated, setAuthenticated] = useState([])
    const [username, setUsername] = useState([])

    useEffect(() => {
        djangoLookup("GET", "/authenticated/", {}, (response, status) => {
            status === 200 && setAuthenticated(true); setUsername(response.username)
            status === 400 && setAuthenticated(false)
        })
    }, [])

    const handleAuthClick = (command) => {
        console.log(command)
        window.location.href = "/" + command + "/"
    }
    const manageButton = username === "wiethof.florian98@gmail.com" ? <button type="button" className="btn btn-primary" onClick={() => handleAuthClick("manage")}>Manage</button> : ""

    return <div style={{clear: "both"}}>
            <div className="" style={{float: "left"}}>
                    <a href="/">
                        <div className="logo-container">
                            <div className="logo">
                                <img src="/static/assets/img/new_logo.png" />
                            </div>
                            <div className="brand">
                                GATHR
                            </div>
                        </div>
                    </a>
            </div>
            <div style={{float:"right", marginRight: 50}}>
                {authenticated ? <div><label style={{marginRight:10}}>{username}</label>
                <button type="button" className="btn btn-primary" onClick={() => handleAuthClick("logout")}>Logout</button>
                {manageButton}
                </div>
                : <div><button type="button" className="btn btn-primary" onClick={() => handleAuthClick("login")}>Login</button>
                    <button type="button" className="btn btn-primary" onClick={() => handleAuthClick("register")}>Register</button>
                </div>}
                
            </div>
        </div>
}

export default PageLogo