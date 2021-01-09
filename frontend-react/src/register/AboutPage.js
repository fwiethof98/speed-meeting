import React from 'react'
import Accordion from './Accordion'

function AboutPage(props) {
    const entries = [
        {name: "test1", title: "Test 1", text: "This is test 1"},
        {name: "test2", title: "Test 2", text: "This is test 2"},
        {name: "test3", title: "Test 3", text: "This is test 3"}
    ]

    const description = ""

    return <div className="row">
        <div class="col-sm-12">
            <div style={{textAlign: "center", marginRight: 50, marginLeft: 50}}>
                <p>{description}</p>
                <img src="/assets/img/explainer.png" alt="Gathr pipeline" class="explainer"/>
            </div>
        </div>
        
        <div class="unterschrift bold"><p><br></br>FAQ</p></div>
        <Accordion entries={entries} />
    </div>
}

export default AboutPage