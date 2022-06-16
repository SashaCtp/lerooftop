import React, { useEffect, useRef, useState } from "react";
import Card from "../Card";
import "./AICard.css";
import SpeechBubble from "./SpeechBubble";

type Props = {};



const AICard = (props: Props) => {
    return (
        <Card icon="😎" title="Ask our assistant">
            <div className="scrollable-div">
                <SpeechBubble
                    isUser={false}
                    content="Heydsadasdadssaddasdadadsdaddddddddddddddddddddddddddddddd"
                    name="Mike"
                />
                <SpeechBubble
                    isUser={true}
                    name="You"
                    content="test dasdasdjadasjhdaskljhdaskljdhsakljhdaslkjdhaldjkshklajsh"
                />
                <SpeechBubble
                    isUser={true}
                    name="You"
                    content="test dasdasdjadasjhdaskljhdaskljdhsakljhdaslkjdhaldjkshklajsh"
                />
                <SpeechBubble
                    isUser={true}
                    name="You"
                    content="test dasdasdjadasjhdaskljhdaskljdhsakljhdaslkjdhaldjkshklajsh"
                />
                <SpeechBubble
                    isUser={true}
                    name="You"
                    content="test dasdasdjadasjhdaskljhdaskljdhsakljhdaslkjdhaldjkshklajsh"
                />
            </div>
            <div className="input-container">
                <textarea className="text-input" placeholder="> Ask your question here" rows={1}/>
                <button className="send-button">
                    send
                </button>
            </div>
        </Card>
    );
};

export default AICard;
