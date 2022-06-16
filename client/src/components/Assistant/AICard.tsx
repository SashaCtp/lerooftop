import React, { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import "./AICard.css";
import SpeechBubble from "./SpeechBubble";

type Props = {};

type message = {
    content: string;
    isUser: boolean;
}


const AICard = (props: Props) => {
    const [clientText, setClientText] = useState<message>({content: "", isUser: true});
    const [messages, updateMessages] = useState<message[]>([]);
    const clientInput = useRef<HTMLTextAreaElement>(null);

    const clientMessage = () => {
        if(clientText.content === "") return;
        updateMessages(arr => [...arr, clientText]);
        setClientText({content: "", isUser: true});
        if(clientInput.current != null)
            clientInput.current.value = "";
    }

    return (
        <Card icon="😎" title="Ask our assistant">
            <div className="scrollable-div">
                {messages.map(mess => {
                    return <SpeechBubble
                        isUser={mess.isUser}
                        content= {mess.content}
                        name="Mike"
                    />
                })}
            </div>
            <div className="input-container">
                
                <textarea ref={clientInput} className="text-input" placeholder="> Ask your question here" onChange={e => setClientText({content: e.target.value, isUser: true})} />
                
                <button className="send-button" onClick={clientMessage}>
                    Send
                </button>
            </div>
        </Card>
    );
};

export default AICard;
