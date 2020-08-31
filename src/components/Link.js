import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Components.css'

function Link(props) {
    return (
        <React.Fragment>
            <li className="nav-item list-inline-item px-3">
                <FontAwesomeIcon className="MobileOnly" icon={props.icon} size="lg"/>
                <a className="DesktopOnly">{props.title}</a>
            </li>
        </React.Fragment>
    )
}

export default Link