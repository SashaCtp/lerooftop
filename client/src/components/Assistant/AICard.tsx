import React from "react";
import Card from "../Card";
import "./AICard.css";
import SpeechBubble from "./SpeechBubble";
import SpeechBubbleClient from "./SpeechBubbleClient";

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
        </Card>
    );
};

export default AICard;
