import React from 'react'
import '../App.css'

function NavBar(){
    return (
        <div className='navBar'>
            <button className='rvwButt'>Click me to write a review!</button>
            <button className='profButt'>User Profile</button>
        </div>
    )
}

export {NavBar};