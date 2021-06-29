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
    isSignedIn:false,
    session:'a',
    user:{
     id:'',
     name:'',
     lastName:'',
     number:'',
     email:'',
     ville:'',
     sexe:'',
     joined:''
   }
    
  }
}

loadUser=(data)=>{
  this.setState({user:{
     id:data.id,
     name:data.name,
     lastName:data.lastname,
     number:data.number,
     email:data.email,
     ville:data.ville,
     sexe:data.sexe,
     joined:data.joined
  }})
}

onRouteChange=(route) =>{
 if(route==="signin" || route==="registrer"){
    this.setState({isSignedIn:false})
  } else {
    this.setState({isSignedIn:true})
  }
  this.setState({route:route})
}

onStateChange=(route,session) =>{
  if(route==="signin" || route==="registrer"){
    this.setState({isSignedIn:false})
  } else {
    this.setState({isSignedIn:true})
  }
  this.setState({session:session});
  this.setState({route:route})
}

  render(){
  return (
    <div>
   { this.state.route==='homep'  && ( this.state.session==='normal' || this.state.session==='admin' || this.state.session==='a' )
    ? 
    <div>
    <Space/>
    <Home onRouteChange={this.onRouteChange}/>
    </div>
    :
    <div>
    <Particle/>
     <Navigation user={this.state.user} isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} session={this.state.session}/>
    <Logo/>
    { this.state.route==='signin' && ( this.state.session==='normal' || this.state.session==='admin' ||this.state.session==='a')
      ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} onSessionChange={this.onSessionChange} onStateChange={this.onStateChange}/>
      : (( this.state.route==='home' || this.state.route==='homeav' || this.state.route==='payee' || this.state.route==='mine' || this.state.route==='mineav' || this.state.route==='save' || this.state.route==='saveav' || this.state.route==='trajet' || this.state.route==='mestrajet' || this.state.route==='compte' || this.state.route==='admincov' || this.state.route==='admintrajet') && ( this.state.session==='normal' || this.state.session==='admin'  ) 
         ?<Search onRouteChange={this.onRouteChange}  id={this.state.user.id} route={this.state.route} session={this.state.session} />
         :(this.state.route==='map' && ( this.state.session==='normal' || this.state.session==='admin')
         ?<LocationSearchModal/>
         :(this.state.route==='registrer' 
         ?<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
         :(this.state.route==='creecov' && ( this.state.session==='normal' || this.state.session==='admin')
          ?<Creecov userId={this.state.user.id} onRouteChange={this.onRouteChange} />
         :(this.state.route==='demandercov'  && ( this.state.session==='normal' || this.state.session==='admin')
          ?<Demandercov/> 
         :(this.state.route==='chat'  && ( this.state.session==='normal' || this.state.session==='admin')
          ?<Router user={this.state.user}><Route path="/" exact component={Join} /><Route path="/chat" component={Chat} /></Router>
         :(this.state.route==='ques'  && ( this.state.session==='normal' || this.state.session==='admin')
          ?<Questions/>
         :(this.state.route==='about' && ( this.state.session==='normal' || this.state.session==='admin')
            ?<About/>
         :(this.state.route==='profile' && ( this.state.session==='normal')
          ?<Profil user={this.state.user}/>
          :(this.state.session==='admin' && this.state.route==='ladmin'
            ?<Search id={this.state.user.id} route={this.state.route} session={this.state.session}/>
            :<div></div>)))))))))
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