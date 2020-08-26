import React from 'react';


const slice = (props) => {
 
    return(
        <div>
            {/* <div id="pieSlice1" class="hold"><div class="pie"></div></div> */}
            <div style={{
                    backgroundColor: '#1b458b',
                    transform:'rotate('+ props.degree +'deg)',
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    borderRadius: '100%',
                    clip: 'rect(0px, 150px, 150px, 75px)'
                    }}>
                         <div style={{
                             transition: 'all 1s',
                             position: 'absolute',
                             width: '150px',
                             height: '150px',
                             borderRadius: '100%',
                             clip: 'rect(0px, 75px, 150px, 0px)',
                             backgroundColor: '#1b458b',
                             transform:'rotate('+ props.degreeAdd +'deg)',
                         }}></div>
                </div>
        </div>
    )
}

export default slice;