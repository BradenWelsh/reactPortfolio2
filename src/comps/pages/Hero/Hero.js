import React from 'react'; 
import './hero.css'
import '../../../App.css'

const Hero = () => {
    return(
        <div className='heroContainer'>
            <video src='/video/hero2.mp4' type='video/mp4/' autoPlay loop muted/>
            <h5>Hello!</h5>
            <h1>I'm Braden Welsh</h1>
            <p>| Junior Web Developer | Content Creator |</p>
        </div>
    )
}

export default Hero;