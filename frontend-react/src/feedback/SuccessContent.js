import React from 'react'

function SuccessContent(props) {
    const description = ""

    return <div className="row">
        <div class="col-sm-12">
            <div class="flash_art">
                <img src="/assets/img/flash_art.png" alt="GATHR" />
            </div>
            <div style={{textAlign: "center", marginRight: 50, marginLeft: 50}}>
                <h3>Event details</h3>
                <u>
                    <li>Date: 22nd of January 2021</li>
                    <li>Time: 7pm German Time</li>
                    <li>Place: Online.</li>
                    <li>Add to your calendar:</li>
                    <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=MGI3cWMybmxwYTlhMWVrdnM4aTJncm9hMmQgN2ZubWxqN3Rqb2sxcWhkMmdiZ3ZyZWZ1b2NAZw&amp;tmsrc=7fnmlj7tjok1qhd2gbgvrefuoc%40group.calendar.google.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_de.gif"></img></a>
                </u>
                <p><br></br>Invitation to plattform will get to you via e-mail a few days before the event.</p>
                <h3>What else can I do?</h3>
                <p><b>Tell your friends! - The more people join the event, the more fun it will be!</b></p>
                <p><a target="_blank" href="https://rebrand.ly/gathr_join_codeWU34">https://rebrand.ly/gathr_join_codeWU34</a></p>
                <p>Share this link, and they will receive prioritized acces to make sure all of you participate in the same event:</p>
                

            </div>
            
        </div>
    </div>
}

export default SuccessContent