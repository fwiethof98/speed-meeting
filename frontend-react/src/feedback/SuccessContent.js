import React from 'react'

function SuccessContent(props) {
    const description = "This is sample text that can be changed at will. Mmmmmm mmmm mmmmmmmm mmmmmmm mmmmmmmmm mmmmmmmmm mmmmmm."

    return <div className="row">
        <div class="col-sm-12">
            <div style={{textAlign: "center", marginRight: 50, marginLeft: 50}}>
                <p>{description}</p>
            </div>
        </div>
    </div>
}

export default SuccessContent