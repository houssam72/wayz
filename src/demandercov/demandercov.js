import React, {Component} from 'react';
import Autocomplete from 'react-google-autocomplete';
import './demandercov.css';



class Demandercov extends Component {

constructor(){
  super();
  this.state={
    choice:'none'
    
  }
}


	onChoiceChange1=(choice)=>{
		this.setState({choice:'simple'})
	}
	onChoiceChange2=(choice)=>{
		this.setState({choice:'avancee'})
	}
	render(){
		return(
			<div>
				<div className="pa2 center bg-light-green fir_d   br3 ba  b--black-10 w-90 w-40-m w-20-l mw6 shadow-5 center div_demancov">
					<form className="form_dema center w-100 w-50-m">
	 					 <input type="radio" id="Simple" className="ml3" name="gender" value="Simple" onClick={this.onChoiceChange1} />
	 					 <label for="Simple" className="mr5">Simple</label><br/>
	  					 <input type="radio" id="Avancée" name="gender" value="Avancée" onClick={this.onChoiceChange2} />
	  					 <label for="Avancée">Avancée</label><br/>
					</form>
				</div>
			{
				this.state.choice==="simple" ? <div>
				
					<form className="white br3 ba  b--black-10 mv4 w-100 w-50-m w-100-l mw6 shadow-5 center sec_form">
  						<label for="ville_depart">Ville de depart : </label>
  						<Autocomplete
                           className='pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2'
                            types={['geocode']}
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
 						 <label for="fumeur">Fumeur : </label>
 						 <select className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" name="fumeur" id="fumeur">
 						 	<option value="rien"></option>
   							<option value="oui">Oui</option>
  							<option value="non">Non</option>
  						 </select><br></br>
 						
 						 
 						 <label for="animaux">Animaux de compagnie : </label>
 						 <select className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" name="animaux" id="animaux">
 						 	<option value="rien"></option>
   							<option value="non">Non</option>
  							<option value="chien">Chien</option>
    						<option value="chat">Chat</option>
    						<option value="autre">Autres</option>
  						 </select><br></br>

  						 <input className="b white pa1 input-reset ba bg-transparent hover-bg-black hover-white w-30 b--white center mb2 mt3 ph2" type="submit" value="Enregistrer" onClick={()=>this.props.onRouteChange('home')} />
  						 <input className="b white pa1  input-reset ba bg-transparent hover-bg-black hover-white w-30 b--white center mb2 mt3 ph2" type="reset"  value="Annuler"  onClick={()=>this.props.onRouteChange('home')}/>
					</form>
				</div>
				: (this.state.choice==="avancee" ? <div>	
					<form className="white br3 ba  b--black-10 mv4 w-100 w-50-m w-100-l mw6 shadow-5 center sec_form">
  						<label for="Adresse_depart">Adresse de depart : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="text" id="ville_depart" name="ville_depart"/><br></br>
 						 <label for="adresse_arrivee">Adresse d'arrivée : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="text" id="ville_arrivee" name="ville_arrivee" /><br></br>
 						 <label for="heure_depart">Heure de depart : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="time" id="heure_depart" name="heure_depart" /><br></br>
 						 <label for="heure_arrivee">Heure d'arrivée : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="time" id="heure_arrivee" name="heure_arrivee" /><br></br>
 						 <label for="date">Date : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="date" id="date" name="date" /><br></br>
 						 <label for="nbr_place_dispo">nombre de personne : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="number" max="4" min="1" id="nbr_place_dispo" name="nbr_place_dispo" /><br></br>
 						 <label for="bagage">Bagage : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="text" id="bagage" name="bagage" /><br></br>
 						 <label for="fumeur">Fumeur : </label>
 						 <select className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" name="fumeur" id="fumeur">
 						 	<option value="rien"></option>
   							<option value="oui">Oui</option>
  							<option value="non">Non</option>
  						 </select><br></br>
 						 <label for="animaux">Animaux de compagnie : </label>
 						 <select className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" name="animaux" id="animaux">
 						 	<option value="rien"></option>
   							<option value="non">Non</option>
  							<option value="chien">Chien</option>
    						<option value="chat">Chat</option>
    						<option value="autre">Autres</option>
  						 </select><br></br>
  
  						 <input className="b white pa1 input-reset ba bg-transparent hover-bg-black hover-white w-30 b--white center mb2 mt3 ph2" type="submit" value="Enregistrer" />
  						 <input className="b white pa1 input-reset ba bg-transparent hover-bg-black hover-white w-30 b--white center mb2 mt3 ph2" type="reset"  value="Annuler"  />
					</form>
					</div> : <div></div>)
			}
			</div>
			);
	}


}

export default Demandercov;