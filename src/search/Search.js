import React,{Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import {users} from './robots';
 

class Search extends Component{

  constructor(){
    super()
    this.state={
    	robots: [],
    	searchfield:''
    }

  }

  componentDidMount(){
  this.setState({robots:users})
  	
  }
  
onSearchchange = (event) => {
	this.setState({searchfield: event.target.value })
}


	render(){
		const filterrobots=this.state.robots.filter(robots =>{
		return robots.depart.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})
  if (this.state.robots.length === 0) {
    return <h1> LOADING ... </h1>
  } else {
  return(
  	 <div className='tc'>
  	   
      <Searchbox searchchange={this.onSearchchange}/>
      <Cardlist robots={filterrobots}/>
     
     </div>
  	);
}
  }
}
export default Search;