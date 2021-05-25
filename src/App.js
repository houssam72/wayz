import React, { Component } from "react";
import Space from './Space/Space';
import './App.css';
import Home from './home/home';
import Particle from './Particles/Particles';
import Navigation from './Navigation/navigation';
import Logo from './logo/logo';
import Signin from './Signin/Signin';
import Register from './Register/Register';
// import Bars from './Bars/Bars';
import Search from './search/Search';
import LocationSearchModal from './Map/Map';
import Creecov from './creecov/creecov';
import Demandercov from './demandercov/demandercov';
import Questions from './Questions/Questions'
import Join from './Join/Join';
import Chat from './Chat/Chat';
import About from './About/About';
import Profil from './profile/profile';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      : (this.state.route==='home' || this.state.route==='payee' || this.state.route==='mine' || this.state.route==='save' 
         ?<Search route={this.state.route} />
         :(this.state.route==='map'
         ?<LocationSearchModal/>
         :(this.state.route==='registrer'
         ?<Register onRouteChange={this.onRouteChange}/>
         :(this.state.route==='creecov'
          ?<Creecov onRouteChange={this.onRouteChange} />
         :(this.state.route==='demandercov'
          ?<Demandercov/> 
         :(this.state.route==='chat'
          ?<Router><Route path="/" exact component={Join} /><Route path="/chat" component={Chat} /></Router>
         :(this.state.route==='ques'
          ?<Questions/>
         :(this.state.route==='about'
            ?<About/>
         :(this.state.route==='profile'
          ?<Profil/>
          :<div></div>))))))))
)
    }


    </div>

   
  }
  {/*<LocationSearchModal/>*/}
   </div>
  
  );
}
}

export default App;