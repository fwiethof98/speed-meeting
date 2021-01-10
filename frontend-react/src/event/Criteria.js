import React from 'react'
import IntentForm from '../register/IntentForm'

function Criteria(props) {

    const languageEntries = [{name: "German", type: "checkbox"},
                            {name: "English", type: "checkbox"}]

    const demoEntries = [{name: "German", type: "checkbox"},
                        {name: "English", type: "checkbox"}]

    return <div style={{textAlign:"center"}}>
        <div className="row">
            <h5>Matching Criteria</h5>
           
        </div>
        <h5>General Information</h5>
        <CriteriaForm title={"New title"} entries={languageEntries} />
        <CriteriaForm title={"New title"} entries={demoEntries} />

    </div>
}

function CriteriaForm(props) {
    const {title, entries} = props
    return <div>
        <p>{title}</p>
        <IntentForm entries={entries} />
    </div>
}

export default Criteria