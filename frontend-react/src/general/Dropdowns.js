import React, {useState} from 'react'
import { djangoLookup } from '../functions/lookup';

export function DropdownAllItems(props) {
    const {url, field, selectRef} = props
    const [items, setItems] = useState(false)
    if(!items) {
        djangoLookup("GET", url, {}, (response, status) => {
            console.log(response)
            setItems(response)
        })
    }
    
    return <div>
        {items && <Dropdown selectRef={selectRef} options={items} field={field} />}
    </div>
}

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
