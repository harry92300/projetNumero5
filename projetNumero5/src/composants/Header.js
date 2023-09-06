import '../styles/header.css';
import Video from '../images/fd_accueil.mp4';
import Pellicule from '../images/fd_actualite.jpg';
import Pelliculex from '../images/fd_qsn.jpg';
import NewPellicule from '../images/fd_contact.jpg'
import { Link } from 'react-router-dom'



export default function Header() {
  return (
    <div className='divun'>
      <ul className="nav-links">
        <li><h1>Connectify</h1></li>
        <li><Link to='/' className="link yellow-link" >Accueil</Link></li>
        <li><Link to= '/Connexion' className="link" >Connexion</Link></li>
        <li><Link to='/Inscription' className="link" >Inscription</Link></li>
      </ul>



        
      <div className="video-container">
        <h2 className="video-title">Connectify</h2>
        <video src={Video} autoPlay loop muted playsInlinel />
      </div>

      <div className="video-container-x"> 
        <h3 className="video-titlex">Bienvenue</h3>
        <p className="ligne">"Harmonisez vos passions, partagez vos émotions avec Connectify!"</p>
        
      </div>




      <div className="bloks">
        <img src={Pellicule} alt="Pellicule" style={{ maxWidth: '700px' }} />
        
        <p className="lignex"><h4>Actualité</h4>Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres. Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify. Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.</p>
      </div>

      <div className="bloksx">
        <p className="lignex"><h5>Qui sommes nous?</h5>Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier. 
        Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.</p>
        <img src={Pelliculex} alt="Pelliculex" style={{ maxWidth: '770px', maxHeight: '760px' }} />
      </div>


      <div className="newBloks">
        <img src={NewPellicule} alt="NewPellicule" style={{ maxWidth: '700px' }} />
        

        <section class="contact">
          <h6>Nous contacter </h6>
          <div class="contactx">
          
            <form action="#">
              <label for="name">Nom :</label>
              <input type="text" name="name" id="name"></input>
              <label for="email">Email :</label>
              <input type="email" name="email" id="email"></input>

              <label for="subject">Message :</label>
              <label for="message"></label>
              <textarea name="message" id="message" cols="70" rows="15"></textarea>
            </form>

            <button id="valider">Valider</button>
          </div>
        </section>
      </div>
      <div className="new">
        <div className="bloque"> 
          <h2 className="titrex">Newsletter</h2>Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Connectify !
          <form action="#">
            <label className="look" for="li" ></label>
            <input type="email" name="email" id="email"></input>
          </form>
          <button id="valider">Valider</button>
        </div>
      </div>

      <footer>
        <div class="foot">
        <p className="footer">© 2023 Connectify. Tous Droits Réservés.</p>
        </div>
      </footer>
    </div>
    
  );
}
