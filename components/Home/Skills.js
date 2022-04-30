import { SiAntdesign, SiBitbucket, SiCss3, SiFirebase, SiFramer, SiGithub, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiRedux, SiSass, SiStrapi, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills = () => {

    const _skills = [
        { text: 'HTML5', icon: <SiHtml5 className='w-full h-14 sm:h-28' /> },
        { text: 'React JS', icon: <SiReact className='w-full h-14 sm:h-28' /> },
        { text: 'JS', icon: <SiJavascript className='w-full h-14 sm:h-28' /> },
        { text: 'Typescript', icon: <SiTypescript className='w-full h-14 sm:h-28' /> },
        { text: 'Next JS', icon: <SiNextdotjs className='w-full h-14 sm:h-28' /> },
        { text: 'Antd', icon: <SiAntdesign className='w-full h-14 sm:h-28' /> },
        { text: 'Tailwind', icon: <SiTailwindcss className='w-full h-14 sm:h-28' /> },
        { text: 'CSS3', icon: <SiCss3 className='w-full h-14 sm:h-28' /> },
        { text: 'Firebase', icon: <SiFirebase className='w-full h-14 sm:h-28' /> },
        { text: 'Styled Components', icon: <SiStyledcomponents className='w-full h-14 sm:h-28' /> },
        { text: 'Strapi', icon: <SiStrapi className='w-full h-14 sm:h-28' /> },
        { text: 'Redux', icon: <SiRedux className='w-full h-14 sm:h-28' /> },
        { text: 'Framer', icon: <SiFramer className='w-full h-14 sm:h-28' /> },
        { text: 'Sass', icon: <SiSass className='w-full h-14 sm:h-28' /> },
        { text: 'Github', icon: <SiGithub className='w-full h-14 sm:h-28' /> },
        { text: 'Bitbucket', icon: <SiBitbucket className='w-full h-14 sm:h-28' /> }
    ]

    return (
        <div className='container mx-auto text-center sm:flex items-center justify-between w-2/3 py-20 min-h-screen'>
            <div className='text-center mx-auto'>
                <h3 className='text-[#fe4957] text-2xl font-bold text-left'>{'< Skills />'}</h3>
                <div className='flex flex-wrap justify-center gap-8 mt-10'>
                    {
                        _skills.map(skill => {
                            return (
                                <div key={skill.text} className='mx-auto text-center bg-[#242639] text-white px-4 py-3 space-y-1 rounded-md cursor-pointer'>
                                    {skill.icon}
                                    <h4 className='text-xs'>{skill.text}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills