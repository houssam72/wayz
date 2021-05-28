import React from 'react';
import img from './2121.jpg';

const Profile=({user})=>{
	

	return(
	<div className='pa2 center bg-light-green br3 ma2 grow  shadow-5' style={{width:'65%', height:'380px',marginTop:'-5%'}}> 
		<div className='flex'>
		<div className="flex justify-end">
		<span className='b f2 justify-start pa3'>Mon profil</span>
   		</div>
   		<div className="flex justify-end">
		<img src={img} alt="PDP" width="14%" className="img_pers flex justify-end" />
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
    </div>

		);
}
  export default Profile;






 // ({nom,email,prenom,telephone,anniversaire,picture})
	
