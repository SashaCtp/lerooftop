import React, { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import "./AICard.css";
import SpeechBubble from "./SpeechBubble";
import { getCurrentDate } from "./utils";

type Props = {};

type message = {
    content: string;
    isUser: boolean;
    date: string;
}


const AICard = (props: Props) => {
    const [buttonState, setButtonState] = useState(false);
    const [clientText, setClientText] = useState<string>("");
    const [messages, updateMessages] = useState<message[]>([]);

    const clientInput = useRef<HTMLTextAreaElement>(null);
    const endScroll = useRef<HTMLDivElement>(null);

    useEffect(() => {
        endScroll.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages])

    const clientMessage = () => {
        if(clientText === "") return;
        
        updateMessages(arr => [...arr, {content: clientText, isUser: true, date: getCurrentDate()}]);
        setButtonState(true);

        fetch('http://localhost:3000/api/completion', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'content-type' : 'application/json'
            },
            body: JSON.stringify({
                message: clientText
            })
        })
        .then(data => data.json())
        .then(data => {
            updateMessages(arr => [...arr, {content: data.message, isUser: false, date: getCurrentDate()}]);
            setClientText("");
        }).catch(err => {
            updateMessages(arr => [...arr, {isUser: false, content: `Je ne peux malheuresement pas réponse : ${err}`, date: getCurrentDate()}])
        })
        .finally(() => setButtonState(false));

        if(clientInput.current === null) return;
            clientInput.current.value = "";
    }

    return (
        <Card icon="😎" title="Ask our assistant (in english pls)">
            <div className="scrollable-div">
                {messages.map((mess, idx) => {
                    return <SpeechBubble
                        key={idx}
                        isUser={mess.isUser}
                        content= {mess.content}
                        name={mess.isUser ? "You" : "Mike"}
                        date={mess.date}
                    />
                })}
                <div ref={endScroll} />
            </div>
            <div className="input-container">
                
                <textarea ref={clientInput} className="text-input" placeholder="> Ask your question here" onChange={e=> setClientText(e.target.value)} />
                
                <button className="send-button" onClick={clientMessage} disabled={buttonState}>
                    Send
                </button>
            </div>
        </Card>
    );
};

export default AICard;
