import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import './Searchbox.css'

const Searchbox=({  searchchange1,searchchange2,searchchange3}) =>{
  return (
  	<div className='pa2 mb5 div_searchbox'>
  
     <Autocomplete
                           className='pa3 ba b--green bg-lightest-blue'
                           onChange={searchchange1}
                            types={['(regions)']}
                            placeholder='Lieu de depart'
                        />
   
    <Autocomplete
                           className='pa3 ba b--green bg-lightest-blue'
                           onChange={searchchange2}
                            types={['(regions)']}
                            placeholder="Lieu d'arrivée"
                        />
    <input type='date' 
           className='date_depart pa2 ba b--green bg-lightest-blue'  
           onChange={searchchange3}
    />
  
    </div>        
  	);
}
export default Searchbox;