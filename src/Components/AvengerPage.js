import React from 'react';

import avengers from '../data';

const AvengerPage = (props) => {
    console.log("1", props)
    const id = props.match.params.id;
    console.log(id);
    const avenger = avengers.find(avenger => `${avenger.id}` === id);
    console.log(avenger)

    return(
        <div>
            <img className="character-image" src={avenger.img} alt={avenger.name}/>
            <div className="chracter-info-wrapper">
            <h1>{avenger.name}</h1>
            <h4>({avenger.nickname})</h4>
            <p>{avenger.description}</p>
            </div>
        </div>

    );
}

export default AvengerPage;