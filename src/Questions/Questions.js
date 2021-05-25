import React,{Component} from 'react';

class Questions extends Component {
	render(){
		return(
			<div className="bg-light-green br3 ba  b--black-10 mv4 w-70 shadow-5 center ph2" style={{marginTop:'-7%'}}>
			<h1>Les questions les plus posées sur le Covoiturage?</h1>
			<h3>Définition</h3>
			<div className='f4'>Nous proposons de mettre en contact conducteurs et passagers pour partager un véhicule le temps d'un voyage déterminé. Le covoiturage peut s'effectuer entre le domicile et le lieu de travail (périphérie/centre ville par exemple) ou d'une ville à l'autre. Il s'adresse à tous les automobilistes qui souhaitent rouler autrement.</div>
			<br/><br/>
			<h3>Les Valeurs du covoiturage</h3>
			<br/>
			<div>
				<h4>Covoiturage = La solidarité et le lien social</h4>
				<p className='f4'>En proposant votre véhicule vous permettez à des personnes qui n'en possèdent pas de se rendre par exemple sur leur lieu de travail. Covoiturer c'est aussi rencontrer votre voisin ou celui qui travaille à deux pas de votre entreprise et que vous croisiez tous les matins dans votre voiture.</p>
				<h4>Covoiturage = respect de l'environnement</h4>
				<p className='f4'>Le vehicule personnel est l'un de principaux responsables des émissions de CO2 dans l'atmosphère. En covoiturant vous faites diminuer le nombre de véhicules sur les routes et vous participez ainsi à la protection de votre environnement.</p>
			</div>
			<br/><br/>
			<h3>Combien me coûte ma voiture ?</h3>
			<div className='f4'>Evaluer le coût d'un véhicule est souvent difficile pour un particulier. La majorité des personnes interrogées confondent le coût d'utilisation d'un véhicule (essence, péage, parking) et le coût réel qui prend en compte les réparations, l'assurance, la décote du véhicule....Le coût mensuel moyen de votre véhicule selon le modèle varie entre 3000 et 4500 DH.</div>
			<br/><br/>
			<h3>Combien j'économise en covoiturant ?</h3>
			<div className='f4'>Nous prenons comme base un prix de revient kilométrique de 2 DH / km. Ce prix est inférieur au barème kilométrique le plus faible retenu par les impôts. Nous allons donc calculer l'économie minimum réalisée.<br/>

				Sur un trajet de 30 km, le coût d'un aller et retour est de
				30 X 2 X 2 = 120 DH<br/>
				Multiplions ce coût par le nombre de jours travaillés sur une année soit 220.<br/>
				Coût annuel : 220 X 120 = 26 400 DH<br/>
				Si deux autres personnes décident de se joindre à moi pour covoiturer et que nous utilisons à tour de rôle le véhicule de chacun, le coût de revient annuel est divisé par trois, soit 26 400 / 3 = 8 800 DH.<br/>
				L'économie est donc de 26 400 - 8 800 = 17 600 DH.
			</div>
			<br/><br/>
			<h3>Combien j'économise de CO2 ?</h3>
			<div className='f4'>Une voiture rejette environ 160 g de CO2 par km parcouru. Sur une distance de 30 km, et pour 220 jours de travail, une voiture émet donc chaque année dans l'atmosphère<br/>
				 30 X 2 X 220 X 0.16 = 2 112 kg de CO2.<br/>
				 Covoiturer, c'est réduire de 4 tonnes l'émission de CO2 dans l'atmosphère.
			</div><br/><br/>
			</div>

			);
	}
}
export default Questions;