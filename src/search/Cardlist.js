import React from 'react';
import Card from './Card';
const Cardlist=({robots})=>{
	const Cardcomponent=robots.map((user,i)=>{
		return <Card key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email}/>
	})
	return (
		<div>
  {Cardcomponent};
    </div>);
}

export default Cardlist;