import React from 'react';
import Card from './Card';
const Cardlist=({robots})=>{
	const Cardcomponent=robots.map((user,i)=>{
		return <Card key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email}
		number={robots[i].number}
		depart={robots[i].depart} 
		arrive={robots[i].arrive}
		prix={robots[i].prix}
		date={robots[i].date}
		hd={robots[i].heureDepart}
		ha={robots[i].heureArrivee}/>
	})
	return (
		<div>
  {Cardcomponent};
    </div>);
}

export default Cardlist;