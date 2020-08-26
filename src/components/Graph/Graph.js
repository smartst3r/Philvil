import React from 'react';
import './Graph.css';
import Slice from './Slice/Slice'

const graph = (props) => {
    const pieContainer={
            height: '150px',
            position: 'relative',
          }
          
    const pieBackground={
            position: 'absolute',
            width: '150px',
            height: '150px',
            borderRadius: '100%',
            boxShadow: '0px 0px 8px rgba(0,0,0,0.5)'
          } 
          
    const pie={
            transition: 'all 1s',
            position: 'absolute',
            width: '150px',
            height: '150px',
            borderRadius: '100%',
            clip: 'rect(0px, 75px, 150px, 0px)'
          }
          
    const hold={
            position: 'absolute',
            width: '150px',
            height: '150px',
            borderRadius: '100%',
            clip: 'rect(0px, 150px, 150px, 75px)'
    }
        
    return(
        <div>
            <div style={pieContainer}>
                <div style={pieBackground}></div>

                <Slice degree='60' degreeAdd='60'/>
                <div id="pieSlice2" class="hold"><div class="pie"></div></div>
                <div id="pieSlice3" class="hold"><div class="pie"></div></div>
                <div id="pieSlice4" class="hold"><div class="pie"></div></div>
                <div id="pieSlice5" class="hold"><div class="pie"></div></div>
                <div id="pieSlice6" class="hold"><div class="pie"></div></div>
                
            </div>
        </div>
    )
}

export default graph;