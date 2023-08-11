import React from 'react';
import '../styles/contact.css';
import { Link } from 'react-router-dom'
import Banni from '../images/banner_profil.png';


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
            <img src={Banni} alt="images" style={{ maxWidth: '1567px', maxHeight:'600px' }} />


            </div>






            
        </div>
    );
}
