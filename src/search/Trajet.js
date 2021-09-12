import React from 'react';
import './card.css';
import line from './line.png';
import { Link } from "react-router-dom";
const Trajet =({name,lastname,email,userid,number,depart,arrive,prix,date,hd,ha,onPayment,bagage,nbrplacedispo,typevehicule,confortvoiture,rating,id})=>{
	
  return (
   <div className='pa2 center bg-light-green br3 ma2   shadow-5' style={{width:'65%', height:'310px'}}> 
    <div style={{width:'100%', height:'33.70%'}} className='flex'>
      <div style={{width:'15%', height:'100%'}}>
        <img alt='robots' src={`user${id}.jpg`} className='img_user' height="100px" width="100px"/>
      </div>
      <div style={{width:'40%', height:'100%',marginLeft:'0%'}} className='pv2'>
        <p className='f3 b black flex justify-start'>{name} {lastname}</p>  <p className='ml6 underline'>   {rating}/5 <img height="20px" src={'star.png'}/> </p>
        <p className='f3 b black flex justify-start'>+212 {number}</p>
        
      </div>
      <div style={{width:'45%', height:'100%',display:'flex',justifyContent:'flex-end',marginTop:'-1%'}} className='pv2'>
        <p className='f3 b black'>{date}</p>
      </div>
    </div>
    <div style={{width:'100%', height:'20.22%'}} className='bg-light-green flex'>
      <div style={{width:'23%', height:'100%'}} className='pr2'>
        <div><p className='f3 flex justify-end black'> {depart}</p></div>
        <div><p className='f3 flex justify-end black'> {hd} </p></div>
      </div>
      <div style={{width:'45%', height:'100%'}} className='pv3'>
        <img src={line} alt="line"/>
      </div>
      <div style={{width:'25%', height:'100%'}} className='pl2'>
        <div><p className='f3 flex justify-start black'> {arrive}</p></div>
        <div><p className='f3 flex justify-start black'> {ha} </p></div>
      </div>
    </div>
    <div style={{width:'100%', height:'26.96%'}} className='flex'>
      <div style={{width:'33%', height:'100%'}} className=''>
        <div className='f3 pv3 black'>{bagage}</div>
       
      </div>
      <div style={{width:'66%', height:'100%'}}>
        <div className='f3 pv3 black'>nombre de Place : {nbrplacedispo}</div>
     
      </div>
      
    </div>
    <div style={{width:'100%', height:'19.10%'}} className=''>
      <div style={{width:'97%',display:'flex',justifyContent:'flex-end'}} className='pv3'>
      
        <button 
       className="bt br4 ph3 pv1  ba black  grow pointer "
       >Chatter avec le passager</button>
      
      </div>
    </div>

   </div>
  	);


}

export default Trajet; 
