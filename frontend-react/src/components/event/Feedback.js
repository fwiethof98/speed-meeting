import React from 'react'
import { djangoLookup } from '../../functions/lookup'
import { FormEntry } from '../templates/Forms'
import $ from 'jquery'


function Feedback(props) {
    const {showEventDisplay, showFeedbackDisplay, entries} = props
    
    const persons = [{name: "Florian Wiethof", age: "23", university: "TUM", studies: "Informatics", status: "Bachelor"}]
    const personCards = persons.map(person => {
        return <PersonCard name={person.name} age={person.age} university={person.university} studies={person.studies} status={person.status} />
    })

    const onClick = (index) => {
        let checkElements = $("input[type=checkbox]"), feedbackBoxes = []
        for(let i = 0; i < checkElements.length; i++) {
            if(checkElements[i].getAttribute("name").startsWith("feedback")) {
                feedbackBoxes.push(checkElements[i])
            }
        }
        console.log(feedbackBoxes)   
        for(let i = 0; i < index; i++) {
            feedbackBoxes[i].checked = true
        }
        for(let i = index + 1; i < feedbackBoxes.length; i++) {
            feedbackBoxes[i].checked = false
        }
    }

    const checkboxes = entries.map((feedback, index) => {
        return <div className="col-sm-4"><FormEntry name={feedback.name} displayName={feedback.displayName} type={feedback.type} onClick={() => onClick(index)} /></div>
    })

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const formEl = document.getElementById("feedback-form")
        const formData = new FormData(formEl)
        let feedbackData = {}

        formData.forEach((value, key) => {
            feedbackData[key] = value
        })
        console.log(feedbackData)

        // djangoLookup("POST", "/matching/feedback/", feedbackData, (response, status) => {
        //     console.log(response)
        // })
        // showEventDisplay(true)
        // showFeedbackDisplay(false)
    }

    return <form method="POST" id="feedback-form">
        <div style={{paddingLeft:20, paddingRight: 20, marginTop: 10, textAlign: "center"}}>
            <h4>What do you want to do next?</h4>
            <div className="col-sm-6">
            {personCards}
            </div>
            <div className="col-sm-12">
            {checkboxes}
            </div>
            <div className="col-sm-12"> 
                <button className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
            </div>
        </div>
    </form>
}

function PersonCard(props) {
    const {name, age, university, studies, status} = props

    return <div style={{borderColor: "black", borderStyle: "dashed", borderWidth: 2, paddingLeft: 5, textAlign: "left"}}>
        <h5>{name}, {age}</h5>
        <h6>{university}</h6>
        <h6>{studies}, {status}</h6>
    </div>
}

export default Feedback