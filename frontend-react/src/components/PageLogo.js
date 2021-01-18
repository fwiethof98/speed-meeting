import React from 'react'

function PageLogo(props) {
    return <a href="https://www.gathr.de">
        <div className="logo-container">
            <div className="logo">
                <img src="/static/assets/img/new_logo.png" />
            </div>
            <div className="brand">
                GATHR
            </div>
        </div>
    </a>
}

export default PageLogo