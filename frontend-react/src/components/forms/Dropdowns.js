import React from 'react'

export function Dropdown(props) {
    let {selectRef, options, onChangeFun, field} = props
    console.log(options)

    options = options.map(option => {
        return option[field]
    })
    options.sort()
    options = options.map((option, index) => {
        return <option key={option + index} value={option}>{option}</option>
    })
    return <div>
        <select ref={selectRef} onChange={onChangeFun}>
            {options}
        </select>
    </div>
}
