import React from 'react'
import {FormEntry} from './General'

const description = "Do you have any specific goal in mind?"

function IntentForm(props) {
    let {entries} = props
    entries = entries.map(entry => {
        return <DesignRadioButton name={entry.name} iconName={entry.iconName} description={entry.description} text_box={entry.text_box} />
    })

    return <div class="row">
        <div class="unterschrift"><p>{description}</p></div>
        <div class="col-sm-10 col-sm-offset-1">
            {entries}
        </div>
    </div>
}

function DesignRadioButton(props) {
    const {name, iconName, description, text_box} = props
    return <div class="col-sm-4">
        <div class="choice" data-toggle="wizard-radio" rel="tooltip" title={text_box}>
            <input type="radio" name="intent" value={name} />
            <div class="icon">
                <i class="material-icons">{iconName}</i>
            </div>
            <h6>{description}</h6>
        </div>
    </div>
}

export default IntentForm