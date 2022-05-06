import { useState } from 'react'
import { FiCodepen } from 'react-icons/fi'
import { _experience } from '../../resources/experience'

const Experience = () => {

    const [active, setActive] = useState(_experience[0])

    return (
        <div className='min-h-screen py-20 sm:flex flex-col justify-center sm:py-12'>
            <div className='container w-2/3'>
                <h3 className='text-[#fe4957] text-2xl font-bold'>{'< Experience />'}</h3>
                <div className='grid md:grid-cols-4 md:gap-8 mt-10'>
                    <div className='md:col-span-1 md:border-l-2 border-[#8892b0] border-opacity-30 relative'>
                        <ul className='flex items-center gap-6 md:block md:space-y-4 md:absolute md:-left-[3px] w-full'>
                            {
                                _experience.map(experience => {
                                    return (
                                        <li
                                            onClick={() => setActive(experience)}
                                            key={experience.company}
                                            className={`${active.company === experience.company ? 'md:bg-white md:bg-opacity-10 border-b-2 md:border-b-0 md:border-l-4 border-[#fe4957] dark:border-[#64ffda] text-[#fe4957] dark:text-[#64ffda]' : 'text-[#8892b0]'} md:pl-5 pb-2 md:py-2 text-sm capitalize cursor-pointer`}>
                                            {experience.company}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='md:col-span-3 text-left py-4'>
                        <div className='space-y-8'>
                            <div className='space-y-1'>
                                <h3>{active.job_title} <span className='text-[#fe4957] dark:text-[#64ffda]'>@ {active.full_company_name}</span></h3>
                                <h5 className='text-[#8892b0] text-sm'>{active.duration}</h5>
                            </div>
                            <ul className='space-y-6'>
                                {
                                    active.duties.map(duty => {
                                        return (
                                            <li key={duty.id} className='flex items-start gap-4'>
                                                <FiCodepen className='text-[#fe4957] dark:text-[#64ffda] h-6 w-6' />
                                                <span className='text-[#8892b0] text-sm'>{duty.content}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience