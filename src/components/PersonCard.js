import React, { useState } from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [ howOld, setHowOld ] = useState(parseInt(age));
    return (
        <div>
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { howOld }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick ={ (event) => setHowOld(howOld + 1) }>
                Birthday Button for {firstName} {lastName}
            </button>
        </div>
    )
}

export default PersonCard;