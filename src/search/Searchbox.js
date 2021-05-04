import React from 'react';


const Searchbox=({ searchfield , onSearchchange }) =>{
  return (
  	<div className='pa2 mb5'>
    <input  
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Lieu de depart'
            onChange={onSearchchange}
    />
    <input  
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder="Lieu d'arrivée"
            onChange={onSearchchange}
    />
    <input type='date' className='date_depart pa2 ba b--green bg-lightest-blue'  />
  
    </div>        
  	);
}
export default Searchbox;