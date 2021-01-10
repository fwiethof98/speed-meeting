import React from 'react'
import PageLogo from '../components/PageLogo'
import PersonForm from './PersonForm'
import IntentForm from './IntentForm'
import { djangoLookup } from '../functions/lookup'
import AboutPage from './AboutPage'
import $ from 'jquery'

function WizardFormTab(props) {
    const title = "GATHR Meet&Mingle Roulette"
    const subtitle = "Next online event: 22nd of January, 7pm"
    const personEntries = [{name: "first_name", description: "First Name", type: "text", required: true},
                    {name: "last_name", description: "Last Name", type: "password", required: true},
                    {name: "birthday", description: "Birthday", type: "date", required: true},
                    {name: "email", description: "E-Mail", type: "email", required: true},
                    {name: "mobile_number", description: "Phone number (+xx xxxx xxxxxxxx)", type: "text", required: false},
                     // {name: "Pronouns", type: "text", required: false, entries: ["A) She/her", "B) He/him", "C) They/them", "D) Prefer not to say"]},
                    {name: "university", description: "University", type: "text", required: true, entries: ["A) TUM", "B) LMU", "C) Hochschule München", "D) Other"]},
                    {name: "studies", description: "Field of Studies", type: "text", required: true, entries: ["", "- Biology", "- Chemistry", "- Physics", "- Space Sciences", "- Informatics", "- Computer Engineering", "- Mathematics", "- Medicine & Health", "- Business & Management","- Economics","- Communication & Media", "- Political science", "- Mechanical Engineering", "- Law", "- Philosophy", "- Sport Sciences", "Other Social Sciences", "Other Humanities", "Other Engineering Sciences", "Other Natural Sciences", "Other Arts","Other Studies"]},
                    {name: "study_level", description: "Level", type: "text", required: true, entries: ["Bachelor", "Master", "PhD"]},
                    {name: "semester", description: "Semester (in your current studies)", type: "text", required: true, entries: [1, 2, 3, 4, 5, 6, 7, 8, 9]},
                    {name: "privacy_accept", description: "By clicking on the “Submit”-button, I confirm that my data can be used for purposes described in the Privacy Policy.*", type: "checkbox", required: true},
                    {name: "mail_accept", description: "I agree to receive E-Mails reminding me of upcoming events and other useful information related to the services of Gathr.de*", type: "checkbox", required: true}]

    const intentEntries = [{name: "students", description: "No, Simply Connect Me With Other Students", iconName: "groups", text_box: "Click here to get to know a variety of students from Munich!"},
                        {name: "tandem", description: "Yes, Find Tandem Learning Partners", iconName: "menu_book", text_box: "Click here to find new study pals for university, languages, and skill exchanges!"},
                        {name: "sports", description: "Yes, Find Sport Partners", iconName: "sports_handball", text_box: "Click here to get active with athletes and sport friends around you!"},
                        {name: "founder", description: "Yes, Find Start-Up Co-Founders", iconName: "emoji_objects", text_box: "Click here to connect with start-up enthusiasts!"}]
    
                        

    let tabEntries = [{name: 'HOME', subtitle: 'GET TO KNOW OTHER STUDENTS!', component: <AboutPage />},
                    {name: 'SIGN-UP', subtitle: '', component: <PersonForm entries={personEntries} />},
                    {name: 'MATCHING', subtitle: 'During the event, we will match you with other students from Munich :)', component: <IntentForm entries={intentEntries} />}]

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
        profileData['study_level'] = $('#study_level option:selected').val()
        profileData['semester'] = $('#semester option:selected').val()
        profileData['privacy_accept'] = $('#privacy_accept').prop('checked')
        profileData['mail_accept'] = $('#mail_accept').prop('checked')
        profileData['intent'] = $('input[name="intent"][checked=checked]').val()
        if(typeof profileData.intent === 'undefined') {
            profileData.intent = 'students'
        }
        
        djangoLookup("POST", "/users/submit_data/", profileData, (response, status) => {
            console.log(response)
            window.location.href = "/submission_successful/"
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