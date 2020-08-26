import React from 'react';
import './Champion.css'
import Championdraglogic from '../../Logic/ChampionDragLogic';

const champion = (props) => {



    return(
        // <Championdraglogic id={props.id} className='card' draggable='true'>
            <div>
                <img className='CImage' src={props.image}/>
                <p className='CName'>
                    {props.name}
                </p>
            </div>
        // </Championdraglogic>
    )
}

export default champion;