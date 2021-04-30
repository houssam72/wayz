import React , { Component }from 'react';
import './Bars.css';
import img from './2121.jpg';


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
            <div class="navbar navbar1">
                <div class="navbar_left">
                    
                    <ul  class="menu">
                        <li class="li_img"><img src={img} alt="PDP" width="100%" class="img_pers" /></li>
                        <li>
                            <div class="dropdown">
                              <button class="dropbtn"> &or; </button>
                                  <div class="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                  </div>
                            </div>
                        </li>

                    </ul>

                </div>
                <span  style={{cursor:'pointer'}} onClick={()=>this.openNav()} >&#9776;</span>
            </div>
        

:
<div>
  <div class="navbar navbar1">
                <div class="navbar_left">
                    
                    <ul  class="menu">
                          <li class="li_img"><img src={img} alt="PDP" width="100%" class="img_pers" /></li>
                        <li>
                            <div class="dropdown">
                              <button class="dropbtn"> &or; </button>
                                  <div class="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                  </div>
                            </div>
                        </li>

                    </ul>

                </div>
                <span style={{cursor:'pointer'}} onClick={()=>this.closeNav()} >&#9776;</span>
            </div>

            <div id="mySidenav" class="sidenav" style={{width :'350px',marginTop :"60px"}} >
                <a href='#' class="closebtn" onClick={()=>this.closeNav()}  >&times;</a>
                <a href='#'>Home</a>
                <a href='#'>Creer un covoiturage</a>
                <a href='#'>Mes Messages</a>
                <a href='#'>Contact</a>
                <div class="navbar_right">
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
