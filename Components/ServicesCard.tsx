import { BugAntIcon, CodeBracketIcon, CommandLineIcon, CursorArrowRaysIcon, RocketLaunchIcon, ServerIcon } from '@heroicons/react/20/solid';
import React from 'react';

interface Props {
    title: string; num: string;

}

const iconMapping = {
    "01": CommandLineIcon,
    "02": ServerIcon,
    "03": CodeBracketIcon,
    "04": CursorArrowRaysIcon,
    "05": RocketLaunchIcon,
    "06": BugAntIcon
}

const ServicesCard = ({ num, title }: Props) => {
    const IconComponent =
    (iconMapping as Record<string,React.ElementType>)[num] || CommandLineIcon;
    return (
        <div className='bg-black custom_service z-[100] relative transform rounded-2xl 
         text-center p-6 shadow-md'>
            <IconComponent className="w-[5rem] relative z-[-1] mx-auto h-[rem]"/>
            <h1 className='text-[25px] relative z-[1] text-white mt-[1rem]'>
                {title}
                </h1>
                <p className='text-white text-[15px] opacity-60 mt-[0.8rem]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Repellendus sunt, distinctio sapiente delectus dolores ullam saepe nobis et
                     atque quasi reiciendis architecto voluptatem eaque facilis asperiores fuga esse nihil laboriosam.
                     </p>
                     <p className='text-white text-[1.6rem] font-bold absolute top-3 right-4'>{num}</p>
         </div>
    )
}

export default ServicesCard