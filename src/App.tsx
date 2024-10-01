import React from 'react';
import Greeting from './Greeting'; // Importer le composant Greeting
import Counter from './Counter'; // Importer le composant Counter
import './App.css';

const App: React.FC = () => {
    return (
        <div>
            <h1>Bienvenue dans notre application!</h1>
            {/* Utiliser le composant Greeting avec une prop name */}
            <Greeting name="Alice" />
            {/* Utiliser le composant Counter */}
            <Counter />
        </div>
    );
};

export default App;
