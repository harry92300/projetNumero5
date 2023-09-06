import Header from './composants/Header.js';
import Connet from './composants/Connet.js';
import Inscription from './composants/Inscription.js'
import Contact from './composants/Contact.js'; 
import Erreur from './composants/Erreur.js'
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Connexion" element={<Connet />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Erreur/>}/>
      </Routes>
  );
}

export default App;
