import React from 'react'
import PageLogo from './PageLogo'
import PersonForm from './forms/PersonForm'
import CriteriaForm from './forms/CriteriaForm'
import IntentForm from './forms/IntentForm'
import { djangoLookup } from '../functions/lookup'

function WizardFormTab(props) {
    const title = "Welcome to Gathr!"
    const subtitle = "Tell us some things about yourself"
    const personEntries = [{name: "Username", type: "text"},
                    {name: "Password", type: "password"}]

    const intentEntries = [{name: "Find co-founders", type: "checkbox"},
                        {name: "Find friends", type: "checkbox"},
                        {name: "Learn together", type: "checkbox"},
                        {name: "Do sports", type: "checkbox"},]
    

    let tabEntries = [{name: 'Person', subtitle: 'Some information to verify your account', component: <PersonForm entries={personEntries} />},
                    {name: 'Intent', subtitle: 'What are you looking for?', component: <IntentForm entries={intentEntries} />},
                    {name: 'Profile', subtitle: 'Help us to match people to you', component: <CriteriaForm />}]
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
        <WizardNavButtons handleFormSubmitButton={handleFormSubmitButton} />
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

function WizardNavButtons(props) {
    const {handleFormSubmitButton} = props

    return <div className="wizard-footer">
        <div className="pull-right">
            <input type='button' className='btn btn-next btn-fill btn-success btn-wd' name='next' value='Next' />
            <input type='button' onClick={handleFormSubmitButton} className='btn btn-finish btn-fill btn-success btn-wd' name='finish' value='Finish' />
        </div>

        <div className="pull-left">
            <input type='button' className='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />
        </div>
        <div className="clearfix"></div>
    </div>
}

function WizardContainer(props) {
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

export default WizardContainer