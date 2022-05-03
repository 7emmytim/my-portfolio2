import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

const Skills = ({ skills, showMore }) => {
    return (
        <div className='container mx-auto text-center sm:flex items-center justify-between w-2/3 py-20 min-h-screen'>
            <div className='text-center mx-auto'>
                <h3 className='text-[#fe4957] text-2xl font-bold text-left'>{'< Skills />'}</h3>
                <div className='flex flex-wrap justify-center gap-8 mt-10'>
                    {
                        skills.map(skill => {
                            return (
                                <div key={skill.text} className='mx-auto text-center bg-[#1e2235] dark:bg-[#242639] text-white px-4 py-3 space-y-1 rounded-md cursor-pointer'>
                                    {skill.icon}
                                    <h4 className='text-xs'>{skill.text}</h4>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    showMore &&
                    <div className='mt-10'>
                        <Link href='/skills'>
                            <span className='text-[#fe4957] dark:text-yellow-300 text-base cursor-pointer flex items-center gap-3'>
                                <span>SEE MORE</span>
                                <BsArrowRight />
                            </span>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default Skills