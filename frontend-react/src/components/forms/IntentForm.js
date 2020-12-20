import React from 'react'
import {FormEntry} from './General'

function IntentForm(props) {
    const {entries} = props

    const formEntries = entries.map(entry => {
        return <FormEntry name={entry.name} type={entry.type} />
    })

    return <div>
        <div className="col-sm-6">
            {formEntries}
        </div>
    </div>
}

function ProfilePictureSelect() {
    return <div className="col-sm-4 col-sm-offset-1">
        <div className="picture-container">
            <div className="picture">
                <img src="assets/img/default-avatar.png" className="picture-src" id="wizardPicturePreview" title=""/>
                <input type="file" id="wizard-picture" />
            </div>
            <h6>Choose Picture</h6>
        </div>
    </div>
}

export default IntentForm