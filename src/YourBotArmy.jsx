import React from 'react'

function YourBotArmy({data}) {
  return (
    <div>
        {data.map((item)=>{
return(
    
    <div key={item.id}>
<img src={item.avatar_url} />
<p>Name: {item.name}</p>
<p>Damage:{item.damage}</p>
<p>Armor: {item.armor}</p>
<p>Bot_class: {item.bot_class}</p>

    </div>
)

        })}

    </div>
  )
}

export default YourBotArmy
