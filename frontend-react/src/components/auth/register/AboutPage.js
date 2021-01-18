import React from 'react'
import Accordion from '../../templates/Accordion'
import {about_page} from '../../config'

function AboutPage(props) {
    return <div className="row">
        <div class="col-sm-12">
            <div id="content_aboutus">
                <p class="unterschrift">{about_page.description}</p>
                <img src="/static/assets/img/explainer_low_qual_jpg_res15_qual80.jpg" alt="Gathr pipeline" class="explainer"/>
            </div>
        </div>
        
        <div class="unterschrift bold"><p><br></br>{about_page.subtitle}</p></div>
        <Accordion entries={about_page.entries} />
    </div>
}

export default AboutPage