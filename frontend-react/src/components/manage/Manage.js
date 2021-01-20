import React from 'react';
import ContainerTemplate from '../templates/ContainerTemplate'

import { manage } from '../config'

function Manage(props) {
    return <div><ContainerTemplate tabData={manage} showButtons={false} /></div>
}

export default Manage;