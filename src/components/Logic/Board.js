import React from 'react';

const board = (props) => {
    const drop = e =>{
        e.preventDefault();
        const champId = e.dataTransfer.getData('champId');
        
        const champ = document.getElementById(champId);
        champ.style.display = 'block'

        e.target.appendChild(champ);

    }   

    const dragOver = e => {
        e.preventDefault();
    }

    return(
        <div 
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
            className={props.className}
            >
            {props.children}
        </div>
    )
}

export default board