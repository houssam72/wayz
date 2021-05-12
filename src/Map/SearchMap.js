import React from 'react';
import Autocomplete from 'react-google-autocomplete';

const SearchMap=({onPlaceSelected,onVchange,onRchange }) =>{
  return (
    <div>
  <Autocomplete
                             className='mb2 pa3 ba b--green bg-lightest-blue'
                            onPlaceSelected={onPlaceSelected}
                            types={['(regions)']}
                            placeholder='choisir un lieu'
                        /> 
<select 
          className='mb2 ml2 pa2 ba b--green bg-lightest-blue'
         onChange={onVchange}>
    <option value="" disabled selected>vehicule type</option>
    <option value="moto" >Moto</option>
    <option value="voiture">Voiture</option>
    <option value="motovoiture" >Les Deux</option>
</select>
<select 
         className='mb2 ml2 pa2 ba b--green bg-lightest-blue'
         onChange={onRchange}>
    <option value="" disabled selected>Covoiturage type</option>
    <option value="zone">Zone</option>
    <option value="route">Route</option>
    <option value="zoneroute">Les Deux</option>
</select>
   </div>             
  	);
}
export default SearchMap;