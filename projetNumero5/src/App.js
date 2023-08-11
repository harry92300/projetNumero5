import Header from './composants/Header.js';
import Connet from './composants/Connet.js';
import Inscription from './composants/Inscription.js'
import Contact from './composants/Contact.js'; // Assurez-vous de fournir le bon chemin
import { Routes, Route } from 'react-router-dom'; // Importez les éléments de routage

function App() {
  return (
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Connexion" element={<Connet />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
  );
}

export default App;
