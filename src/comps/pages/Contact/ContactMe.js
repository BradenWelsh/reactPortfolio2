import React from 'react';
import './ContactMe.css';

function ContactMe(){
    return (
        <>
        <section className='ContactmeSection'>
        <h1 className='contactH1'>Contact</h1>
        <h3 className='contactF'>Please feel free to contact me with any questions or recommendations! ☺</h3>
            <div className="e-p">
               <h3> Phone Number: <a href="tel:832-403-0406">(832)-403-0406</a><br/>
               <br/>
                   Email: <a href="mailto://braden112299@gmail.com">braden112299@gmail.com</a>
                </h3>
            </div> 
        </section>
        </>

    )
};
    
export default ContactMe;