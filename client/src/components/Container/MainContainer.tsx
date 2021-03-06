import React, { ReactNode } from "react";

import './container.css';

type Props = {
    children: ReactNode | ReactNode[]
}

const MainContainer: React.FC<Props> = ({ children }) => {

    return (
        <div className="mainContainer">
            <div className="grain"></div>            
            {children}
        </div>
    );

};

export default MainContainer;