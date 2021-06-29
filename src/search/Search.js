import React,{Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
//import {users} from './robots';
import {user} from './user';
import moment from 'moment';
import {Info} from './pay';

class Search extends Component{

  

  constructor(){
    super()
    this.state={
      choice:'simple',
    	robots: [],
      mesRobots:[],
      saveRobots:[],
    	searchfield1:'',
      searchfield2:'',
      searchfield3:'',
      payInfo:Info
      
    }

  }

  componentDidMount(){

        fetch('http://localhost:3001/afficherSaveCovSimple',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         userId:this.props.id
       })
     })
       .then(response=>response.json())    
       .then(users=>{
             this.setState({saveRobots:users})
      
    })

        fetch('http://localhost:3001/covSimple',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id
       })
    })
    .then(response=>response.json())    
    .then(users=>{
      this.setState({robots:users})
      
    })


    fetch('http://localhost:3001/mescov',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id
       })
     })
       .then(response=>response.json())    
       .then(users=>{
             this.setState({mesRobots:users})
      
    })

       
    
  
  	
  }
  
onSearchchange1 = (event) => {
  
  this.setState({searchfield1: event.target.value });
}
onSearchchange2 = (event) => {
  this.setState({searchfield2: event.target.value });

}
onSearchchange3 = (event) => {
  this.setState({searchfield3: event.target.value });
 
}


onPayment=(x)=>{
    
 
  console.log(this.state.payInfo[0].payment);
  console.log(x.id);
}


  onChoiceChange1=(choice)=>{
    this.setState({choice:'simple'})
  }
  onChoiceChange2=(choice)=>{
    this.setState({choice:'avancee'})
  }

	render(){


		const filterrobots=this.state.robots.filter(robots =>{
		return (robots.depart.toLowerCase().includes(this.state.searchfield1.toLowerCase())
	         & robots.arrive.toLowerCase().includes(this.state.searchfield2.toLowerCase())
           & moment(robots.date).format("YYYY-MM-DD").includes(this.state.searchfield3)
            )
  })

      const filterrobots1=this.state.mesRobots.filter(robots =>{
    return (robots.depart.toLowerCase().includes(this.state.searchfield1.toLowerCase())
           & robots.arrive.toLowerCase().includes(this.state.searchfield2.toLowerCase())
           & moment(robots.date).format("YYYY-MM-DD").includes(this.state.searchfield3)
            )
  })  

      const filterrobots2=this.state.saveRobots.filter(robots =>{
    return (robots.depart.toLowerCase().includes(this.state.searchfield1.toLowerCase())
           & robots.arrive.toLowerCase().includes(this.state.searchfield2.toLowerCase())
           & moment(robots.date).format("YYYY-MM-DD").includes(this.state.searchfield3)
            )
  })  
  if (this.state.robots.length === 0) {
    return <h1> LOADING ... </h1>
  } else if(this.props.route==='home' || this.props.route==='homeav' ){
  return(
  	 <div className='tc'>
  	  
      <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
      <div className="mt0 pa2 center bg-light-green fir_d   br3 ba  b--black-10 w-90 w-40-m w-20-l mw6 shadow-5 center div_creecov ">
          <div className="form_cree center w-100 w-50-m">
          
             <input type="radio" id="Simple" className="ml3" name="gender" value="Simple" onClick={()=>this.props.onRouteChange('home')}  />
             <label for="Simple" className="mr5">Simple</label><br/>
           
          
               <input  type="radio" id="Avancée" name="gender" value="Avancée" onClick={()=>this.props.onRouteChange('homeav')} />
               <label for="Avancée">Avancée</label><br/>
         
          </div>
        </div>
    {
        this.props.route==='home' ?
      <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={filterrobots} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />
     : 
     <div>
      <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={filterrobots} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />

     </div>
     }
     </div>
  	);
}else  if(this.props.route==='mine' || this.props.route==='mineav'){
  return(
   <div className='tc'>
      
      <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
         <div className="mt0 pa2 center bg-light-green fir_d   br3 ba  b--black-10 w-90 w-40-m w-20-l mw6 shadow-5 center div_creecov ">
          <div className="form_cree center w-100 w-50-m">
          
             <input type="radio" id="Simple" className="ml3" name="gender" value="Simple" onClick={()=>this.props.onRouteChange('mine')}  />
             <label for="Simple" className="mr5">Simple</label><br/>
           
          
               <input  type="radio" id="Avancée" name="gender" value="Avancée" onClick={()=>this.props.onRouteChange('mineav')} />
               <label for="Avancée">Avancée</label><br/>
         
          </div>
        </div>
    {
        this.props.route==='mine' ?
      <Cardlist onRouteChange={this.props.onRouteChange}   myId={this.props.id} robots={filterrobots1} user={user} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />
     :
     <div>
      <Cardlist onRouteChange={this.props.onRouteChange}   myId={this.props.id} robots={filterrobots1} user={user} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />

     </div>
     }
     </div>
     );
}else if( (this.props.route==='save'  )  || this.props.route==='saveav'){
      return(
   <div className='tc'>
      
     
      
      <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
     <div className="mt0 pa2 center bg-light-green fir_d   br3 ba  b--black-10 w-90 w-40-m w-20-l mw6 shadow-5 center div_creecov ">
          <div className="form_cree center w-100 w-50-m">
          
             <input type="radio" id="Simple" className="ml3" name="gender" value="Simple" onClick={()=>this.props.onRouteChange('save')}  />
             <label for="Simple" className="mr5">Simple</label><br/>
           
          
               <input  type="radio" id="Avancée" name="gender" value="Avancée" onClick={()=>this.props.onRouteChange('saveav')}  />
               <label for="Avancée">Avancée</label><br/>
         
          </div>
        </div>
    {
        this.props.route==='save' ?
      <Cardlist  onRouteChange={this.props.onRouteChange}   myId={this.props.id} robots={filterrobots1} user={user} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />
     : 
     <div>
      <Cardlist  onRouteChange={this.props.onRouteChange}   myId={this.props.id} robots={filterrobots1} user={user} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />

     </div>
     }
     </div>
     );
}
else if(this.props.route==='trajet'){
  return(
    <div className='tc'>
           <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
           <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={filterrobots} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />
 
     </div>
    );
}
else if(this.props.route==='mestrajet'){
  return(
    <div className='tc'>
           <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
           <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={filterrobots} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />
 
     </div>
    );
}
else if(this.props.route==='compte'){
  return(
    <div className='tc'>
            <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={filterrobots} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />

     </div>
    );
}
else if(this.props.route==='admincov'){
  return(
    <div className='tc'>
           <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
            <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={filterrobots} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />

     </div>
    );
}
else if(this.props.route==='admintrajet'){
  return(
    <div className='tc'>
           <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
           <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={filterrobots} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />

     </div>
    );
}

  }
}

export default Search;