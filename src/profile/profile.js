import React from 'react';
import img from './2121.jpg';

class Profile extends React.Component{
onSubmitClick1=()=>{
    fetch('http://localhost:3001/deleteCovSimpleA',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.user.id,
         
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
         id:this.props.user.id,
         
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
         id:this.props.user.id,
         
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
         id:this.props.user.id,
         
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
         id:this.props.user.id,
         
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
         id:this.props.user.id,
         
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
         email:this.props.user.email,
         
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
       this.props.onRouteChange('homep');
     
    })
}
	
render(){
	const {user}=this.props;
	return(
	<div className='pa2 center bg-light-green br3 ma2   shadow-5' style={{width:'65%', height:'380px',marginTop:'-5%'}}> 
		<div className='flex'>
		<div style={{width:'50%'}} className="flex justify-start">
		<span className='b f2 justify-start pa3'>Mon profil</span> <p className='ml6 underline mt3'>   {user.rating}/5 <img height="20px" src={'star.png'}/> </p>
   		</div>
   		<div style={{width:'50%'}} className="flex justify-end">
		<img src={`user${user.id}.jpg`} alt="PDP" width="14%" className="img_pers flex justify-end" />
   		</div>
   		</div>

   		<br/>
   		<div className='flex'>
   			<div>
		   		<div className='f3 lh-copy'>Nom : </div>
		   		<div className='f3 lh-copy'>Prenom : </div>
		    	<div className='f3 lh-copy'> Telephone : </div>
		    	<div className='f3 lh-copy'>Sexe : </div>
		    	<div className='f3 lh-copy'>Email : </div>
		    	<div className='f3 lh-copy'>Ville : </div>
		    	
		    </div>
		    <div className='ph2'>
		    	<div className='f3 lh-copy'><span className='white'>{user.name}</span></div>
		   		<div className='f3 lh-copy'><span className='white'>{user.lastName}</span></div>
		    	<div className='f3 lh-copy'><span className='white'>+212-{user.number}</span></div>
		    	<div className='f3 lh-copy'><span className='white'>{user.sexe}</span></div>
		    	<div className='f3 lh-copy'><span className='white'>{user.email}</span></div>
		    	<div className='f3 lh-copy'><span className='white'>{user.ville}</span></div>
		    	
	    	</div>
	    </div>
	    {user.name==='admin'
	    ?<div></div>
	    :
	    <div style={{width:'97%',display:'flex',justifyContent:'flex-end'}} className='pv3'>

	            <button 
	            onClick={()=>this.onSubmitClick()}  
	            className="bt br4 ph3 pv1  ba black  grow pointer"
	            >Supprimer le compte</button>
	    </div>
	  }

    </div>

		);
}
}
  export default Profile;






 // ({nom,email,prenom,telephone,anniversaire,picture})
	
