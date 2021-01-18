import React from 'react'
import PageLogo from '../PageLogo'

function ContainerTemplate(props) {
    const {handleFormSubmitButton, showButtons, tabData} = props

    const tabEntries = tabData.tabs.map((tab, index) => {
        return <WizardTab key={tab.name+index} subtitle={tab.subtitle} content={tab.component} name={tab.name} />
    })
    

    return <div>
            <PageLogo />
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="wizard-container">
                            <div className="card wizard-card" data-color="green" id="wizardProfile">
                            <form id={tabData.form_name + "-form"} action="" method="" onSubmit={handleFormSubmitButton} >
                                <WizardHeader title={tabData.title} subtitle={tabData.subtitle} />
                                {tabData.title_component}
                                <WizardTabLine tabNames={tabData.tab_names} />
                                <div className="tab-content">
                                    {tabEntries}
                                </div>
                                    {showButtons && <WizardNavButtons handleFormSubmitButton={handleFormSubmitButton} />}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    const tabs = tabNames.map((item, index) => {
        return <li key={index + item}><a href={`#${item}`} data-toggle="tab">{item}</a></li>
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

export default ContainerTemplate