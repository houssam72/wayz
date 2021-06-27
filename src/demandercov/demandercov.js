import React, {Component} from 'react';
import Autocomplete from 'react-google-autocomplete';
import './demandercov.css';



class Demandercov extends Component {




	
	render(){
		return(
			<div>
				
			 <div>
				
					<form className="white br3 ba  b--black-10 mv4 w-100 w-50-m w-100-l mw6 shadow-5 center sec_form">
  						<label for="ville_depart">Ville de depart : </label>
  						<Autocomplete
                           className='pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2'
                            types={['place']}
                            id="ville_depart" name="ville_depart"
                           
                        /><br></br>
 						 <label for="ville_arrivee">Ville d'arrivée : </label>
 						 <Autocomplete
                           className='pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2'
                            types={['(place)']}
                            id="ville_arrivee" name="ville_arrivee"
                           
                        /><br></br>
 						 <label for="heure_depart">Heure de depart : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="time" id="heure_depart" name="heure_depart" /><br></br>
 						 <label for="heure_arrivee">Heure d'arrivée : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="time" id="heure_arrivee" name="heure_arrivee" /><br></br>
 						 <label for="date">Date : </label>
 						 <input className="   pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="date" id="date" name="date" /><br></br>
 						 <label for="nbr_place_dispo">nombre de personne : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="number" max="4" min="1" id="nbr_place_dispo" name="nbr_place_dispo" /><br></br>
 						 <label for="bagage">Bagage : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="text" id="bagage" name="bagage" /><br></br>

  						 <input className="b white pa1 input-reset ba bg-transparent hover-bg-black hover-white w-30 b--white center mb2 mt3 ph2" type="submit" value="Enregistrer" onClick={()=>this.props.onRouteChange('home')} />
  						 <input className="b white pa1  input-reset ba bg-transparent hover-bg-black hover-white w-30 b--white center mb2 mt3 ph2" type="reset"  value="Annuler"  onClick={()=>this.props.onRouteChange('home')}/>
					</form>
				</div>
				
			
			</div>
			);
	}


}

export default Demandercov;