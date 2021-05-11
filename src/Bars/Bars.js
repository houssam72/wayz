import React , { Component }from 'react';
import './Bars.css';
import img from './2121.jpg';
import newLogo from './212.png';


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
                        <li className="li_img"><img src={img} alt="PDP" width="100%" className="img_pers" /></li>
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
                          <li className="li_img"><img src={img} alt="PDP" width="100%" className="img_pers" /></li>
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

            <div id="mySidenav" className="sidenav" style={{width :'330px',marginTop :"60px"}} >
                <a href='#' className="closebtn" onClick={()=>this.closeNav()}  >&times;</a>
                <a href='#' onClick={()=>this.props.onRouteChange('home')}>Home</a>
                  <a href='#' onClick={()=>this.props.onRouteChange('demandercov')}>Demander un covoiturage</a>
                <a href='#' onClick={()=>this.props.onRouteChange('creecov')}>Créer un covoiturage</a>
                <a href='#' onClick={()=>this.props.onRouteChange('map')}>Map</a>
                <a href='#' onClick={()=>this.props.onRouteChange('payee')}>Covoiturages enregistrer </a>
                <a href='#'>Mes Messages</a>
                <a href='#'>Contact</a>
                <div className="navbar_right">
                    <ul>
                        <li><a href='#' onClick={()=>this.props.onRouteChange('homep')}>Sign Out</a> </li>
                    </ul>

                </div>
            </div>
            </div>
        }
            </div>
        
);
}
}
export default Bars;
