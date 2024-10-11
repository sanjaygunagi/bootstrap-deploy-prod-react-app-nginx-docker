import React, { useState } from 'react';
import './contact.scss';

interface Contact  {
    text: string;
}

function Contact (props: Contact):  React.JSX.Element {
    const [someState, setSomeState] = useState(100);
    return (
        <div className='contact'>
            <p> {someState} </p>
            <h1> Contact {props.text}</h1>
        </div>
    );
}


export default Contact;