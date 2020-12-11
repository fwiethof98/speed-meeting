import React, { useState } from 'react'
import './Home.css'
import {bbbLookup, djangoLookup} from '../functions/lookup'
import {urlCall} from '../functions/createApiCall'

// require('dotenv').config();

function Home(props){
    const [nextEvents, setNextEvents] = useState(false)

    const params = {
        name: "Test+Meeting",
        meetingID: "abc123",
        attendeePW: "111222",
        moderatorPW: "333444"
    }

    const handleJoinMeetingButton = () => {
        // console.log(urlCall("create", params));
        bbbLookup("POST", urlCall("create", params), (response, status) => {
            console.log(response);
        })
    }

    return <div className="container" style={{textAlign: "center", marginTop: 50}}>
        <h1>GroupMe</h1>
        <button className="join-button" onClick={handleJoinMeetingButton}>Join Meeting</button>
        <h2>Next events</h2>
        {nextEvents && nextEvents.map(item => {
            return <p>{item.name}, {item.date}</p>
        })}
    </div>
}

export default Home