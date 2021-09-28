import React from 'react';

import './work-project.styles.scss';

import DottedBackground from '../dotted-background/dotted-background.component';



const WorkProject = ({ name, description, skills, webURL, pics }) => {
    return (
        <div className='work-project'>
            <div className='project-content'>
                <span className='project-index'>{name}</span>
                <hr className='project-horizontal-hr' />
                <div className='project-des-container'>
                    <span className='project-title'>Description</span>
                    <span className='project-des-content'>{description}</span>
                    <span className='project-title'>Skill used</span>
                    <div className='project-skills-container'>
                        {skills.map((skill) => (
                            <img key={skill.id} className='project-skill' src={skill.src} alt={skill.name} />
                        ))}
                    </div>
                    <span className='project-title'>{webURL}</span>
                </div>
                <div className='project-pics-container'>
                    <DottedBackground></DottedBackground>
                </div>
            </div>
        </div>
    )
}

export default WorkProject