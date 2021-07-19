import React from 'react';
import AllProjects from './AllProjects'
import './Projects.css'

function Project () {
    return (
        <div className="allProjects">
            <h1 className='projectH1'>Here are some of my projects!</h1>
            <div className='projectContainer'>
                <div className='projectWrap'>
                    <ul className='projectItem'>
                        <AllProjects  src='images/runbuddy.png' label= 'Run-Buddy' text='HTML-CSS' link='https://github.com/BradenWelsh/run-buddy' path='/Projects' />

                        <AllProjects  src='images/site.png' label= 'Horiseon' text='HTML-CSS' link='https://github.com/BradenWelsh/weekly-challenge-01' path='/Projects' />
                        
                        <AllProjects  src='images/gif.gif' label= 'Employee Tracker' text='mySQL, inquirer, and figlet.' link='https://github.com/BradenWelsh/employeeTracker/' path='/Projects' />

                        <AllProjects  src='images/ss2.png' label= 'Fantasy Team Builder' text='Bcrypt, node, express, handle bars, mySQL, dotenv, sequelize' link= 'https://github.com/BradenWelsh/fantasy-team-roster' path='/Projects' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Project;