import '../styles/erreur.css'
import { Link } from 'react-router-dom'

export default function PageErreur() {
  return (
    <div className="error-page-container">
        <p id='error-message'>ERREUR 404</p>
        <p id='error-redirection'>Pour retourner à la page d'accueil<br/> <Link to='/'>Cliquez ici</Link></p>
        
    </div>
  )
}