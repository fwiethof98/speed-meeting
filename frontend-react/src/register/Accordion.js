import React from 'react'

function Accordion(props) {
    let {entries} = props
    entries = entries.map(entry => {
        return <AccordionElement name={entry.name} title={entry.title} text={entry.text} />
    })

    return <div className="panel-group" id="accordion" style={{marginRight: 100, marginLeft: 100}}>
        {entries}
    </div>
}

function AccordionElement(props) {
    const {name, title, text} = props
    return <div className="panel panel-default">
    <div className="panel-heading">
        <h4 className="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href={'#' + name}>
                {title}
            </a>
        </h4>
    </div>
    <div id={name} className="panel-collapse collapse">
        <div className="panel-body">
            {text}
        </div>
    </div>
</div>
}

export default Accordion