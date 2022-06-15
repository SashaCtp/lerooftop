import React, { ReactNode } from "react";
import './card.css';

type Props = {
    icon: string,
    title: string,
    children?: ReactNode | ReactNode[]
}

const Card = (props: Props) => {

    return (
        <div className="card">
            <div className="card-header">
                <div className="card-icon">{props.icon}</div>
                <h2 className="card-title">{ props.title }</h2>
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )

}

export default Card;