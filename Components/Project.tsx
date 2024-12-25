import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
            <div className='text-center'>
                <p className='heading_mini'>Recent Works</p>
                <h1 className='heading_primary'>My Best <span className='text-yellow-400'>Projects</span></h1>
            </div>
            <ProjectCard title="E-commerce Website" tech1="React" tech2="Next JS" tech3="Tailwind" tech4="JavaScript" image="/image/"/>
        </div>
    )
}
export default Project