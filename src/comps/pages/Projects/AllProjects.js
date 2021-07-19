import React from 'react';

function AllProjects(props){
    return (
        <>
        <li className="projectItems">
        <a className='projectItem-Link' href={props.link} target='_blank' rel='noreferrer'>
            <figure className='projectImgWrap' data-category={props.label}>
                <img src={props.src} alt='Project Image' className='projectImg'/>
            </figure>
            <div className='projectInfo'>
                <h5 className='projectText'>{props.text}</h5>
            </div>
        </a>
        </li>
        </>
    )
}

export default AllProjects;