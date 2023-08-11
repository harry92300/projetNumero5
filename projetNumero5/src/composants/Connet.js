import React from 'react';
import { Link } from 'react-router-dom'; // Assurez-vous d'importer Link
import '../styles/connet.css';
import Connecy from '../images/fd_connexion.jpg';

export default function Connet() {
  return (
    <div>
      <ul className="nav-links2">
        <li><h1>Connectify</h1></li>
        <li><Link to='/' className="link yellow-link" >Accueil</Link></li>
        <li><Link to='/connexion' className="link" >Connexion</Link></li>
        <li><Link to='/inscription' className="link" >Inscription</Link></li>
      </ul>

      <div className="bloks2">
        <img src={Connecy} alt="images" style={{ maxWidth: '750px' }} />
        
        <div id="container">
          <form >
            <h2 className='mop'>Connexion</h2>
            
            <label><b>Nom d'utilisateur</b></label>
            <input type="text" placeholder="Entrez votre email..." name="username" required />

            <label><b>Mot de passe</b></label>
            <input type="password" placeholder="Entrez votre mot de passe..." name="password" required />

            <Link to="/Contact"><input type="submit" id='submit' value='Se Connecter' /></Link>
        
          </form>
          <p className="inscription-link">Pas de compte ? <Link to="/inscription">Inscrivez-vous</Link></p>
        </div>
      </div>

      <footer>
        <div className="foot">
          <p className="footer">© 2023 Connectify. Tous Droits Réservés.</p>
        </div>
      </footer>
    </div>
  );
}
