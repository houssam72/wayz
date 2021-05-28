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
    	robots: [],
      mesRobots:[],
    	searchfield1:'',
      searchfield2:'',
      searchfield3:'',
      payInfo:Info
      
    }

  }

  componentDidMount(){
        fetch('http://localhost:3001/covSimple',{
       method:'get',
       headers:{'Content-Type':'application/json'},
       
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
  if (this.state.robots.length === 0) {
    return <h1> LOADING ... </h1>
  } else if(this.props.route==='home'){
  return(
  	 <div className='tc'>
  	  
      <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
      <Cardlist robots={filterrobots} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />
     
     </div>
  	);
}else {
  return(
   <div className='tc'>
      
     
      
      <Searchbox searchchange1={this.onSearchchange1} searchchange2={this.onSearchchange2} searchchange3={this.onSearchchange3}/>
      <Cardlist  robots={filterrobots1} user={user} onPayment={this.onPayment} route={this.props.route} session={this.props.session} payInfo={this.state.payInfo} />
     
     </div>
     );
}
  }
}

export default Search;