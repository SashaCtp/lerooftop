import React, { ReactNode } from "react";
import noiseSVG from "../images/noise.svg";

import '../style/container.css';

type Props = {
    children: ReactNode | ReactNode[]
}

const MainContainer: React.FC<Props> = ({ children }) => {

    return (
        <div style={styles.container}>
            <div style={styles.grain}></div>            
            {children}
        </div>
    );

};

const styles : {[name: string]: React.CSSProperties} = { 
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        boxSizing: 'border-box',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        backgroundImage: noiseSVG,
        background: `linear-gradient(#060F5B, #6A82FB)`,
        filter: 'contrast(120%) brightness(110%)',
        padding: '5%',
    },
    grain: {
        background: `url(${noiseSVG})`,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        opacity: 0.1
    }
};

export default MainContainer;