import React from 'react'
import {FormEntry} from './General'

function PersonForm(props) {
    const {entries} = props
    console.log(entries.entries)

    const formEntries = entries.map(entry => {
        // if(entry.required === true) {
        //     return <FormEntry name={entry.name} type={entry.type} required={true} entries={entry.entries} />
        // } else {
            return <FormEntry name={entry.name} type={entry.type} entries={entry.entries} /> 
        // }
    })
    let leftColumn = [], rightColumn = []
    for(let i = 0; i < formEntries.length; i++) {
        if(i < formEntries.length/2) {
            leftColumn.push(formEntries[i]);
        } else {
            rightColumn.push(formEntries[i]);
        }
    }

    return <div>
        <img src="/assets/img/wizard-city.jpg" alt="Gathr pipeline" style={{marginTop:30}} />
        <div className="col-sm-6">
            {leftColumn}
        </div>
        <div className="col-sm-6">
            {rightColumn}
        </div>
    </div>
}

export default PersonForm