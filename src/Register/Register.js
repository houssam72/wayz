import React from 'react';


const Register=({onRouteChange})=>{
return(
  <article class="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
  <div class="pa4 black-80">
     <form class="measure ">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="tc f1 fw6 ph0 mh0 white" >Register</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6 white" for="name">Name</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" type="text" name="name"  id="name"/>
      </div>
      <div class="mt3">
        <label class="db fw6 lh-copy f6 white" for="email-address">Email</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" type="email" name="email-address"  id="email-address"/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6 white" for="password">Password</label>
        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" type="password" name="password"  id="password"/>
      </div>
      
    </fieldset>
    <div class="">
      <input 
            onClick={()=>onRouteChange('signin')}
            class="sat b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" 
            type="submit" 
            value="Register"
             />
    </div>
    
  </form>
  </div>
  </article>

	)

}

export default Register;