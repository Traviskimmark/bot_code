# Components
## App
The main component that handles the state and fetches data from the backend. It manages the enlisted bots and available bots.

## YourBotArmy
This component displays the enlisted bots in the user's army. It receives the enlistedBots array and handleReleaseBot function as props.

## BotCollection
This component displays the available bots that the user can enlist. It receives the availableBots array and handleEnlistBot function as props.

## BotCard
A reusable component that represents a single bot. It displays the bot's details and a button that triggers the enlist or release action based on the context.