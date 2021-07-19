import React from 'react';
import '../../../App.css'
import './AboutMe.css'


function AboutMe() {
    return (
        <>
        <h1 className='aboutmeH1'>About Me</h1>
        <img className='meImg' src='/images/me.jpg'/>
        <p className='meBio'>
        My name is Braden Welsh, I am currently 19 years old, born April 20, 2002. I currently work at Wal-Mart and am a part time student at Trilogy Coding Bootcamp through UT Austin working my way towards getting a certificate to become a Full-Stack Web Developer.
        I took 1 year of computer science in High School and learned a little bit of Java. I made games like Asteroids, Pong, Cookie Clicker, Rock Paper Scissors, and more easy games like that. In the future I am hoping to be a Full-Stack Web Developer 
        because I really enjoy Web Development. If you have any questions for me please feel free to reach out to me, contact information is below!
        </p>

        </>
    );
}

export default AboutMe;