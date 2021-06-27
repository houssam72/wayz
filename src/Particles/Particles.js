import React from 'react';
import Particles from 'react-particles-js';
import './Particles.css'

const particleOption={
                particles: {
                  number:{
                    value:150,
                    density:{
                      enable:true,
                      value_area:800
                    }
                  }
                  
                }
              }

const Particle=()=>{
	return(
   
  <Particles className='particles' params={particleOption} />
   
 
   
		)

}
export default Particle;