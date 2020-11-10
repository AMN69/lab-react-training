// Iteration 1

import React from 'react';

const IdCard = (props) => {
    return (
        <div className="item">
            <img src={props.picture} alt="image" />
            <div className="rest-item">
                <p><b>First Name: </b><span>{props.firstName}</span></p>
                <p><b>Last Name: </b><span>{props.lastName}</span></p>
                <p><b>Gender: </b><span>{props.gender}</span></p>
                <p><b>Height: </b><span>{props.height/100}m</span></p>
                <p><b>Birth: </b><span>{props.birth}</span></p>
            </div>
        </div>
    );
};

export default IdCard;