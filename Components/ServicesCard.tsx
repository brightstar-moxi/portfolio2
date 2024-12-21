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
        <div className='bg-black custom_service z-[100] relative transform rounded-2xl  text-center p-6 shadow-md'>ServicesCard</div>
    )
}

export default ServicesCard