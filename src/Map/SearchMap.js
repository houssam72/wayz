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

   </div>             
  	);
}
export default SearchMap;