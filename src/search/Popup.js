import React , {Component} from 'react';
import './Popup.css';



class Popup extends Component{

	constructor(){
  super();
  this.state={
    choice:1
    
  }
}

onArriveChange=(event)=>{
    this.setState({choice:event.target.value})
    
  }


onSubmitClick=()=>{
    fetch('http://localhost:3001/rating',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         id:this.props.id,
         value:this.state.choice
       })
    })
    .then(response=>response.json())
    .then(user=>{
      
      this.props.setTrigger(false)
        this.props.onRouteChange('map')  ;

           
    })
}

    render(){
  const props=this.props;
	return (props.trigger) ? (
		<div className='popup'>
			<div className='popup-inner'>
				{props.children}
				<div class="rate">
				    <input type="radio" id="star5" name="rate" value="5" onChange={this.onArriveChange}/>
				    <label for="star5" title="text">5 stars</label>
				    <input type="radio" id="star4" name="rate" value="4" onChange={this.onArriveChange}/>
				    <label for="star4" title="text">4 stars</label>
				    <input type="radio" id="star3" name="rate" value="3" onChange={this.onArriveChange}/>
				    <label for="star3" title="text">3 stars</label>
				    <input type="radio" id="star2" name="rate" value="2" onChange={this.onArriveChange}/>
				    <label for="star2" title="text">2 stars</label>
				    <input type="radio" id="star1" name="rate" value="1" onChange={this.onArriveChange}/>
				    <label for="star1" title="text">1 star</label>
				</div>
				<button className="bt br4 ph3 pv1  ba black  grow pointer " onClick={()=>this.onSubmitClick()} >Valider</button>
				<button className="bt br4 ph3 pv1  ba black  grow pointer " onClick={() => props.setTrigger(false)}>Annuler</button>
			</div>
		</div>



	) : "";
}
}

export default Popup;