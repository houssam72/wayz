import React from 'react';
import Card from './Card';
import Save from './saves';
import Mine from './mines';
const Cardlist=({robots,onPayment,route,payInfo})=>{

	const Cardcomponent1=robots.map((user,i)=>{
		return <Card key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email}
		number={robots[i].number}
		bagage={robots[i].bagage}
		depart={robots[i].depart}
		typevehicule={robots[i].type_vehicule}
		nbrplacedispo={robots[i].nbr_place_dispo}
		confortvoiture={robots[i].confort_voiture}
		arrive={robots[i].arrive}
		prix={robots[i].prix}
		date={robots[i].date}
		hd={robots[i].heureDepart}
		ha={robots[i].heureArrivee}
		onPayment={onPayment}/>
	})
		const Cardcomponent3=robots.map((user,i)=>{
		return <Save key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email}
		number={robots[i].number}
		bagage={robots[i].bagage}
		depart={robots[i].depart}
		typevehicule={robots[i].type_vehicule}
		nbrplacedispo={robots[i].nbr_place_dispo}
		confortvoiture={robots[i].confort_voiture}
		arrive={robots[i].arrive}
		prix={robots[i].prix}
		date={robots[i].date}
		hd={robots[i].heureDepart}
		ha={robots[i].heureArrivee}
		onPayment={onPayment}/>
	})
		const Cardcomponent4=robots.map((user,i)=>{
		return <Mine key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		email={robots[i].email}
		number={robots[i].number}
		bagage={robots[i].bagage}
		depart={robots[i].depart}
		typevehicule={robots[i].type_vehicule}
		nbrplacedispo={robots[i].nbr_place_dispo}
		confortvoiture={robots[i].confort_voiture}
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
	
			{Cardcomponent1}
		</div>);
}
else if(route==='payee'){
	return(
		<div>
  			{Cardcomponent3}
		</div>
);
}
else if(route==='save'){
	return(
		<div>
  			{Cardcomponent3}
		</div>
);
}
else if(route==='mine'){
	return(
		<div>
  			{Cardcomponent4}
		</div>
);
}


}

export default Cardlist;