import React from 'react';

import Champion from './Champion/Champion';

const champions = (props) => props.champions.map((champion,index) => {
        return <Champion 
          name={champion.name}
          image={champion.image}
          id={champion.name}
          key={champion.name}
          />
    });

export default champions;