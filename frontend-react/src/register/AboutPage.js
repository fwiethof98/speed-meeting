import React from 'react'
import Accordion from './Accordion'

function AboutPage(props) {
    const entries = [
        {name: "test1", title: "Test 1", text: "This is test 1"},
        {name: "test2", title: "Test 2", text: "This is test 2"},
        {name: "test3", title: "Test 3", text: "This is test 3"}
    ]

    const description = "This is sample text that can be changed at will. Mmmmmm mmmm mmmmmmmm mmmmmmm mmmmmmmmm mmmmmmmmm mmmmmm."

    return <div className="row">
        <div class="col-sm-12">
            <div style={{textAlign: "center", marginRight: 50, marginLeft: 50}}>
                <p>{description}</p>
                <img src="/assets/img/explainer.png" alt="Gathr pipeline" style={{marginTop:30}} />
            </div>
        </div>
        <Accordion entries={entries} />
    </div>
}

export default AboutPage