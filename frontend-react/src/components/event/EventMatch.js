import React from 'react'
import Timer from '../templates/Timer'

function EventMatch(props) {
    const {user} = props
    const personCards = user.map(person => {
        return <PersonCard name={person.name} age={person.age} university={person.university} studies={person.studies} status={person.status} />
    })

    return <div style={{marginTop: 10, textAlign: "center"}}>
        <div className="col-sm-6">
            <h4>You are in an active video call!</h4>
            {personCards}
        <Timer minutes={5} seconds={10} />
        </div>
        <div className="col-sm-5">
            <Chatbox />
        </div>
        <div className="form-inline">
            <button className="btn btn-danger">Pause</button>
            <button className="btn btn-warning">Leave</button>
        </div>
    </div>
}

function PersonCard(props) {
    const {name, age, university, studies, status} = props

    return <div style={{borderColor: "black", borderStyle: "dashed", borderWidth: 2, paddingLeft: 5, textAlign: "left"}}>
        <h5>{name}, {age}</h5>
        <h6>{university}</h6>
        <h6>{studies}, {status}</h6>
    </div>
}

function Chatbox(props) {
    return <div>
            <div style={{height:120, borderColor: "black", borderStyle: "dashed", borderWidth: 2, paddingLeft: 5, textAlign: "left"}}>
                Chat
            </div>
            <div style={{marginTop:20, borderColor: "black", borderStyle: "dashed", borderWidth: 2, paddingLeft: 5, textAlign: "left"}}>
                <h5>Icebreakers</h5>
                This might be one
            </div>
        </div>
}

export default EventMatch