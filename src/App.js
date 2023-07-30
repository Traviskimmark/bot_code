
import React, { useState, useEffect } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import './App.css'; 

function App() {
  const [availableBots, setAvailableBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setAvailableBots(data));
  }, []);

  const handleEnlistBot = (bot) => {
    if (!enlistedBots.find((item) => item.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const handleReleaseBot = (bot) => {
    const updatedEnlistedBots = enlistedBots.filter((item) => item.id !== bot.id);
    setEnlistedBots(updatedEnlistedBots);
  };

  return (
    <div className="app-container">
      <YourBotArmy enlistedBots={enlistedBots} handleReleaseBot={handleReleaseBot} />
      <BotCollection availableBots={availableBots} handleEnlistBot={handleEnlistBot} />
    </div>
  );
}

export default App;
