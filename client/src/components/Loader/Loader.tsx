import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import "./loader.css";

type Props = {
    text: string
}

const Loader = (props: Props) => {

    return (
        <div className="loader">
            <FontAwesomeIcon icon={faCircleNotch} spin={true} className="icon"/>
            <div className="text">
                {props.text}
            </div>
        </div>
    );

}

export default Loader;