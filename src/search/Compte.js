import React from 'react';
import './card.css';

class Compte extends React.Component{
  onSubmitClick1=()=>{
    fetch('http://localhost:3001/deleteCovSimpleA',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id,
         
       })
    })
    .then(response=>response.json())
    .then(user=>{
     
    })
}  

onSubmitClick2=()=>{
    fetch('http://localhost:3001/deleteCovAvanceA',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id,
         
       })
    })
    .then(response=>response.json())
    .then(user=>{
     
    })
}  

onSubmitClick3=()=>{
    fetch('http://localhost:3001/deleteSaveCovSimpleA',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id,
         
       })
    })
    .then(response=>response.json())
    .then(user=>{
     
    })
} 

onSubmitClick4=()=>{
    fetch('http://localhost:3001/deleteSaveCovAvancaA',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id,
         
       })
    })
    .then(response=>response.json())
    .then(user=>{
     
    })
} 

onSubmitClick5=()=>{
    fetch('http://localhost:3001/deleteTrajetA',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id,
         
       })
    })
    .then(response=>response.json())
    .then(user=>{
     
    })
}

onSubmitClick6=()=>{
    fetch('http://localhost:3001/deleteUserA',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id,
         
       })
    })
    .then(response=>response.json())
    .then(user=>{
      
      
     
    })
}

onSubmitClick=()=>{
    fetch('http://localhost:3001/deleteProfilA',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         email:this.props.email,
         
       })
    })
    .then(response=>response.json())
    .then(user=>{
      this.onSubmitClick1();
      this.onSubmitClick2();
      this.onSubmitClick3();
      this.onSubmitClick4();
      this.onSubmitClick5();
       this.onSubmitClick6();
     this.props.onRouteChange('map');
    })
}
	render(){
    const {name,lastname,id,onRouteChange,number,rating,email,ville,joined,sexe}=this.props;
  return (
   <div className='tc bg-light-green dib br3 pa3 ma2  bw2 shadow-5'> 
     <img alt='robots' src={`user${id}.jpg`} className='img_user' style={{width:'50 %', height:'140px'}} />
       <div> 
     <h2> {name} {lastname}</h2> 
     <p className='ml6 underline'>   {rating}/5 <img height="20px" src={'star.png'}/> </p>
     <p className='pv1'>Numero : <span className='b'>+212 {number}</span></p>
     <p className='pv1'>Sexe : <span className='b'>{sexe} </span></p>
     <p className='pv1'>Email : <span className='b'>{email}</span></p>
     <p className='pv1'>ville : <span className='b'>{ville}</span></p>
     <p className='pv1'>Créé le :<span className='b'>{joined}</span></p>
     <button 
     onClick={()=>this.onSubmitClick()}  
     className="bt br4 ph3 pv1  ba black  grow pointer " style={{marginTop:'5px'}}
     >Supprimer</button>
       </div>
     

   </div>

  	)

}
}

export default Compte; 