import React from 'react';
import {ManageItemDatabase} from './Components';
import './Manage.css'

function Manage(props) {
    return <div className="container">
        <ManageItemDatabase name="meetings" fields={['name', 'attendeePW', 'moderatorPW']} />
        <ManageItemDatabase name="events" fields={['name', 'date']} />
        <ManageItemDatabase name="criteria" fields={['name']} />
        {/* <ManageItemDatabase name="roles" fields={['name']} /> */}
    </div>
}

export default Manage;