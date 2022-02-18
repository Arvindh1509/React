import { SwipeableDrawer } from '@mui/material'
import React, { useState } from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card"

function TinderCards() {
    const[people, setPeople]=useState([
        {
            name:"a.r.rahman",
            url:"https://i.scdn.co/image/ab6761610000e5ebb19af0ea736c6228d6eb539c"
        },
        {
            name:"Cristiano ronaldo",
            url:"https://www.india.com/wp-content/uploads/2021/11/Cristiano-Ronaldo.jpg"
        },
    ]);
    const swiped=(direction,nameToDelete)=>{
        console.log("removing "+ nameToDelete);
    };

    const outOfFrame=(name)=>{
        console.log(name+"left the screen");
    };
    
    return (
        <div className='tindercards'>
            <div className='tindercards_containercard'>
                {people.map((person)=>(
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up",'down']}
                        onSwipe={(dir)=>swiped(dir,person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}
                        >
<div style={{backgroundImage:"url("+person.url+")"}}
className='card'>
<h3>{person.name}</h3>
</div>

                    </TinderCard>
                ))}

            </div>
            
        </div>
    )
}

export default TinderCards 
