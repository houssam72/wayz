import React from 'react';
import {user} from '../search/user';
import img from './2121.jpg';

function Profile(){
	const nom = user.map( e => e.nom)
	const prenom = user.map( e => e.prenom)
	const telephone = user.map( e => e.telephone)
	const sexe = user.map( e => e.sexe)
	const email = user.map( e => e.email)
	const ville = user.map( e => e.ville)
	const anniversaire = user.map( e => e.anniversaire)

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
		    	<div className='f3 lh-copy'>Date de naissance : </div>
		    </div>
		    <div className='ph2'>
		    	<div className='f3 lh-copy'><span className='white'>{nom}</span></div>
		   		<div className='f3 lh-copy'><span className='white'>{prenom}</span></div>
		    	<div className='f3 lh-copy'><span className='white'>+212-{telephone}</span></div>
		    	<div className='f3 lh-copy'><span className='white'>{sexe}</span></div>
		    	<div className='f3 lh-copy'><span className='white'>{email}</span></div>
		    	<div className='f3 lh-copy'><span className='white'>{ville}</span></div>
		    	<div className='f3 lh-copy'><span className='white'>{anniversaire}</span></div>
	    	</div>
	    </div>
    </div>

		);
}
  export default Profile;






 // ({nom,email,prenom,telephone,anniversaire,picture})
	
