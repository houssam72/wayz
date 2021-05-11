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
import LocationSearchModal from './Map/Map';

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
 if(route==="signin" || route==="registrer"){
    this.setState({isSignedIn:false})
  } else {
    this.setState({isSignedIn:true})
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
         :(this.state.route==='map'
         ?<LocationSearchModal/>
         :(this.state.route==='registrer'
         ?<Register onRouteChange={this.onRouteChange}/>
         :<div></div>))
)
    }


    </div>

   
  }
/*  {/*<LocationSearchModal/>*/}
*/    </div>
  
  );
}
}

export default App;