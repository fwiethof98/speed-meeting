import React, {useState, useEffect} from 'react'
import { bbbCall, urlCall } from '../../functions/createApiCall'
import { djangoLookup, bbbLookup } from '../../functions/lookup'
import Countdown from '../templates/Timer'

function EventMatch(props) {
    const {user, match, setParticipate, socket, setEventDisplay, timer, setLeaveError} = props
    const personCards = user.map(person => {
        const age = Math.floor((new Date() - new Date(person.birthday)) / (1000*60*60*24*365))
        return <PersonCard name={person.first_name + " " + person.last_name} age={age} university={person.university} studies={person.studies} status={person.status} />
    })
    const [myUser, setMyUser] = useState([])
    
    console.log(user[0].hobbies)
    const hobbies = user[0].hobbies.map(hobby => {
        return <div><p>{hobby}</p><br /></div>
    })

    useEffect(() => {
        djangoLookup("GET", "/authenticated/", {}, (response, status) => {
            status === 200 && setMyUser(response)
        })
    }, [])

    const handleBreakoutJoin = () => {
        let create_params = {}, join_params = {}
        create_params['meetingID'] = match.name.replace(" ", "+") + match.id
        console.log(match.id)
        create_params['moderatorPW'] = "aVeryDifficultPassword"
        create_params['attendeePW'] = "justADifficultPassword"
        create_params["duration"] = 10
        
        join_params['meetingID'] = create_params.meetingID
        join_params['password'] = create_params.moderatorPW
        let fullName = myUser.first_name + " " + myUser.last_name
        fullName = fullName.replace(" ", "+")
        join_params['fullName'] = fullName
        join_params['redirect'] = true

        bbbLookup("GET", urlCall("create", create_params), (response) => {
            window.open(bbbCall("join", join_params))
        })
    }

    const handleEventLeaveButton = () => {
        djangoLookup("POST", "/participate/", {participate: false}, (response, status) => {
            socket.emit("LeaveEvent", user[0])
            setParticipate(false)
            setEventDisplay("waiting")
            setLeaveError({display: true, message: "Your match left the event, please wait for the next round!"})
        })
    }

    return <div style={{marginTop: 10, textAlign: "center"}}>
        <h4>You were matched! <br />Join the call <a href="#" onClick={handleBreakoutJoin} >here</a>!</h4>
            <Countdown minutes={timer.minutes} seconds={timer.seconds} />
        <div className="col-sm-6">
            {personCards}
        </div>
        <div className="col-sm-5">
            <IceBreakers hobbies={hobbies} intent={user.intent} />
        </div>
        <div className="form-inline col-sm-12" style={{textAlign: "center", marginTop:20}}>
            <button type="button" className="btn btn-warning" onClick={handleEventLeaveButton}>Leave</button>
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

function IceBreakers(props) {
    const {hobbies, intent} = props
    return <div>
            {/* <div style={{height:120, borderColor: "black", borderStyle: "dashed", borderWidth: 2, paddingLeft: 5, textAlign: "left"}}>
                Chat
            </div> */}
            <div style={{paddingLeft: 5, textAlign: "left"}}>
                <h5>Hobbies:</h5>
                {hobbies}
            </div>
        
        </div>
}

export default EventMatch