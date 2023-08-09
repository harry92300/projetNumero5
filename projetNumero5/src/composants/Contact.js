import React from 'react';
import '../styles/contact.css';
import { Link } from 'react-router-dom'


export default function Contact() {
    return (
        <div>
            <ul className="nav-links3">
        <li><h1>Connectify</h1></li>
        <li><Link to='/' className="link yellow-link" >Accueil</Link></li>
        <li><Link to='/connexion' className="link" >Profil</Link></li>
        <li><Link to='/inscription' className="link" >Inscription</Link></li>
            </ul>
        </div>
    );
}
