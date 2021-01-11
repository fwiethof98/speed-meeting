import React from 'react'

function Countdown(props){
    const {days, hours, minutes, seconds} = props
    return <div id="content-wrap">
            <main class="row">
                <div id="main-content" class="twelve columns">
                    <div id="counter" class="group">
                        {days && <span>{days} <em>days</em></span> }
                        {hours && <span>{hours} <em>hours</em></span>}
                        {minutes && <span>{minutes} <em>minutes</em></span>}
                        {seconds && <span>{seconds} <em>seconds</em></span>}
                    </div>                  
                </div>
            </main>	      
    </div>
}

export default Countdown