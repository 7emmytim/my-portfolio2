import Skills from '../components/Home/Skills'
// import { _skills } from '../resources/skills'
import { SiAntdesign, SiBitbucket, SiCss3, SiFirebase, SiFramer, SiGithub, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiRedux, SiSass, SiStrapi, SiStyledcomponents, SiTailwindcss, SiTypescript } from 'react-icons/si'

const skills = () => {

    const _skills = [
        { text: 'React JS', icon: <SiReact className='w-full h-10 sm:h-28' /> },
        { text: 'JS', icon: <SiJavascript className='w-full h-10 sm:h-28' /> },
        { text: 'Typescript', icon: <SiTypescript className='w-full h-10 sm:h-28' /> },
        { text: 'Next JS', icon: <SiNextdotjs className='w-full h-10 sm:h-28' /> },
        { text: 'Antd', icon: <SiAntdesign className='w-full h-10 sm:h-28' /> },
        { text: 'Tailwind', icon: <SiTailwindcss className='w-full h-10 sm:h-28' /> },
        { text: 'Firebase', icon: <SiFirebase className='w-full h-10 sm:h-28' /> },
        { text: 'Strapi', icon: <SiStrapi className='w-full h-10 sm:h-28' /> },
        { text: 'Redux', icon: <SiRedux className='w-full h-10 sm:h-28' /> },
        { text: 'Framer', icon: <SiFramer className='w-full h-10 sm:h-28' /> },
        { text: 'Sass', icon: <SiSass className='w-full h-10 sm:h-28' /> },
        { text: 'HTML5', icon: <SiHtml5 className='w-full h-10 sm:h-28' /> },
        { text: 'CSS3', icon: <SiCss3 className='w-full h-10 sm:h-28' /> },
        { text: 'Styled Components', icon: <SiStyledcomponents className='w-full h-10 sm:h-28' /> },
        { text: 'Github', icon: <SiGithub className='w-full h-10 sm:h-28' /> },
        { text: 'Bitbucket', icon: <SiBitbucket className='w-full h-10 sm:h-28' /> }
      ]

    return (
        <section>
            <Skills skills={_skills} />
        </section>
    )
}

export default skills