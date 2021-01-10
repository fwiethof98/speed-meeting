import React from 'react'
import { Dropdown } from './Dropdowns'

export function FormEntry(props) {
    const {name, type, iconName, required, entries, description} = props
    let requiredInput
    if (entries && entries.length > 0) {
        requiredInput = <Dropdown options={entries} description={description} name={name} />
    
    } else if(type === "radio") {
        requiredInput = <div>
            <input name={name} type={type} className="form-control" required={true} />
            <label className="">{description}<small></small></label>
        </div>
    } else if(type === "checkbox"){
        requiredInput = <div>
            <input id={name} type={type} className="form-control" required={true} />
            <label className="">{description}<small></small></label>
        </div>
    } else if(type === "date") {
        requiredInput = <div>
            <label className="">{description}<small></small></label>
            <input name={name} type={type} className="form-control" defaultValue="2020-01-01" required={true} />
        </div>
    } else if(required === true) {
        requiredInput = <div>
            <label className="control-label">{description}<small>*</small></label>
            <input name={name} type={type} className="form-control" required={true} />
        </div>
    } else {
        requiredInput = <div>
            <label className="control-label">{description} </label>
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