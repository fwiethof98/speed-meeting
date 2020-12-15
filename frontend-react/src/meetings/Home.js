import React, { useState } from 'react'
import './Home.css'
import {joinMainMeeting} from '../functions/bbbApiFunctions'
import { djangoLookup } from '../functions/lookup'

// require('dotenv').config();

function Home(props){
    const [nextEvents, setNextEvents] = useState(false)

    if(!nextEvents) {
        djangoLookup("GET", "/events/?action=all", {}, (response, status) => {
            setNextEvents(response)
        })
    }

    const handleJoinMeetingButton = () => {
        joinMainMeeting()
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