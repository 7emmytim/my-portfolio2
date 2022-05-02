import { useState } from 'react'
import { FiCodepen } from 'react-icons/fi'
import { _experience } from '../../resources/experience'

const Experience = () => {

    const [active, setActive] = useState(_experience[0])

    return (
        <div className='min-h-screen py-20 sm:flex flex-col justify-center sm:py-12 overflow-auto'>
            <div className='container w-2/3'>
                <h3 className='text-[#fe4957] text-2xl font-bold'>{'< Experience />'}</h3>
                <div className='md:grid md:grid-cols-5 gap-8 mt-10 overflow-y-auto'>
                    <div className='col-span-1 border-l-2 border-[#8892b0] border-opacity-30 relative py-4'>
                        <ul className='flex items-center md:block space-y-4 absolute -left-[4px]'>
                            {
                                _experience.map(experience => {
                                    return (
                                        <li
                                            onClick={() => setActive(experience)}
                                            key={experience.company}
                                            className={`${active.company === experience.company ? 'md:border-l-4 md:border-[#fe4957] md:dark:border-[#64ffda] text-[#fe4957] dark:text-[#64ffda]' : 'text-[#8892b0]'} pl-5 capitalize cursor-pointer`}>
                                            {experience.company}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='col-span-4 text-left py-4'>
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