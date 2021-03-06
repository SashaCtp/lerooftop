import React from "react";
import "./SpeechBubble.css"

type Props = {
    content: string;
    isUser: boolean;
    name: string;
    date: string;
};

const SpeechBubble = (props: Props) => {
    return (
        <div className="speech-container" style={{alignItems: props.isUser ? "flex-end" : "flex-start"}}>
            <div className="speech-bubble" style={{background: props.isUser ? "#6A82FB" : "#CCC"}}>
                <p className="speech-text" style={{color: props.isUser ? "#fff" : "#000"}}>
                    {props.content}
                </p>
                
            </div>
            <p className="name">
                {props.name}
                <span className="speech-date">{" " + props.date}</span> 
            </p>
        </div> 
    );
};

export default SpeechBubble;
