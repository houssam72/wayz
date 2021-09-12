import React, {Component} from 'react';
import Autocomplete from 'react-google-autocomplete';
import './demandercov.css';



class Demandercov extends Component {


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
 
  }
}

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

  onSubmitCreeTrajet=()=>{
   
    fetch('http://localhost:3001/creeTrajet',{
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
      bagage:this.state.bagageS
      
       })
    })
    .then(response=>response.json())
    .then(user=>{
      if(user){
        
        this.props.onRouteChange('mestrajet'); 
        
      }
    })
   
  }
	
	render(){
		return(
			<div>
				
			 <div>
				
					<div className="white br3 ba  b--black-10 mv4 w-100 w-50-m w-100-l mw6 shadow-5 center sec_form">
  						<label for="ville_depart">Ville de depart : </label>
  						<Autocomplete
                           className='pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2'
                            types={['place']}
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
 						     type="time" id="heure_depart" name="heure_depart" 
                       onChange={this.onHeureDepartChange}
 						     /><br></br>
 						 <label for="heure_arrivee">Heure d'arrivée : </label>
 						 <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
 						        type="time" id="heure_arrivee" name="heure_arrivee" 
 						        onChange={this.onHeureArriveeChange}
 						        /><br></br>
 						 <label for="date">Date : </label>
 						 <input 
 						 className="   pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
 						 type="date" id="date" name="date" 
 						 onChange={this.onDateChange}
 						 /><br></br>
 						 <label for="nbr_place_dispo">nombre de personne : </label>
 						 <input 
 						 className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
 						 type="number" max="4" min="1" id="nbr_place_dispo" name="nbr_place_dispo" 
 						 onChange={this.onNbr_place_dispoChange}
 						 /><br></br>
 						 <label for="bagage">Bagage : </label>
 						 <input 
 						 className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
 						 type="text" id="bagage" name="bagage" 
 						 onChange={this.onBagageChange}
 						 /><br></br>

  						 <input 
  						 className="b white pa1 input-reset ba bg-transparent hover-bg-black hover-white w-30 b--white center mb2 mt3 ph2" 
  						 type="submit" 
  						 value="Enregistrer" 
  						 onClick={()=>this.onSubmitCreeTrajet()}  
  						 />
  						 <input className="b white pa1  input-reset ba bg-transparent hover-bg-black hover-white w-30 b--white center mb2 mt3 ph2" 
  						 type="reset"  value="Annuler"  
  						 onClick={()=>this.props.onRouteChange('trajet')}/>
					</div>
				</div>
				
			
			</div>
			);
	}


}

export default Demandercov;