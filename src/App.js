import React, { Component } from "react";
import Space from './Space/Space';
import './App.css';
import Home from './home/home';
import Particle from './Particles/Particles';
import Navigation from './Navigation/navigation';
import Logo from './logo/logo';
import Signin from './Signin/Signin';
import Register from './Register/Register';
import Bars from './Bars/Bars';
import Search from './search/Search';

class App extends Component {

constructor(){
  super();
  this.state={
    input:'',
    route:'homep',
    isSignedIn:false
    
  }
}

onRouteChange=(route) =>{
 if(route==="home" || route==="payee"){
    this.setState({isSignedIn:true})
  } else {
    this.setState({isSignedIn:false})
  }
  this.setState({route:route})
}

  render(){
  return (
    <div>
   { this.state.route==='homep'
    ? 
    <div>
    <Space/>
    <Home onRouteChange={this.onRouteChange}/>
    </div>
    :
    <div>
    <Particle/>
     <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
    <Logo/>
    { this.state.route==='signin'
      ? <Signin onRouteChange={this.onRouteChange}/>
      : (this.state.route==='home' || this.state.route==='payee'
         ?<Search route={this.state.route} />
         :<Register onRouteChange={this.onRouteChange}/>
)
    }
    </div>

   
  }
    </div>
  
  );
}
}

export default App;