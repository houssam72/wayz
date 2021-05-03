import React from 'react';

const Card =({name,email,id})=>{
	
  return (
   <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
     <img alt='robots' src={`https://robohash.org/${id}?2000*200`} height="300px" width="300px"/>
       <div> 
     <h2> {name} </h2>
     <p className=''>{email}</p>
       </div>

   </div>

  	)


}

export default Card; 