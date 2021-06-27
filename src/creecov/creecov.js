import React, {Component} from 'react';
import Autocomplete from 'react-google-autocomplete';
import './creecov.css';


class Creecov extends Component {

constructor(){
  super();
  this.state={
    choice:'simple',
    
      departS:'',
      arriveS:'',
      heureDepartS:'',
      heureArriveeS:'',
      dateS:'',
      nbr_place_dispoS:'',
      bagageS:'',
      type_vehiculeS:'',
      confort_voitureS:'',
      prixS:''
    
    
  }
}

	onChoiceChange1=(choice)=>{
		this.setState({choice:'simple'})
	}
	onChoiceChange2=(choice)=>{
		this.setState({choice:'avancee'})
	}

  //server simple crrecov
   onDepartChange=(event)=>{
    this.setState({departS:event.target.value})
    
  }
  onArriveChange=(event)=>{
    this.setState({arriveS:event.target.value})
  }
  onHeureDepartChange=(event)=>{
    this.setState({heureDepartS:event.target.value})
  }
  onHeureArriveeChange=(event)=>{
    this.setState({heureArriveeS:event.target.value})
  }
  onDateChange=(event)=>{
    this.setState({dateS:event.target.value})
    
  }
  onNbr_place_dispoChange=(event)=>{
    this.setState({nbr_place_dispoS:event.target.value})
    
  }
  onBagageChange=(event)=>{
    this.setState({bagageS:event.target.value})
  }
  onType_vehiculeChange=(event)=>{
    this.setState({type_vehiculeS:event.target.value})
    
  }
  onConfort_voitureChange=(event)=>{
    this.setState({confort_voitureS:event.target.value})
    
  }
  onPrixChange=(event)=>{
    this.setState({prixS:event.target.value})
  }

