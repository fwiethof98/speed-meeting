import React from 'react'
import Accordion from './Accordion'

function AboutPage(props) {
    const entries = [
        {name: "faq1", title: "What is GATHR?", text: "GATHR is an exciting new online event that will match you with like-minded people! No matter if you want to find other students from your studies for a learning group, if you search for sports partners, or if you want to find the perfect co-founder for your next start-up, GATHR helps you connect with the right people. After registration, you fill outa questionairy that is used for matching. We ask about your studies, your hobbies, and what your goal for connecting with new peoplke is. Afterwards, you will receive an automated invite to our next online event, where you will get to know various other participants with similar interests."},
        {name: "faq2", title: "How does a GATHR event look like?", text: "Every GATHR event aims at getting you in contact with as many other Munich students as possible in a short amount of time. You will meet 1-2 other participants in speed-meeting video calls for 10 minutes. After getting to know each other, you can vote whether you want to stay in contact and meet again. Afterwards, you will be connected with new participants."},
        {name: "faq3", title: "Who will I meet?", text: "This is test 2"},
        {name: "faq4", title: "What are the matching criteria?", text: "The matching </br> will ensure that you meet people that share similar interests and hobbies as you. "},
        {name: "faq5", title: "How does the voting work?", text: "The voting helps you and your conversation partners to quickly align on a common interest and on the next activity you want to do. After each video round, everyone gets to vote on whether you want to meet again. If two people select the same option, you get informed and can start organizing your next meeting!"},
        {name: "faq6", title: "Do I need to prepare anything?", text: "No :) You can just join our next online event, and we will connect you with other students in Munich! In order to help kickstart your conversations, we even provide you with ice-breaking questions!"},
        {name: "faq7", title: "Is it free?", text: "Yes, GATHR is free! Our goal is to become an openly available plattform for all Munich students to connect!"}
    ]

    const description = "Munich Universities - Sport Partners - Learning Groups - Co-Founders - Friends"

    return <div className="row">
        <div class="col-sm-12">
            <div style={{textAlign: "center", marginRight: 50, marginLeft: 50}}>
                <p class="unterschrift">{description}</p>
                <img src="/assets/img/explainer.png" alt="Gathr pipeline" class="explainer"/>
            </div>
        </div>
        
        <div class="unterschrift bold"><p><br></br>FAQ</p></div>
        <Accordion entries={entries} />
    </div>
}

export default AboutPage