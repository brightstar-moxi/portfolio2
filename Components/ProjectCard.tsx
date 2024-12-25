import React from 'react'

interface Props{
    image: string;
    title: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
}

const ProjectCard = ({image, title, tech1, tech2, tech3, tech4}: Props) => {
  return (
    <div className='grid w-[80%] mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
    <div className='p-4 rounded-xl'></div>
    </div>
  )
}

export default ProjectCard