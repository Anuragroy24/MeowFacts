import React, { useState } from 'react';
import './App.css';

function App() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    setFact('');
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact('Failed to fetch fact. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <img src="/kitty.png" alt="Cute Cat" className="cat-image" />

      <h1>Random Cat Fact</h1>
      <button onClick={fetchFact}>Get a Fact</button>

      {loading ? (
        <div className="loader"></div>
      ) : (
        fact && <p>{fact}</p>
      )}
    </div>
  );
}

export default App;
