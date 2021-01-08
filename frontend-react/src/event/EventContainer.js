import React from 'react'
import PageLogo from '../components/PageLogo'
import { djangoLookup } from '../functions/lookup'
import Criteria from './Criteria'
import Event from './Event'
import Voting from './Voting'

function WizardFormTab(props) {
    const title = "Welcome to Gathr!"
    const subtitle = "Tell us some things about yourself"

    let tabEntries = [{name: 'Matching', subtitle: 'Who do you want to meet?', component: <Criteria />},
                    {name: 'Event', subtitle: '', component: <Event /> }]

    let tabNames = tabEntries.map(entry => {
        return entry.name;
    })
    tabEntries = tabEntries.map(entry => {
        return <WizardTab subtitle={entry.subtitle} content={entry.component} name={entry.name} />
    })

    const handleFormSubmitButton = (event) => {
        event.preventDefault()
        const formEl = document.getElementById("register-form")
        const formData = new FormData(formEl)
        let profileData = {}, criteriaData = {}

        formData.forEach((value, key) => {
            if(key.substring(0, 5) === "crit-") {
                criteriaData[key.substring(5)] = value
            } else {
                profileData[key] = value
            }
        })
        console.log(document.getElementsByName("test")[0])
        console.log(profileData)
        console.log(criteriaData)
        // djangoLookup("POST", "/criteria/assign/", {data: criteriaData, action: "assign"}, (response, status) => {
        //     console.log(response)
        // })
        // djangoLookup("POST", "/users/", {data: profileData, action: "create"}, (response, status) => {
        //     console.log(response)
        // })
    }

    return <form id="register-form" action="" method="" onSubmit={handleFormSubmitButton} >
        <WizardHeader title={title} subtitle={subtitle} />
        <WizardTabLine tabNames={tabNames} />
        <div className="tab-content">
            {tabEntries}
        </div>
    </form>
}

function WizardTab(props) {
    const {subtitle, content, name} = props

    return <div className="tab-pane" id={name}>
        <div className="row">
            <h4 className="info-text">{subtitle}</h4>
            {content}
        </div>
    </div>
}

function WizardHeader(props) {
    const {title, subtitle} = props

    return <div className="wizard-header">
        <h3 className="wizard-title">
            {title}
        </h3>
        <h5>{subtitle}</h5>
    </div>
}

function WizardTabLine(props) {
    const {tabNames} = props
    const tabs = tabNames.map(item => {
        return <li><a href={`#${item}`} data-toggle="tab">{item}</a></li>
    })

    return  <div className="wizard-navigation">
        <ul>
            {tabs}
        </ul>
    </div>
}

function RegisterContainer(props) {
    return <div>
        <PageLogo />
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="wizard-container">
                        <div className="card wizard-card" data-color="green" id="wizardProfile">
                            <WizardFormTab />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default RegisterContainer