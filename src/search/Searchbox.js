import React from 'react';


const Searchbox=({  searchchange1,searchchange2,searchchange3}) =>{
  return (
  	<div className='pa2 mb5'>
    <input  
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Lieu de depart'
            onChange={searchchange1}
    />
    <input  
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder="Lieu d'arrivée"
            onChange={searchchange2}
    />
    <input type='date' 
           className='date_depart pa2 ba b--green bg-lightest-blue'  
           onChange={searchchange3}
    />
  
    </div>        
  	);
}
export default Searchbox;