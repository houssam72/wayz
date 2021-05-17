import React from 'react';
import {   Marker,InfoWindow } from "react-google-maps";
import {loc} from './loc';
import car2 from './car2.png';
import carb from './carb.png';
import moto from './moto.png';
import motob from './motob.png';

const Cardlist1=({handleToggleOpen,isOpen,indexOpen,google,typeV,typeR})=>{
    
	const Cardcomponent1=loc.map((user,i)=>{
		let x=car2;
		if(loc[i].action==='voiture' && loc[i].type==='zone'){x=car2}
		if(loc[i].action==='voiture' && loc[i].type==='route'){x=carb}
		if(loc[i].action==='moto' && loc[i].type==='zone'){x=moto}
		if(loc[i].action==='moto' && loc[i].type==='route'){x=motob}	
		if(typeV.includes(loc[i].action))
		if(typeR.includes(loc[i].type))
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
                         
                            <div>
                                <span style={{ padding: 0, margin: 0 }}>raja</span>
                            </div>
                        </InfoWindow>)}
                    </Marker>
	})

	return <div> {Cardcomponent1} </div>

}


export default Cardlist1;