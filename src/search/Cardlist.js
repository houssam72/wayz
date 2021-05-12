import React from 'react';
import Card from './Card';
const Cardlist=({robots,onPayment,route,payInfo})=>{

	const Cardcomponent1=robots.map((user,i)=>{
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
		ha={robots[i].heureArrivee}
		onPayment={onPayment}/>
	})

	const Cardcomponent2=[];
	    robots.forEach((user,i)=>{
		for(var j=0;j<payInfo.length;j++){
		
		if(payInfo[j].payment===true && payInfo[j].id===robots[i].id){
		Cardcomponent2.push(<Card key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email}
		number={robots[i].number}
		depart={robots[i].depart} 
		arrive={robots[i].arrive}
		prix={robots[i].prix}
		date={robots[i].date}
		hd={robots[i].heureDepart}
		ha={robots[i].heureArrivee}
		onPayment={onPayment}/>)}
	}

	}

	)



if(route==='home')
{
	return (

		<div>
	
			{Cardcomponent1};
		</div>);
}
else if(route==='payee'){
	return(
		<div>
  			{Cardcomponent2};
		</div>
);
} 

}

export default Cardlist;