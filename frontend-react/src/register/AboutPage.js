import React from 'react'
import Accordion from './Accordion'

function AboutPage(props) {
    const entries = [
        {name: "faq1", title: "What is GATHR?", text: "This is test 1"},
        {name: "faq2", title: "How does a GATHR event look like?", text: "This is test 2"},
        {name: "faq3", title: "Who will I meet?", text: "This is test 2"},
        {name: "faq4", title: "Do I need to prepare anything?", text: "This is test 3"},
        {name: "faq5", title: "Is it free?", text: "This is test 3"}
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