  onSubmitCreeCovSimple=()=>{
   
    fetch('http://localhost:3001/creeCovSimple',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
      userId:this.props.userId,  
      depart:this.state.departS,
      arrive:this.state.arriveS,
      heureDepart:this.state.heureDepartS,
      heureArrivee:this.state.heureArriveeS,
      date:this.state.dateS,
      nbr_place_dispo:this.state.nbr_place_dispoS,
      bagage:this.state.bagageS,
      type_vehicule:this.state.type_vehiculeS,
      confort_voiture:this.state.confort_voitureS,
      prix:this.state.prixS
       })
    })
    .then(response=>response.json())
    .then(user=>{
      if(user){
        
        this.props.onRouteChange('home'); 
        
      }
    })
   
  }
  
	render(){
		return(
			<div>
				<div className="pa2 center bg-light-green fir_d   br3 ba  b--black-10 w-90 w-40-m w-20-l mw6 shadow-5 center div_creecov ">
					<form className="form_cree center w-100 w-50-m">
	 					 <input type="radio" id="Simple" className="ml3" name="gender" value="Simple" onClick={this.onChoiceChange1} />
	 					 <label for="Simple" className="mr5">Simple</label><br/>
	  					 <input type="radio" id="Avancée" name="gender" value="Avancée" onClick={this.onChoiceChange2} />
	  					 <label for="Avancée">Avancée</label><br/>
					</form>
				</div>
			{
				this.state.choice==="simple" ? <div>
				
					<div className="white center br3 ba  b--black-10 mv4 w-100 w-50-m w-100-l mw6 shadow-5 center sec_form">
  						<label for="ville_depart">Ville de depart : </label>
  						<Autocomplete
                           className='pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2'
                            types={['geocode']}
                            id="ville_depart" name="ville_depart"
                            onChange={this.onDepartChange}
                        /><br></br>
 						 <label for="ville_arrivee">Ville d'arrivée : </label>
 						 <Autocomplete
                           className='pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2'
                            types={['(place)']}
                            id="ville_arrivee" name="ville_arrivee"
                            onChange={this.onArriveChange}
                        /><br></br>
 						 <label for="heure_depart">Heure de depart : </label>
 						 <input 
                   className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                   type="time" 
                   id="heure_depart" 
                   name="heure_depart" 
                   onChange={this.onHeureDepartChange}
                   /><br></br>
 						 <label for="heure_arrivee">Heure d'arrivée : </label>
 						 <input 
                   className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                   type="time" id="heure_arrivee" 
                   name="heure_arrivee" 
                   onChange={this.onHeureArriveeChange}
                   /><br></br>
 						 <label for="date">Date : </label>
 						 <input 
                     className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                     type="date" 
                     id="date" 
                     name="date" 
                     onChange={this.onDateChange}
                     /><br></br>
 						 <label for="nbr_place_dispo">nombre de place disponible : </label>
 						 <input 
                  className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                  type="number" 
                  max="4" 
                  min="1" 
                  id="nbr_place_dispo" 
                  name="nbr_place_dispo" 
                  onChange={this.onNbr_place_dispoChange}
                  /><br></br>
 						 <label for="bagage">Bagage : </label>
 						 <input 
                   className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                   type="text" 
                   id="bagage" 
                   name="bagage" 
                   onChange={this.onBagageChange}
                   /><br></br> 					
 						 <label for="marque_voiture">Type du véhicule : </label>
             <select 
                    className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                    name="type_vehi" 
                    id="type_vehi"
                    onChange={this.onType_vehiculeChange}
                    >
              <option value="rien"></option>
                <option value="moto">Moto</option>
                <option value="voiture">Voiture</option>
                <option value="autre">Autre</option>
               </select><br></br>
             <label for="confort_voiture">Confort du véhicule : </label>
             <select 
                    className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                    name="confort_vehi" 
                    id="confort_vehi"
                    onChange={this.onConfort_voitureChange}
                    >
              <option value="rien"></option>
                <option value="parfait">Parfait</option>
                <option value="tres bien">Tres bien</option>
                <option value="bien">Bien</option>
                <option value="pas_mal">Pas mal</option>
               </select><br></br>
  						 <label for="prix">Prix : </label>
 						 <input 
               className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
               type="text" 
               id="prix"  
               name="prix" 
               onChange={this.onPrixChange}
               />DH<br></br>
  						 
               <input 
               className="b white pa1 input-reset ba bg-transparent hover-bg-black hover-white w-30 b--white center mb2 mt3 ph2" 
               type="submit" 
               value="Enregistrer" 
               onClick={()=>this.onSubmitCreeCovSimple()} 
               />
  						 
               <input className="b pa1 white input-reset ba bg-transparent hover-bg-black hover-white w-30 b--white center mb2 mt3 ph2" type="reset"  value="Annuler"  onClick={()=>this.props.onRouteChange('home')}/>
					</div>
				</div>
				: (this.state.choice==="avancee" ? <div>	
					<div className="white br3 ba  b--black-10 mv4 w-100 w-50-m w-100-l mw6 shadow-5 center sec_form">
             <label for="Adresse_depart">Ma position : </label>
             <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="text" id="position" name="posiiton"/><br></br>
  						<label for="date">Date : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="date" id="date" name="date" /><br></br>
 						 <label for="nbr_place_dispo">nombre de place disponible : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="number" max="4" min="1" id="nbr_place_dispo" name="nbr_place_dispo" /><br></br>
 						 <label for="bagage">Bagage : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="text" id="bagage" name="bagage" /><br></br>
              <label for="marque_voiture">Type du véhicule : </label>
             <select className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" name="type_vehi" id="type_vehi">
              <option value="rien"></option>
                <option value="moto">Moto</option>
                <option value="voiture">Voiture</option>
                <option value="autre">Autre</option>
               </select><br></br>
 						 <label for="marque_voiture">Marque du véhicule : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="text" id="marque_vehi" name="marque_vehi" /><br></br>
 						 <label for="confort_voiture">Confort du véhicule : </label>
 						 <select className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" name="confort_vehi" id="confort_vehi">
 						 	<option value="rien"></option>
   							<option value="parfait">Parfait</option>
  							<option value="tres bien">Tres bien</option>
    						<option value="bien">Bien</option>
    						<option value="pas_mal">Pas mal</option>
  						 </select><br></br>
  						 <label for="prix">Prix : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="text" id="prix" name="prix" />DH<br></br>
  						 <input className="b white pa1 input-reset ba bg-transparent hover-bg-black hover-white w-30 b--white center mb2 mt3 ph2" type="submit" value="Enregistrer" />
  						 <input className="b white pa1 input-reset ba bg-transparent hover-bg-black hover-white w-30 b--white center mb2 mt3 ph2" type="reset"  value="Annuler"  />
					</div>
					</div> : <div></div>)
			}
			</div>
			);
	}


}

export default Creecov;