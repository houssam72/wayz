import React,{Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';

 

class Search extends Component{

  constructor(){
    super()
    this.state={
    	robots: [],
    	searchfield:''
    }

  }

  componentDidMount(){
  	fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({robots:users}))
  	
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