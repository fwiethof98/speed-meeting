import React from 'react'

export function FormEntry(props) {
    const {name, type, iconName} = props

    return <div className="input-group">
        <span className="input-group-addon">
            {iconName && <i className="material-icons">{iconName}</i>}
        </span>
        <div className="form-group label-floating">
        <label className="control-label">{name} <small>(required)</small></label>
        <input name={name} type={type} className="form-control" />
        </div>
    </div>
}

export function WizardDropdown(props) {
    let {name, options} = props

    options = options.map(option => {
        return <option value={option}>{option}</option>
    }) 

    return <div className="col-sm-5">
        <div className="form-group label-floating">
            <label className="control-label">{name}</label>
            <select name="country" className="form-control">
                {options}
            </select>
        </div>
    </div>
}