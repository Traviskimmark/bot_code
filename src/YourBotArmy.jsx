
import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ enlistedBots, handleReleaseBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="grid-container">
        {enlistedBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} buttonText="Delete Bot" handleClick={handleReleaseBot} />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
