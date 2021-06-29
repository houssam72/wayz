import React from 'react';
import './card.css';

const Compte =({name,lastname,id,onRouteChange,number,rating,email})=>{
	
  return (
   <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
     <img alt='robots' src={`https://robohash.org/${id}?2000*200`} className='img_user' style={{width:'50 %', height:'140px'}} />
       <div> 
     <h2> {name} {lastname}</h2> 
     <p className='underline pv1'>3.5/5</p>
     <p className='pv1'>Numero : <span className='b'>+212 {number}</span></p>
     <p className='pv1'>Sexe : <span className='b'>sexe </span></p>
     <p className='pv1'>Email : <span className='b'>email@gmail.com</span></p>
     <p className='pv1'>Créé le :<span className='b'>11/02/2020</span></p>
     <button className="bt br4 ph3 pv1  ba black  grow pointer " style={{marginTop:'5px'}}>Supprimer</button>
       </div>
     

   </div>

  	)


}

export default Compte; 