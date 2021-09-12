import React , { Component }from 'react';
import './Bars.css';
import img from './2121.jpg';
import newLogo from './212.png';
import { Link } from "react-router-dom";


  /*function openNav() {
  document.getElementById("mySidenav").style.width ="350px";
  document.getElementById("mySidenav").style.marginTop = "60px"
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}*/

class Bars extends Component {

     constructor(){
    super();
    this.state={
    brktebutton:false
    
  }
}
openNav(){
    this.setState({brktebutton:true});
    
}
closeNav(){
    this.setState({brktebutton:false});
    

}


    render(){
    return(
  <div>
       {this.state.brktebutton===false
        ?
            <div className="navbar navbar1">
                <div className="navbar_left">
                    
                    <ul  className="menu">
                    {
                      (this.props.route==='profile' 
                        ? <> <li className="li_img"><a href='#' onClick={()=>this.props.onRouteChange('home')} style={{}} className="apdp"><img src={`user${this.props.user.id}.jpg`} alt="PDP" width="100%" className="img_pers" /></a></li></> 
                        :  <li className="li_img"><a href='#' onClick={()=>this.props.onRouteChange('profile')} style={{}} className="apdp"><img src={`user${this.props.user.id}.jpg`} alt="PDP" width="100%" className="img_pers" /></a></li> )
                    }
                        <li>
                            <div className="dropdown">
                              <button className="dropbtn white"> ▾ </button>
                                  <div className="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                  </div>
                            </div>
                        </li>

                    </ul>

                </div>
                <span  style={{cursor:'pointer'}} onClick={()=>this.openNav()} className="white" >&#9776;</span>
            </div>
        

:
<div>
  <div className="navbar navbar1">
                <div className="navbar_left">
                    
                    <ul  className="menu">
                          <li className="li_img"><img src={`user${this.props.user.id}.jpg`} alt="PDP" width="100%" className="img_pers" /></li>
                        <li>
                            <div className="dropdown">
                              <button className="dropbtn white"> ▾ </button>
                                  <div className="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                  </div>
                            </div>
                        </li>

                    </ul>

                </div>
                <span style={{cursor:'pointer'}} onClick={()=>this.closeNav()} className="white">&#9776;</span>
            </div>
   { (this.props.user.name==='admin' && this.props.user.name==='admin' )
   ?
            <div id="mySidenav" className="sidenav" style={{width :'330px',marginTop :"60px"}} >
                <a href='#' className="closebtn" onClick={()=>this.closeNav()}  >&times;</a>
                <a href='#' onClick={()=>this.props.onRouteChange('compte')}>Les comptes</a>
                <a href='#' onClick={()=>this.props.onRouteChange('admincov')}>Les covoiturages</a>
                <a href='#' onClick={()=>this.props.onRouteChange('admintrajet')}>Les trajets</a>
                <a href='#' onClick={()=>this.props.onRouteChange('map')}>Carte</a>
                {this.props.session==='admin' ? <a href='#' onClick={()=>this.props.onRouteChange('ladmin')}>Users List</a> : <></>}
                <div className="navbar_right">
                    <ul>
                 
                        <li><a href='#' onClick={()=>this.props.onRouteChange('homep')}>Sign Out</a> </li>
                    </ul>

                </div>
            </div>
    :      <div id="mySidenav" className="sidenav" style={{width :'330px',marginTop :"60px"}} >
                <a href='#' className="closebtn" onClick={()=>this.closeNav()}  >&times;</a>
                <a href='#' onClick={()=>this.props.onRouteChange('home')}>Home</a>
                <a href='#' onClick={()=>this.props.onRouteChange('trajet')}>Trajet Demandés</a>
                <a href='#' onClick={()=>this.props.onRouteChange('demandercov')}>Demander un trajet</a>
                <a href='#' onClick={()=>this.props.onRouteChange('creecov')}>Créer un covoiturage</a>
                <a href='#' onClick={()=>this.props.onRouteChange('map')}>Carte</a>
                <a href='#' onClick={()=>this.props.onRouteChange('save')}>Mes enregistrements </a>
                <a href='#' onClick={()=>this.props.onRouteChange('mine')}>Mes covoiturages</a>
                <a href='#' onClick={()=>this.props.onRouteChange('mestrajet')}>Mes Trajets</a>
                <a href='#' onClick={()=>this.props.onRouteChange('chat')}>Mes Messages</a>                
                <a href='#' onClick={()=>this.props.onRouteChange('ques')}>Top Questions</a>
                <a href='#' onClick={()=>this.props.onRouteChange('about')}>About</a>
                {this.props.session==='admin' ? <a href='#' onClick={()=>this.props.onRouteChange('ladmin')}>Users List</a> : <></>}
                <div className="navbar_right">
                    <ul>
          
                        <li><a href='#' onClick={()=>this.props.onRouteChange('homep')}>Sign Out</a> </li>
                    </ul>

                </div>
            </div>   

        }
            </div>
        }
            </div>
        
);
}
}
export default Bars;