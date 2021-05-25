import React from 'react';
import Bars from '../Bars/Bars';


const Navigation=({onRouteChange,isSignedIn,session})=>{

if(isSignedIn){
	return(
	<nav style={{display:'flex',justifyContent:'flex-end'}}>
    <Bars onRouteChange={onRouteChange } session={session}/>
     {/*<p  onClick={()=>onRouteChange}
         className='f3 link dim black  pa3 pointer'> Sign Out</p>*/
      }
       
   </nav>  

  
   );
}

else{
return(
   <nav style={{display:'flex',justifyContent:'flex-end'}}>
     <p  onClick={()=>onRouteChange('signin')}
         className='f5 white link dim black  pa3 pointer'> Sign In</p>
     <p  onClick={()=>onRouteChange('registrer')}
         className='f5 white link dim black  pa3 pointer'> Register</p>    
     
   </nav>  
   

	)
}
}

export default Navigation;