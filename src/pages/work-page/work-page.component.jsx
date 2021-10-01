import React, { useEffect } from 'react';

import WorkProject from '../../components/work-project/work-project.component';

import './work-page.styles.scss';

import { PROJECT_DATA } from '../../assets/data/project.data';

const WorkPage = () => {

    return(
        <div className='work-page'>
            <div className='work-container'>
                {PROJECT_DATA.map((project) => (
                    <WorkProject 
                        key={project.id} 
                        runOnce={project.runOnce}
                        name={project.name} 
                        description={project.description}
                        skills={project.skills}
                        webURL={project.webURL}
                        pics={project.pics}/>
                ))}
            </div>
        </div>
    )
}

export default WorkPage