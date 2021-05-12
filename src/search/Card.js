import React from 'react';
import './card.css';
const Card =({name,email,id,number,depart,arrive,prix,date,hd,ha,onPayment})=>{
	
  return (
   <div className='pa2 center bg-light-green br3 ma2 grow  shadow-5' style={{width:'65%'}}> 
  {/*partie profil nom date boutton*/}
   <div className='flex '>
     <div className='w-25 pa1 ma1'>
        <img alt='robots' src={`https://robohash.org/${id}?2000*200`} className='img_user' height="100px" width="100px"/>
      </div>
     <div className='  w-25 pa2 ma1 '>
     <div className=' d b '>
        
        <p>{name}</p>
        
        
        
        
      </div>  
     </div>
      <div className=' w-25 pa1  ma1'>
      <p className='d b'>&#9742;  : {number}</p>
      </div>
     <div className='  w-25 pa1  ma1'>
     <p className='d'>{date}</p>
     </div>
   </div>
    <div>
    </div>
   {/* partie 2*/}  
   <div className="grid-container">
  <div className='a flex'>
  <img alt='robots'   src='./wayz.png'  height="25px" width="70px"/>
      
  <p > {hd} </p>
  </div>
    <div className='z'>
    <p> {depart}</p>
    <img alt='robots'    src='./wayz.png'  height="25px" width="70px"/>
      

  </div>
    <div className='c flex mb4'>
    <img alt='robots'   src='./wayz.png'  height="25px" width="70px"/>

    <p > {ha} </p>
  </div>
    <div className='e'>
    <p> {arrive}</p>
    <img alt='robots'   src='./wayz.png'  height="25px" width="70px"/>

      
  </div>
    <div className='d  ma1 '>
     <h3>{prix} DH</h3>
     <div className="mt4 mb2">
      <input 
            className="bt br4 ph3 pv1  ba white  grow pointer " 
            type="submit" 
            value="Chatter"
             />
             <input 
            className="bl br4 ph3 pv1  ba white ml3  grow pointer " 
            type="submit" 
            value="Enregistrer"
            onClick={()=>onPayment({id})}
             />
      </div>
  </div>

   </div>

   </div>

  	)


}

export default Card; 
