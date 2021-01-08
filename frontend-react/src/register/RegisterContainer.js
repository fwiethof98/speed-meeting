import React from 'react'
import PageLogo from '../components/PageLogo'
import PersonForm from './PersonForm'
import IntentForm from './IntentForm'
import { djangoLookup } from '../functions/lookup'
import AboutPage from './AboutPage'
import $ from 'jquery'

function WizardFormTab(props) {
    const title = "Welcome to Gathr!"
    const subtitle = "Tell us some things about yourself"
    const personEntries = [{name: "First Name", type: "text", required: true},
                    {name: "Last Name", type: "password", required: true},
                    {name: "Birthday", type: "date", required: true},
                    {name: "E-Mail", type: "email", required: true},
                    {name: "Phone number", type: "text", required: true},
                    {name: "University", type: "text", required: true, entries: ["TUM", "LMU", "HM"]},
                    {name: "Studies", type: "text", required: true, entries: ["Informatik", "BWL", "Maschinenbau"]},
                    {name: "Status", type: "text", required: true, entries: ["Bachelor", "Master"]},
                    {name: "Semester", type: "text", required: true, entries: [1, 2, 3, 4, 5, 6, 7, 8, 9]}]

    const intentEntries = [{name: "Find co-founders", iconName: "business", description: "Click here to find people to start a company"},
                        {name: "Find friends", iconName: "business", description: "Click here to meet new friends!"},
                        {name: "Learn together", iconName: "business", description: "Click here to find new study pals!"},
                        {name: "Do sports", iconName: "business", description: "Click here to get active with athletes around you!"},]
    

    let tabEntries = [{name: 'ABOUT', subtitle: 'What is Gathr about?', component: <AboutPage />},
                    {name: 'SIGN-UP', subtitle: 'Some information to verify your account', component: <PersonForm entries={personEntries} />},
                    {name: 'MATCHING', subtitle: 'What are you looking for?', component: <IntentForm entries={intentEntries} />}]

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
        let profileData = {}

        formData.forEach((value, key) => {
            profileData[key] = value
        })
        profileData['university'] = $('#university option:selected').val()
        profileData['studies'] = $('#studies option:selected').val()
        profileData['status'] = $('#status option:selected').val()
        profileData['semester'] = $('#semester option:selected').val()
        profileData['intent'] = $('input[name="intent"][checked=checked]').val()
        djangoLookup("POST", "/users/", {data: profileData, action: "create"}, (response, status) => {
            console.log(response)
        })
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