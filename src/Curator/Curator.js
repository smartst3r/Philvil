import React from 'react';


const curator = (props) => {
    return (
        <div className='Curator'>
            <img src={props.picture}/>
            <p style={{color: "red", float: 'left'}}>{props.name}</p>
            <p>{props.party}</p>
            <p style={{color: "red", float: 'right'}}>Subscriber count:{props.subcount}</p>
        </div>
    )
};

export default curator;