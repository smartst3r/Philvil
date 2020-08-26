import React, {Component } from 'react';
import Aux from '../../hoc/Auxi'
import Champions from '../../components/Champions/Champions';
import championsjson from '../../assets/championdata.json';
import Gridhole from '../../components/Logic/Grid';
import Graph from '../../components/Graph/Graph';


  

class DraftBuilder extends Component {

    
   
    

    render() {
        const champions = championsjson.Champions
        console.log(champions)
        
        return(
            <Aux>
                <Gridhole/>
                <div>
                    <p>Blue Side</p>
                    <div className='picks'>

                    </div>
                    <div className='bans'></div>
                </div>
                <div>red side</div>
                <div>
                    <Champions champions={champions} />
                </div>
                
            </Aux>
        )
    }
}

export default DraftBuilder;