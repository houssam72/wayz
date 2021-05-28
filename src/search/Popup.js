import React from 'react';
import './Popup.css';



function Popup(props) {
	return (props.trigger) ? (
		<div className='popup'>
			<div className='popup-inner'>
				{props.children}
				<div class="rate">
				    <input type="radio" id="star5" name="rate" value="5" />
				    <label for="star5" title="text">5 stars</label>
				    <input type="radio" id="star4" name="rate" value="4" />
				    <label for="star4" title="text">4 stars</label>
				    <input type="radio" id="star3" name="rate" value="3" />
				    <label for="star3" title="text">3 stars</label>
				    <input type="radio" id="star2" name="rate" value="2" />
				    <label for="star2" title="text">2 stars</label>
				    <input type="radio" id="star1" name="rate" value="1" />
				    <label for="star1" title="text">1 star</label>
				</div>
				<button className="bt br4 ph3 pv1  ba black  grow pointer ">Valider</button>
				<button className="bt br4 ph3 pv1  ba black  grow pointer " onClick={() => props.setTrigger(false)}>Annuler</button>
			</div>
		</div>



	) : "";
}

export default Popup;