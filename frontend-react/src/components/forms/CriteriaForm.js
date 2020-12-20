import React, { useEffect, useState } from 'react'
import {djangoLookup} from '../../functions/lookup'
import {Dropdown} from './Dropdowns'
import RangeSlider from 'react-bootstrap-range-slider'


function Criteria(props) {
    const [showNote, setShowNote] = useState(false)

    return <div>
        <CriteriaForm />
        <div style={showNote ? {display: "block"} : {display: "none"}} id="notification"></div>
    </div>
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
            {myCriteria && myCriteria.map((item, index) => {
                return <SingleCriteria key={item.name + index} defVal={item.value} name={item.name} handleRemoveCriteria={handleRemoveCriteria} />
            })}
    </div>
}

function SingleCriteria(props) {
    const {name, defVal, handleRemoveCriteria} = props
    return <div>
        <label>{name}</label>
        <RangeSlider step="5" inputProps={{name: "crit-" + name, defaultValue: defVal}} /> 
        <button name={name} className="btn btn-danger" onClick={handleRemoveCriteria} style={{width:30, marginLeft: 20, height: 20, paddingTop:0, paddingBottom:0, fontSize: 10}}>-</button>
    </div>
}

export default Criteria