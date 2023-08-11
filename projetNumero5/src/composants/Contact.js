import React from 'react';
import '../styles/contact.css';
import { Link } from 'react-router-dom'
import Banni from '../images/banner_profil.png';
import hello from '../images/Ellipse 1.png'
import Homer from '../images/homer 1.jpg'
import Yellow from '../images/pexels-sound-on-3755913.jpg'
import Cdm from '../images/pexels-matthias-groeneveld-4200745.jpg'
import Voyage from '../images/pexels-kampus-production-5935232.jpg'
import Frede from '../images/fd_qsn.jpg'

export default function Contact() {
    return (
        <div>
            <ul className="nav-links4">
        <li><h1>Connectify</h1></li>
        <li><Link to='/' className="link yellow-link" >Profil</Link></li>
        <li><Link to='/connexion' className="link" >Contact</Link></li>
        <li><Link to='/inscription' className="link" >Déconnexion</Link></li>
            </ul>

            
        
            <div className="bannie">
    <div className="image-container">
        <img src={Banni} alt="images" style={{ maxWidth: '1567px', maxHeight:'600px' }} />
    </div>
    
    <div className="nexban">
        <img src={hello} alt='nexime'/>
        
            <h1 className='nom'>Nom</h1>
            <h2 className='prenom'>Prénom</h2>
    </div>
</div>
<div className='classique' >
    <h3 className='firs'>My Walls</h3>
    <div className='displa'>

    <div id="main">
 <div id="menu">
 <ul class="vertical-list">
 <li><Link to="/">ALL</Link></li>
      <li><Link to="/walls">Walls</Link></li>
      <li><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/video">Video</Link></li>
      <li><Link to="/music">Music</Link></li>
  </ul>
 </div>

 <div id="contenu">
  <p className='rapps'>Le Rap US Rap FR</p>
  <img src={Homer} alt='nexime'/>
  <p className='little' >J’aime le classique...</p>
  <div id="footer">
  <input className='typer' type="text" placeholder="Entrez votre nom..." name="nom" required />
</div>
 </div>
 
</div>


    </div>

<h4 className='asd'>Gallery</h4>
<div className='fourpx'>
<img src={Yellow} alt='nexime' width="401" height="404" />
<img src={Cdm} alt='nexime' width="401" height="404" />
<img src={Voyage} alt='nexime' width="401" height="404" />
<img src={Frede} alt='nexime' width="401" height="404" />
</div>

</div>






            
        </div>
    );
}
