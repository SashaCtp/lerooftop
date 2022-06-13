import React from "react";

const Header = () => {

    return (
        <header style={styles.header}>
            <h1 style={styles.title}>✨ Le Rooftop ✨</h1>
        </header>
    );

}

const styles : {[name: string]: React.CSSProperties} = {
    header: {
        display: 'block',
        height: 60,
        width: '100%',
    },
    title: {
        color: '#FFF',
        textAlign: 'left',
        fontFamily: 'Inconsolata',
        fontWeight: 300
    }
};

export default Header;