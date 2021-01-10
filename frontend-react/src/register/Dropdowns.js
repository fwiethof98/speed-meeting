import React from 'react'

export function Dropdown(props) {
    let {selectRef, options, onChangeFun, field, name, description} = props
    if(field) {
        options = options.map(option => {
            return option[field]
        })
    }
    options.sort()
    options = options.map((option, index) => {
        return <option key={option + index} value={option}>{option}</option>
    })
    return <div>
        <div class="form-group label-floating">
            <label class="control-label">{description}</label>
            <select id={name.toLowerCase()} className="form-control" ref={selectRef} onChange={onChangeFun}>
            {options}
        </select>
        </div>
        
    </div>
}

