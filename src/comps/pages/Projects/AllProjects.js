import React from 'react';
import { Link } from 'react-router-dom';

function AllProjects(props){
    return (
        <>
        <li className="projectItems">
        <Link className='projectItem-Link' to={props.path} href={props.link} target='_blank'>
            <figure className='projectImgWrap' data-category={props.label}>
                <img src={props.src} alt='Project Image' className='projectImg'/>
            </figure>
            <div className='projectInfo'>
                <h5 className='projectText'>{props.text}</h5>
            </div>
        </Link>
        </li>
        </>
    )
}

export default AllProjects;