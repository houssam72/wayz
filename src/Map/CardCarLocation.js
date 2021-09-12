import React from 'react';
import {   Marker,InfoWindow } from "react-google-maps";
// import {loc} from './loc';
import car2 from './p_car_bleu.png';
import carb from './p_car_noir.png';
import moto from './p_moto_bleu.png';
import motob from './p_moto_noir.png';

const Cardlist1=({handleToggleOpen,isOpen,indexOpen,google,typeV,typeR,loc})=>{
    
	const Cardcomponent1=loc.map((user,i)=>{
		let x=car2;
		if(loc[i].type_vehicule==='voiture' ){x=car2}
		
		if(loc[i].type_vehicule==='moto' ){x=moto}
		
		if(typeV.includes(loc[i].type_vehicule))
		
		return  <Marker
                            key={i}
                            google={google}
                            name={'Dolores park'}
                            
                            position={{ lat: loc[i].lat, lng: loc[i].lng }}
                            
                             icon={{

                             
                                  url:x,
                                  scaledSize : new window.google.maps.Size(25,25 ),
    }}

        
                            
                         onClick={() => handleToggleOpen(i)}

        
                            
                        >
                       {isOpen && i===indexOpen &&( 
                        <InfoWindow
                            
                        >
                         
                            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'> 
     <img alt='robots' src={`user${loc[i].userid}.jpg`} className='img_user' style={{width:'50 %', height:'140px'}} />
       <div> 
     <h2> {loc[i].name} {loc[i].lastname}</h2> 
     <p className='underline pv1'>{loc[i].rating}/5 <img height="20px" src={'star.png'}/> </p>
     <p className='pv1'>Numero : <span className='b'>+212 {loc[i].number}</span></p>
     <p className='pv1'>Sexe : <span className='b'>{loc[i].sexe} </span></p>
     <p className='pv1'>Email : <span className='b'>{loc[i].email}</span></p>
     <p className='pv1'>ville : <span className='b'>{loc[i].state}</span></p>
     <p className='pv1'>confort voiture :<span className='b'>{loc[i].confort_voiture}</span></p>
     
       </div>
     

   </div>
                        </InfoWindow>)}
                    </Marker>
	})

	return <div> {Cardcomponent1} </div>

}


export default Cardlist1;