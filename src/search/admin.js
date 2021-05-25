import React from 'react';
import './card.css';

const admin =({name,email,id,number,onPayment,typevehicule,confortvoiture,rating})=>{
	
  return (


   <div className='pa2 center bg-light-green br3 ma2 grow  shadow-5' style={{width:'65%', height:'200px'}}> 
    <div style={{width:'100%', height:'40%'}} className='flex'>
      <div style={{width:'15%', height:'100%'}}>
        <img alt='robots' src={`https://robohash.org/${id}?2000*200`} className='img_user' height="100px" width="100px"/>
      </div>
      <div style={{width:'30%', height:'100%',marginLeft:'0%'}} className='pv2'>
        <p className='f3 b black flex justify-start'>{name} </p> <p className='ml6 underline'> {rating}/5</p>
        <p className='f3 b black flex justify-start'>+212 {number}</p>
      
      </div>
    </div>
   


    <div style={{width:'100%', height:'18%', marginTop:'3%'}} className='flex'>
      <div style={{width:'33%', height:'100%'}} className=''>
        <div className='f3 pv2 black'>Voiture : {typevehicule}</div>
      </div>
      <div style={{width:'33%', height:'100%'}}>
        <div className='f3 pv2 black'>Confort : {confortvoiture}</div>
      </div>  
    </div>


    <div style={{width:'100%', height:'15%'}} className=''>
      <div style={{width:'97%',display:'flex',justifyContent:'flex-end'}} className='pv3'>
        <button className="bt br4 ph3 pv1  ba black  grow pointer ">Supprimer compte</button>
      </div>
    </div>

   </div>
  	);


}

export default admin; 
