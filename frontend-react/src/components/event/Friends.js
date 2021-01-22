import React, { useEffect, useState } from 'react'
import { djangoLookup } from '../../functions/lookup'


function Friends(props) {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        djangoLookup("GET", "/friends/", {}, (response, status) => {
            console.log(response)
            for (const [key, value] of Object.entries(response)) {
                response[key] = value.map(friend => {
                    const age = Math.floor((new Date() - new Date(friend.birthday)) / (1000*60*60*24*365))
                    return <PersonCard name={friend.first_name + " " + friend.last_name} age={age} university={friend.university} studies={friend.studies} status={friend.status} email={friend.email} phone={friend.phone} />
                })
            }
            setFriends(response)
        })
    }, [])

    return <div style={{paddingLeft:20, paddingRight: 20, marginTop: 10, textAlign: "center"}}>
            <div className="col-sm-12">
                <h4>People you want to meet again:</h4>
                {friends.cat_3}
            </div>
            <div className="col-sm-12">
                <h4>People you shared contacts with:</h4>
                {friends.cat_2}
            </div>
        </div>
}

function PersonCard(props) {
    const {name, age, university, studies, status, email, phone} = props

    return <div className="col-sm-5" style={{borderColor: "black", borderStyle: "dashed", borderWidth: 2, paddingLeft: 5, textAlign: "left"}}>
        <h5>{name}, {age}</h5>
        <h6>{university.split(" ")[1]}</h6>
        <h6>{studies}, {status}</h6>
        <h6>Mail: {email}</h6>
        <h6>Phone: {phone}</h6>
    </div>
}

export default Friends