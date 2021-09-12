import React from 'react';
import './card.css';
import line from './line.png';
class MesTrajet extends React.Component{
  onSubmitClick=()=>{
    fetch('http://localhost:3001/deleteTrajet',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         idcov:this.props.idcov,
         
       })
    })
    .then(response=>response.json())
    .then(user=>{
      
      
          this.props.onRouteChange('map');

           
    })
} 

	render(){
    const {rating,name,email,id,number,depart,arrive,prix,date,hd,ha,onPayment,bagage,nbrplacedispo,typevehicule,confortvoiture,myId}=this.props;
  return (
   <div className='pa2 center bg-light-green br3 ma2  shadow-5' style={{width:'65%', height:'310px'}}> 
    <div style={{width:'100%', height:'33.70%'}} className='flex'>
      <div style={{width:'15%', height:'100%'}}>
        <img alt='robots' src={`user${myId}.jpg`} className='img_user' height="100px" width="100px"/>
      </div>
      <div style={{width:'30%', height:'100%',marginLeft:'0%'}} className='pv2'>
        <p className='f3 b black flex justify-start'>{name}</p> <p className='ml6 underline'>   {rating}/5 <img height="20px" src={'star.png'}/> </p><br/> 
        <p className='f3 b black flex justify-start'>+212 {number}</p>
      </div>
      <div style={{width:'55%', height:'100%',display:'flex',justifyContent:'flex-end',marginTop:'-1%'}} className='pv2'>
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
        <div className='f3 pv3 black'>Place : {nbrplacedispo}</div>
      </div>
      
    </div>
    <div style={{width:'100%', height:'19.10%'}} className=''>
      <div style={{width:'97%',display:'flex',justifyContent:'flex-end',marginTop:'1%'}} className='pv3'>
        
        <button 
        onClick={()=>this.onSubmitClick()}
        className="bt br4 ph3 pv1  ba black  grow pointer "
        >Supprimer le trajet</button>
      </div>
    </div>

   </div>
  	);

}
}

export default MesTrajet; 
