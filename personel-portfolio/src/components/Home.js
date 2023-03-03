import React from 'react'
import {GitHub,Email,LinkedIn,Facebook,Instagram} from '@mui/icons-material'
import '../styles/Home.css'
function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi , My name is Archana</h2>
            <div className='prompt'>
                <p>A full-stack developer is a developer or engineer who can build both the front end and the back end of a website.</p>
                <GitHub/>
                <Email/>
                <LinkedIn/>
                <Facebook/>
                <Instagram/>
            </div>     
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'> 
                    <span>React JS,HTML,CSS,Javascript</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home