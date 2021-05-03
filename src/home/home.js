import React from 'react';
import './home.css';

const Home=({onRouteChange})=>{
	return(
     <div  className='tc  '>

     <h2 className='h2 mt7'> <span>W</span>elcome to <span>Wa</span>yz</h2>
     <input 

            onClick={()=>onRouteChange('signin')}
            id='rt'
            className=" br4 ph4 pv3 input-reset ba white bg-transparent grow pointer  " 
            type="submit" 
            value="Get Started"
             />
     </div>


		)

}
export default Home;

