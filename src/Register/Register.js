import React from 'react';


class Register extends React.Component{


    //server
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      name:'',
      lastName:'',
      number:'',
      ville:'',
      sexe:''
    }
  }

  onNameChange=(event)=>{
    this.setState({name:event.target.value})
    
  }
  onEmailChange=(event)=>{
    this.setState({email:event.target.value})
  }
  onPasswordChange=(event)=>{
    this.setState({password:event.target.value})
  }
  onLastNameChange=(event)=>{
    this.setState({lastName:event.target.value})
  }
  onNumberChange=(event)=>{
    this.setState({number:event.target.value})
    
  }
  onVilleChange=(event)=>{
    this.setState({ville:event.target.value})
    
  }
  onSexeChange=(event)=>{
    this.setState({sexe:event.target.value})
  }
  onSubmitRegister=()=>{
    fetch('http://localhost:3001/register',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         email:this.state.email,
         password:this.state.password,
         name:this.state.name,
         lastName:this.state.lastName,
         number:this.state.number,
         ville:this.state.ville,
         sexe:this.state.sexe
       })
    })
    .then(response=>response.json())
    .then(user=>{
      if(user){
        this.props.loadUser(user); 
        this.props.onRouteChange('signin');
        
      }
    })
    
  }

  render(){
    
return(
 
  <>
        <div style={{marginTop:'-4%'}}>
        
          <div className="white center br3 ba  b--black-10 mv4 w-100 w-50-m w-100-l mw6 shadow-5 center sec_form">
          <legend className="tc f1 fw6 ph0 mh0 white center" >Register</legend><br/>
              <label for="marque_voiture">Nom : </label>
             <input 
                 className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                 type="text" 
                 id="nom" 
                 name="nom" 
                 onChange={this.onNameChange}/><br></br>
             <label for="marque_voiture">Prenom : </label>
             <input 
                     className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                     type="text" 
                     id="prenom" 
                     name="prenom" 
                     onChange={this.onLastNameChange}
                     /><br></br>
             <label for="bagage">Sexe : </label>
              <select 
                      className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                      name="sexe" 
                      id="sexe"
                      onChange={this.onSexeChange}
                      >
                    <option value="rien"></option>
                      <option value="homme">Homme</option>
                      <option value="femme">Femme</option>
                      
              </select><br></br>
              <label for="bagage">Telephone : </label>
              <input 
                    className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                    type="text" 
                    id="telephone" 
                    name="telephone" 
                    onChange={this.onNumberChange}
                    /><br></br>
              
              <label for="marque_voiture">Email : </label>
             <input 
                className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                type="text" 
                id="email" 
                name="email" 
                onChange={this.onEmailChange}
                /><br></br>
              <label for="marque_voiture">Ville : </label>
             <input 
                className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                type="text" 
                id="email" 
                name="email" 
                onChange={this.onVilleChange}
                /><br></br>
             <label for="date">Date de naissance : </label>
             <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="date" id="date" name="date" /><br></br>
             <label for="nbr_place_dispo">Photo de profil : </label>
             <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="file" id="pdp" name="pdp" /><br></br>
             <label for="marque_voiture">Password : </label>
             <input 
                   className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" 
                   type="password" 
                   id="password" 
                   name="password" 
                   onChange={this.onPasswordChange}
                   /><br></br>
             
             <div className="">
              <input 
                    onClick={()=>this.onSubmitRegister()}
                    className="sat b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" 
                    type="submit" 
                    value="Register"
                     />
            </div>
          </div>
        </div>
  </>

	)

}
}

export default Register;