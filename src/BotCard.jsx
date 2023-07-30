
import React from 'react';

function BotCard({ bot, buttonText, handleClick }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
      <p>Name: {bot.name}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Bot Class: {bot.bot_class}</p>
      <button onClick={() => handleClick(bot)}>{buttonText}</button>
    </div>
  );
}

export default BotCard;
