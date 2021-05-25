import React from 'react';


const Register=({onRouteChange})=>{
return(
 
  <>
        <div style={{marginTop:'-4%'}}>
        
          <form className="white center br3 ba  b--black-10 mv4 w-100 w-50-m w-100-l mw6 shadow-5 center sec_form">
          <legend className="tc f1 fw6 ph0 mh0 white center" >Register</legend><br/>
              <label for="marque_voiture">Nom : </label>
             <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="text" id="nom" name="nom" /><br></br>
             <label for="marque_voiture">Prenom : </label>
             <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="text" id="prenom" name="prenom" /><br></br>
             <label for="bagage">Sexe : </label>
              <select className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" name="sexe" id="sexe">
                    <option value="rien"></option>
                      <option value="homme">Homme</option>
                      <option value="femme">Femme</option>
                      <option value="autre">Autre</option>
              </select><br></br>
              <label for="bagage">Telephone : </label>
              <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="text" id="telephone" name="telephone" /><br></br>
              
              <label for="marque_voiture">Email : </label>
             <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="text" id="email" name="email" /><br></br>
             
             <label for="date">Date de naissance : </label>
             <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="date" id="date" name="date" /><br></br>
             <label for="nbr_place_dispo">Photo de profil : </label>
             <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="file" id="pdp" name="pdp" /><br></br>
             <label for="marque_voiture">Password : </label>
             <input className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2" type="password" id="password" name="password" /><br></br>
             
             <div className="">
              <input 
                    onClick={()=>onRouteChange('signin')}
                    className="sat b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" 
                    type="submit" 
                    value="Register"
                     />
            </div>
          </form>
        </div>
  </>

	)

}

export default Register;