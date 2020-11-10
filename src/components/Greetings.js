// Iteration 1

import React from 'react';

const Greetings = (props) => {
    return (
        <div className="item">
            <p><b>{props.lang == 'de' ? 'Hallo' : props.lang == 'fr' ? 'Bonjour': props.lang == 'en' ? 'Hello' : 'Hola'} {props.children}</b></p>
        </div>
    );
};

export default Greetings;