import React, { ReactNode } from "react";

import './banner.css';

type Props = {
    children?: ReactNode | ReactNode[]
}

const Banner = (props: Props) => {

    return (
        <div className="banner">
            {props.children}
        </div>
    );

};

export default Banner;