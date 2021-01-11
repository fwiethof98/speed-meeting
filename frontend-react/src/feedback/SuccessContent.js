import React from 'react'

function SuccessContent(props) {
    const description = ""

    return <div className="row">
        <div class="col-sm-12">
            
            <div style={{textAlign: "center", marginRight: 50, marginLeft: 50}}>
                <h3>Event details</h3>
                <u>
                    <li>Date: 22nd of January 2021</li>
                    <li>Time: 7pm German Time</li>
                </u>
                <br></br>
                
                <a href="/static/assets/calendar/GATHR_Event.ics"> Download .ics</a>
                <p class="bold"><br></br>An invitation to the plattform will get to you via e-mail a few days before the event.</p>
                <h3>What else can I do?</h3>
                <p class="unterschrift">Tell your friends! - The more people join the event, the more fun it will be!</p>
                <a class="ref_link" target="_blank" href="https://rebrand.ly/gathr_join_codeWU34">https://rebrand.ly/gathr_join_codeWU34</a>
                <p class="ref_text bold">Share this link, and they will receive prioritized access to make sure all of you participate in the same event.</p>
                
                
            </div>
            
        </div>
    </div>
}

export default SuccessContent