import React, { useState } from 'react'
import './Home.css'
import lookup from '../functions/lookup'

const bbb_config = {
    secret: "",
    test_secret: "639259d4-9dd8-4b25-bf01-95f9567eaf4b",
    url: "https://bbb.fs.ei.tum.de/bigbluebutton/"
}

function Home(props){
    const [nextEvents, setNextEvents] = useState(false)

    // if(!nextEvents){
    //     lookup('GET', '/meetings/?action=next', {}, (response, status) => {
    //         setNextEvents(response)
    //     })
    // }

    const handleJoinMeetingButton = () => {
        let sha1 = require('js-sha1');
        let api_call = "name=TestMeeting&meetingID=abc123&attendeePW=111222&moderatorPW=333444";
        let hash_api_call = "create" + api_call + bbb_config.secret;
        
        let hash = sha1.create();
        hash.update(hash_api_call);
        hash.hex();
        api_call += "&checksum=" + hash.hex();
        const xhr = new XMLHttpRequest();
        const method = "GET";
        const url = bbb_config.url + "/api/create?" + api_call;
        xhr.open(method, url);
        xhr.onload = (response, status) => {
            console.log(response);
        };
        xhr.send();
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