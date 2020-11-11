// Iteration 3

import React from 'react';

const Random = (props) => {
    const max = props.max;
    const randomNum = Math.floor(Math.random() * max);
    console.log("RandomNum: ", randomNum);
    return (
        <div className="item">
            <p><b>Random value between {props.min} and {props.max} => {randomNum} </b></p>
        </div>
    );
};

export default Random;