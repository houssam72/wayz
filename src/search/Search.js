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
      robots1:[],
      mesRobots:[],
      mesRobots1:[],
      saveRobots:[],
      saveRobots1:[],
      trajet:[],
      mesTrajet:[],
      users:[],
    	searchfield1:'',
      searchfield2:'',
      searchfield3:'',
      payInfo:Info
      
    }

  }

  componentDidMount(){

        

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

      fetch('http://localhost:3001/covAvance',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id
       })
    })
    .then(response=>response.json())    
    .then(users=>{
      this.setState({robots1:users})
      
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

     fetch('http://localhost:3001/mesCovAvance',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id
       })
     })
       .then(response=>response.json())    
       .then(users=>{
             this.setState({mesRobots1:users})
      
    })

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

       fetch('http://localhost:3001/afficherSaveCovAvance',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         userId:this.props.id
       })
     })
       .then(response=>response.json())    
       .then(users=>{
             this.setState({saveRobots1:users})
      
    })
       
    fetch('http://localhost:3001/trajet',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id
       })
    })
    .then(response=>response.json())    
    .then(users=>{
      this.setState({trajet:users})
      
    })

    fetch('http://localhost:3001/mesTrajet',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id
       })
    })
    .then(response=>response.json())    
    .then(users=>{
      this.setState({mesTrajet:users})
      
    })

     fetch('http://localhost:3001/users',{
       method:'get'
       
    })
    .then(response=>response.json())    
    .then(users=>{
      this.setState({users:users})
      
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

      const filterrobots3=this.state.robots1.filter(robots =>{
    return (robots.state.toLowerCase().includes(this.state.searchfield1.toLowerCase())
           & moment(robots.date).format("YYYY-MM-DD").includes(this.state.searchfield3)
            )
  })

      const filterrobots4=this.state.mesRobots1.filter(robots =>{
    return (robots.state.toLowerCase().includes(this.state.searchfield1.toLowerCase())
           & moment(robots.date).format("YYYY-MM-DD").includes(this.state.searchfield3)
            )
  }) 

      const filterrobots5=this.state.saveRobots1.filter(robots =>{
    return (robots.state.toLowerCase().includes(this.state.searchfield1.toLowerCase())
           & moment(robots.date).format("YYYY-MM-DD").includes(this.state.searchfield3)
            )
  })  
 
    const filterrobots6=this.state.trajet.filter(robots =>{
    return (robots.depart.toLowerCase().includes(this.state.searchfield1.toLowerCase())
           & robots.arrive.toLowerCase().includes(this.state.searchfield2.toLowerCase())
           & moment(robots.date).format("YYYY-MM-DD").includes(this.state.searchfield3)
            )
  })

    const filterrobots7=this.state.mesTrajet.filter(robots =>{
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
      <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={filterrobots3} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />

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
      <Cardlist onRouteChange={this.props.onRouteChange}   myId={this.props.id} robots={filterrobots4} user={user} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />

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
      <Cardlist  user={this.props.user}  onRouteChange={this.props.onRouteChange}   myId={this.props.id} robots={filterrobots2} user={user} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />
     : 
     <div>
      <Cardlist user={this.props.user}  onRouteChange={this.props.onRouteChange}   myId={this.props.id} robots={filterrobots5} user={user} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />

     </div>
     }
     </div>
     );
}
else if(this.props.route==='trajet'){
  return(
    <div className='tc'>
           <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
           <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={filterrobots6} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />
 
     </div>
    );
}
else if(this.props.route==='mestrajet'){
  return(
    <div className='tc'>
           <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
           <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={filterrobots7} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />
 
     </div>
    );
}
else if(this.props.route==='compte' ){
  return(
    <div className='tc'>
            <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={this.state.users} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />

     </div>
    );
}
else if(this.props.route==='admincov' || this.props.route==='admincovav'){
  return(
    <div className='tc'>
           <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
           <div className="mt0 pa2 center bg-light-green fir_d   br3 ba  b--black-10 w-90 w-40-m w-20-l mw6 shadow-5 center div_creecov ">
          <div className="form_cree center w-100 w-50-m">
          
             <input type="radio" id="Simple" className="ml3" name="gender" value="Simple" onClick={()=>this.props.onRouteChange('admincov')}  />
             <label for="Simple" className="mr5">Simple</label><br/>
           
          
               <input  type="radio" id="Avancée" name="gender" value="Avancée" onClick={()=>this.props.onRouteChange('admincovav')}  />
               <label for="Avancée">Avancée</label><br/>
         
          </div>
        </div>
       {
        this.props.route==='admincov' ?   
            <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={filterrobots} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />
       :
       <div>
      <Cardlist onRouteChange={this.props.onRouteChange}   myId={this.props.id} robots={filterrobots3} user={user} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />

     </div>

     }
     </div>
    );
}
else if(this.props.route==='admintrajet'){
  return(
    <div className='tc'>
           <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
           <Cardlist onRouteChange={this.props.onRouteChange} myId={this.props.id} robots={filterrobots6} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />

     </div>
    );
}

  }
}

export default Search;