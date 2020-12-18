import React, { useEffect, useState } from 'react'
import {djangoLookup} from '../functions/lookup'
import {Dropdown} from '../general/Dropdowns'
import './Profile.css'

function Criteria(props) {
    const [showNote, setShowNote] = useState(false)

    const handleSubmitCriteria = (event) => {
        event.preventDefault()
        const formEl = document.getElementById("criteria-form")
        const formData = new FormData(formEl)
        let data =[]
        formData.forEach((value, key) => {
            let obj = {name: key, value: parseInt(getRadioValue(key).slice(0, -1))}
            data.push(obj)
        })
        console.log(data)
        djangoLookup("POST", "/criteria/assign/", {data: data, action: "assign"}, (response, status) => {
            document.getElementById("notification").innerHTML = "Submission successful!"
            setShowNote(true)
        })
    }

    return <div>
        <CriteriaForm handleSubmitCriteria={handleSubmitCriteria} />
        <div style={showNote ? {display: "block"} : {display: "none"}} id="notification"></div>
    </div>
}

function getRadioValue(name) {
    return document.querySelector('input[name="' + name + '"]:checked').value + 1
}

function CriteriaForm(props) {
    const [myCriteria, setMyCriteria] = useState([])
    const [openCriteria, _setOpenCriteria] = useState([])
    const {handleSubmitCriteria} = props
    const openCriteriaRef = React.useRef(openCriteria)
    const setOpenCriteria = data => {
        openCriteriaRef.current = data
        _setOpenCriteria(data)
    }
    const selectRef = React.createRef()

    useEffect(() => {
        djangoLookup("GET", "/criteria/?action=user", {}, (response, status) => {
            // if(response.length === 0) {
            //     djangoLookup("GET", "/criteria/?action=example", {}, (exResponse, exStatus) => {
            //         setMyCriteria(exResponse)
            //     })
            // }
            setMyCriteria(response)
        })
        djangoLookup("GET", "/criteria/?action=exclude-user", {}, (response, status) => {
            console.log(response)
            setOpenCriteria(response)
            
        })
    }, [])

    useEffect(() => {
        if(myCriteria.length > 0) {
            setOpenCriteria((openCriteriaRef.current.filter(item => {
                if(myCriteria[myCriteria.length - 1].name === item.name) {
                    return false
                }
                return true
            })))
        }
    }, [myCriteria])

    const handleNewCriteria = () => {
        if(selectRef.current.value !== '') {
            setMyCriteria(prevState => [...prevState, {name: selectRef.current.value}])
        }
    }

    const handleRemoveCriteria = (event) => {
        event.preventDefault()
        openCriteriaRef.current.push({name: event.target.name})
        setMyCriteria(myCriteria.filter(item => {
            if(item.name === openCriteriaRef.current[openCriteriaRef.current.length - 1].name) {
                return false
            }
            return true
        }))
    }

    return <div>
        <div className="form-inline div-section" style={{marginBottom:15}}>
            <Dropdown options={openCriteria} field="name" selectRef={selectRef} />
            <button className="btn btn-primary" onClick={handleNewCriteria}>Add</button>
        </div>
        <form id="criteria-form" method="POST" onSubmit={handleSubmitCriteria}>
            {myCriteria && myCriteria.map((item, index) => {
                return <SingleCriteria key={item.name + index} checkVal={item.value} name={item.name} handleRemoveCriteria={handleRemoveCriteria} />
            })}
            <button type="submit" style={{marginTop:15}} className="btn btn-primary">Submit</button>
        </form>
    </div>
}

function SingleCriteria(props) {
    const {name, checkVal, handleRemoveCriteria} = props
    let values = Array.from(Array(10).keys())
    values = values.map((value, index) => {
        if(index === checkVal) {
            return <input key={name + value + index} type="radio" name={name} value={value} defaultChecked />
        } else if(index === 0) {
            return <input key={name + value + index} type="radio" name={name} value={value} defaultChecked />
        }
        return <input key={name + value + index} type="radio" name={name} value={value} />
    })
    return <div>
        <label>{name}</label>
        {values}
        <button name={name} className="btn btn-danger" onClick={handleRemoveCriteria} style={{width:30, marginLeft: 20, height: 20, paddingTop:0, paddingBottom:0, fontSize: 10}}>-</button>
    </div>
}

export default Criteria