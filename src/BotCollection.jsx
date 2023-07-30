
import React from 'react';
import BotCard from './BotCard';

function BotCollection({ availableBots, handleEnlistBot }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="grid-container">
        {availableBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} buttonText="Add Bot" handleClick={handleEnlistBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
