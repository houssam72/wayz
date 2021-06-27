import React from 'react';
import Card from './Card';
import Trajet from './Trajet';
import Card1 from './Card1';
import Save from './saves';
import Save1 from './saves1';
import Mine from './mines';
import Mine1 from './mines1';
import MesTrajet from './MesTrajet';
import Admin from './admin';
const Cardlist=({robots,onPayment,route,payInfo,session,user,myId,onRouteChange})=>{

	const Cardcomponent1=robots.map((user,i)=>{
		return <Card key={i} 
		id={robots[i].userid} 
		myId={myId}
		onRouteChange={onRouteChange}
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
		onPayment={onPayment}
		/>
	})

	const Cardcomponent5=robots.map((user,i)=>{
		return <Card1 key={i} 
		id={robots[i].userid} 
		myId={myId}
		onRouteChange={onRouteChange}
		name={robots[i].name} 
		lastname={robots[i].lastname}
		number={robots[i].number}
		bagage={robots[i].bagage}
		position={robots[i].depart}
		typevehicule={robots[i].type_vehicule}
		nbrplacedispo={robots[i].nbr_place_dispo}
		confortvoiture={robots[i].confort_voiture}
		prix={robots[i].prix}
		rating={robots[i].rating}
		date={robots[i].date}
		onPayment={onPayment}
		/>
	})
		const Cardcomponent3=robots.map((user,i)=>{
		return <Save key={i} 
		id={robots[i].userid} 
		onRouteChange={onRouteChange}
		myId={myId}
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
		onPayment={onPayment}
		/>
	})
		const Cardcomponent7=robots.map((user,i)=>{
		return <Save1 key={i} 
		id={robots[i].userid} 
		onRouteChange={onRouteChange}
		myId={myId}
		name={robots[i].name} 
		lastname={robots[i].lastname}
		number={robots[i].number}
		rating={robots[i].rating}
		bagage={robots[i].bagage}
		position={robots[i].depart}
		typevehicule={robots[i].type_vehicule}
		nbrplacedispo={robots[i].nbr_place_dispo}
		confortvoiture={robots[i].confort_voiture}
		prix={robots[i].prix}
		date={robots[i].date}
		onPayment={onPayment}
		/>
	})
		const Cardcomponent4=robots.map((user,i)=>{
		return <Mine key={i} 
		id={robots[i].userid} 
		onRouteChange={onRouteChange}
		myId={myId}
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
		const Cardcomponent6=robots.map((user,i)=>{
		return <Mine1 key={i} 
		id={robots[i].userid} 
		onRouteChange={onRouteChange}
		myId={myId}
		name={robots[i].name} 
		lastname={robots[i].lastname}
		number={robots[i].number}
		bagage={robots[i].bagage}
		position={robots[i].depart}
		typevehicule={robots[i].type_vehicule}
		nbrplacedispo={robots[i].nbr_place_dispo}
		confortvoiture={robots[i].confort_voiture}
		prix={robots[i].prix}
		date={robots[i].date}
		onPayment={onPayment}/>
	})

	const Cardcomponent2=[];
	    robots.forEach((user,i)=>{
		for(var j=0;j<payInfo.length;j++){
		
		if(payInfo[j].payment===true && payInfo[j].id===robots[i].id){
		Cardcomponent2.push(<Card key={i} 
		id={robots[i].userid} 
		onRouteChange={onRouteChange}
		myId={myId}
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

	    const Cardcomponent8=robots.map((user,i)=>{
		return <Trajet key={i} 
		id={robots[i].userid} 
		myId={myId}
		onRouteChange={onRouteChange}
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
		onPayment={onPayment}
		/>
	})
const Cardcomponent9=robots.map((user,i)=>{
		return <MesTrajet key={i} 
		id={robots[i].userid} 
		onRouteChange={onRouteChange}
		myId={myId}
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

	const admin=robots.map((user,i)=>{
		return <Admin key={i} 
		id={robots[i].id} 
		onRouteChange={onRouteChange}
		name={robots[i].name} 
		lastname={robots[i].lastname}
		email={robots[i].email}
		number={robots[i].number}
		typevehicule={robots[i].type_vehicule}
		confortvoiture={robots[i].confort_voiture}
		rating={robots[i].rating}
		onPayment={onPayment}/>
	})



if( (route==='home' ) && (session==='normal' || session==='admin'))
{
	return (

		<div>
	
			{Cardcomponent1}
		</div>);
}
else if(route==='payee' && (session==='normal' || session==='admin')){
	return(
		<div>
  			{Cardcomponent2}
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
else if(route==='homeav' && (session==='normal' || session==='admin')){
	return(
		<div>
  			{Cardcomponent5}
		</div>
);
}
else if(route==='mineav' && (session==='normal' || session==='admin')){
	return(
		<div>
  			{Cardcomponent6}
		</div>
);
}
else if(route==='saveav' && (session==='normal' || session==='admin')){
	return(
		<div>
  			{Cardcomponent7}
		</div>
);
}
else if(route==='trajet' && (session==='normal' || session==='admin')){
	return(
		<div>
  			{Cardcomponent8}
		</div>
);
}
else if(route==='mestrajet' && (session==='normal' || session==='admin')){
	return(
		<div>
  			{Cardcomponent9}
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