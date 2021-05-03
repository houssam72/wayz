import React,{Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import {robots} from './robots';
 

class Search extends Component{

  constructor(){
    super()
    this.state={
    	robots: [],
    	searchfield:''
    }

  }

  componentDidMount(){
  this.setState({robots:robots})
  	
  }
  
onSearchchange=(event) =>{
	this.setState({searchfield:event.target.value})
	
	
}


	render(){
		const filterrobots=this.state.robots.filter(robot=>{
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})
		console.log(filterrobots);
  return(
  	 <div className='tc'>
  	   
  	   <Searchbox searchchange={this.onSearchchange}/>
     
   <Cardlist robots={filterrobots}/>
     
     </div>
  	);
  }
}
export default Search;