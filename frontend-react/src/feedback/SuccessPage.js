import React from 'react'
import PageLogo from '../components/PageLogo'
import SuccessContent from './SuccessContent'

function WizardFormTab(props) {
    const title = "Welcome to Gathr!"
    const subtitle = "Tell us some things about yourself"

    let tabEntries = [{name: 'WELCOME', subtitle: 'Your registration was successful!', component: <SuccessContent />}]

    let tabNames = tabEntries.map(entry => {
        return entry.name;
    })
    tabEntries = tabEntries.map(entry => {
        return <WizardTab key={entry.name} subtitle={entry.subtitle} content={entry.component} name={entry.name} />
    })

    return <form id="register-form" action="" method="" >
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
        return <li key={item} ><a href={`#${item}`} data-toggle="tab">{item}</a></li>
    })

    return  <div className="wizard-navigation">
        <ul>
            {tabs}
        </ul>
    </div>
}

function SuccessPage(props) {
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

export default SuccessPage