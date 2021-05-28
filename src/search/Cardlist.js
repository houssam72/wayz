import React from 'react';
import Card from './Card';
import Save from './saves';
import Mine from './mines';
import Admin from './admin';
const Cardlist=({robots,onPayment,route,payInfo,session,user})=>{

	const Cardcomponent1=robots.map((user,i)=>{
		return <Card key={i} 
		id={robots[i].userid} 
		name={robots[i].name} 
		lastname={robots[i].lastname}
		email={robots[i].email}
		number={robots[i].number}
		bagage={robots[i].bagage}
		depart={robots[i].depart}
		typevehicule={robots[i].type_vehicule}
		nbrplacedispo={robots[i].nbr_place_dispo}
		confortvoiture={robots[i].confort_voiture}
		arrive={robots[i].arrive}
		prix={robots[i].prix}
		rating={robots[i].rating}
		date={robots[i].date}
		hd={robots[i].heuredepart}
		ha={robots[i].heurearrivee}
		onPayment={onPayment}/>
	})
		const Cardcomponent3=robots.map((user,i)=>{
		return <Save key={i} 
		id={robots[i].userid} 
		name={robots[i].name} 
		lastname={robots[i].lastname}
		email={robots[i].email}
		number={robots[i].number}
		rating={robots[i].rating}
		bagage={robots[i].bagage}
		depart={robots[i].depart}
		typevehicule={robots[i].type_vehicule}
		nbrplacedispo={robots[i].nbr_place_dispo}
		confortvoiture={robots[i].confort_voiture}
		arrive={robots[i].arrive}
		prix={robots[i].prix}
		date={robots[i].date}
		hd={robots[i].heuredepart}
		ha={robots[i].heurearrivee}
		onPayment={onPayment}/>
	})
		const Cardcomponent4=robots.map((user,i)=>{
		return <Mine key={i} 
		id={robots[i].userid} 
		name={robots[i].name} 
		lastname={robots[i].lastname}
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
		hd={robots[i].heuredepart}
		ha={robots[i].heurearrivee}
		onPayment={onPayment}/>
	})

	const Cardcomponent2=[];
	    robots.forEach((user,i)=>{
		for(var j=0;j<payInfo.length;j++){
		
		if(payInfo[j].payment===true && payInfo[j].id===robots[i].id){
		Cardcomponent2.push(<Card key={i} 
		id={robots[i].userid} 
		name={robots[i].name} 
		lastname={robots[i].lastname}
		email={robots[i].email}
		number={robots[i].number}
		depart={robots[i].depart} 
		arrive={robots[i].arrive}
		prix={robots[i].prix}
		date={robots[i].date}
		hd={robots[i].heuredepart}
		ha={robots[i].heurearrivee}
		onPayment={onPayment}/>)}
	}

	}

	)


	const admin=robots.map((user,i)=>{
		return <Admin key={i} 
		id={robots[i].id} 
		name={robots[i].name} 
		lastname={robots[i].lastname}
		email={robots[i].email}
		number={robots[i].number}
		typevehicule={robots[i].type_vehicule}
		confortvoiture={robots[i].confort_voiture}
		rating={robots[i].rating}
		onPayment={onPayment}/>
	})



if(route==='home' && (session==='normal' || session==='admin'))
{
	return (

		<div>
	
			{Cardcomponent1}
		</div>);
}
else if(route==='payee' && (session==='normal' || session==='admin')){
	return(
		<div>
  			{Cardcomponent3}
		</div>
);
}
else if(route==='save' && (session==='normal' || session==='admin')){
	return(
		<div>
  			{Cardcomponent3}
		</div>
);
}
else if(route==='mine' && (session==='normal' || session==='admin')){
	return(
		<div>
  			{Cardcomponent4}
		</div>
);
}
else if(route==='ladmin' && (session==='admin' )){
	return(
		<div>
  			{admin}
		</div>
);
}


}

export default Cardlist;