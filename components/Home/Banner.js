import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { BsMoonFill, BsSun } from 'react-icons/bs'
import { FiGithub, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import mixpanel from 'mixpanel-browser'
import { _social_media } from '../../resources/social'

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: '0px 0px 8px rgb(255,255,255)',
        boxShadow: '0px 0px 8px rgb(255,255,255)',
        transition: {
            duration: 0.3,
            yoyo: Infinity
        }
    }
}

const container = {
    hidden: {
        opacity: 0,
        transition: {
            staggerChildren: 0.1
        }
    },

    show: {
        y: '0%',
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: '8%' },
    show: { opacity: 1, y: '0%' },
    transition: {
        easing: 'easeInOut'
    }
}

const Banner = () => {

    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null

        const currentTheme = theme === 'system' ? 'dark' : theme

        if (currentTheme === 'dark') {
            return (
                <BsSun className='w-6 h-6' role='button' onClick={() => setTheme('light')} />
            )
        }

        else {
            return (
                <BsMoonFill className='w-6 h-6 text-[#fe4957]' role='button' onClick={() => setTheme('dark')} />
            )
        }
    }

    const handleMixpanelFn = () => mixpanel.track('CV_DOWNLOADED')

    return (
        <div className='bg-white dark:bg-[#242639] min-h-screen sm:flex py-32 sm:py-20 items-center'>
            <div className='container grid sm:grid-cols-2 gap-10 w-2/3 items-center'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-2 sm:gap-4'>
                        {_social_media.map(item => {
                            return (
                                <a key={item.link} href={item.link} target='_blank' className='rounded-full border-2 border-[#fe4957] bg-[#1e2235] p-1 sm:p-2 lg:p-3'>
                                    {item.icon}
                                </a>
                            )
                        })}
                    </div>
                    <div className=''>
                        <motion.h3
                            variants={container}
                            initial='hidden'
                            animate='show'
                            className='text-black dark:text-white text-2xl sm:text-3xl lg:text-5xl font-bold'>
                            {'Timilehin'.split('').map((l, i) => {
                                return (
                                    <motion.span
                                        style={{ display: 'inline-block' }}
                                        variants={item}
                                        key={`${l}-${i}`}
                                    >
                                        {l}
                                    </motion.span>
                                );
                            })}
                        </motion.h3>
                        <h3 className='text-black dark:text-white blur-sm hover:blur-0 text-xl sm:text-2xl lg:text-4xl font-bold'>{'<Self-taught Frontend Dev />.'}</h3>
                    </div>
                    <h5 className='text-[#A9A7A9] text-base sm:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                    <div className='flex items-center space-x-2 sm:space-x-6'>
                        <motion.a
                            onClick={handleMixpanelFn}
                            variants={buttonVariants}
                            whileHover='hover'
                            href='/cv_timilehin.pdf' target='_blank' className='border-2 border-[#fe4957] bg-[#1e2235] text-xs sm:text-base px-5 py-2 rounded-full text-white'>Download CV</motion.a>
                        <motion.button
                            variants={buttonVariants}
                            whileHover='hover'
                            className='md:bg-[#fe4957] md:px-8 md:py-3 rounded-full text-white'>
                            {renderThemeChanger()}
                        </motion.button>
                    </div>
                </div>
                <div>
                    <img src='/banner.png' />
                </div>
            </div>
        </div>
    )
}

export default Banner