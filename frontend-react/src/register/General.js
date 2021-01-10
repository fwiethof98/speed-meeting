import React from 'react'
import { Dropdown } from './Dropdowns'

export function FormEntry(props) {
    const {name, type, iconName, required, entries} = props
    let requiredInput
    console.log(entries)
    if (entries && entries.length > 0) {
        requiredInput = <Dropdown options={entries} name={name} />
    
    } else if(type === "checkbox" || type === "radio") {
        requiredInput = <div>
            <input name={name} type={type} className="form-control" required={true} />
            <label className="">{name}<small></small></label>
        </div>
    } else if(type === "date") {
        requiredInput = <div>
            <label className="">{name}<small></small></label>
            <input name={name} type={type} className="form-control" defaultValue="2020-01-01" required={true} />
        </div>
    } else if(required === true) {
        requiredInput = <div>
            <label className="control-label">{name}<small>*</small></label>
            <input name={name} type={type} className="form-control" required={true} />
        </div>
    } else {
        requiredInput = <div>
            <label className="control-label">{name} </label>
            <input name={name} type={type} className="form-control" />
        </div>
    }

    return <div className="input-group">
        <span className="input-group-addon">
            {iconName && <i className="material-icons">{iconName}</i>}
        </span>
        <div className="form-group label-floating">
        {requiredInput}
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