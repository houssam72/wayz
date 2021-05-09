import React from 'react';
import './Signin.css';

const Singnin=({onRouteChange})=>{
return(
  <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
  <div className="pa4 black-80">
     <form className="measure ">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend  className=" tc f1 fw6 ph0 mh0 white" >Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" type="password" name="password"  id="password"/>
      </div>
      
    </fieldset>
    <div className="">
      <input 

            onClick={()=>onRouteChange('home')}
            className="white sat b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in"
             />
    </div>
    <div className="lh-copy mt3">
      <p onClick={()=>onRouteChange('register')} 
      className="tc f6 link dim white db pointer">Register</p>
    
    </div>
  </form>
  </div>
  </article>

	)

}

export default Singnin;