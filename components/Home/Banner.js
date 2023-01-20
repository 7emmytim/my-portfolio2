import { BsMoonFill, BsSun } from 'react-icons/bs'
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
            repeat: Infinity
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
                <BsSun className='w-6 h-6' onClick={() => setTheme('light')} />
            )
        }

        else {
            return (
                <BsMoonFill className='w-6 h-6 dark:text-[#fe4957]' onClick={() => setTheme('dark')} />
            )
        }
    }

    const handleMixpanelFn = () => mixpanel.track('CV_DOWNLOADED')

    return (
        <div className='bg-[#242639] sm:min-h-screen sm:flex pt-28 sm:py-20 items-center'>
            <div className='container grid sm:grid-cols-2 gap-10 w-2/3 items-center'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4 sm:gap-4'>
                        {_social_media.map(item => {
                            return (
                                <a key={item.link} href={item.link} target='_blank' className='rounded-full border-2 border-[#fe4957] bg-[#1e2235] p-2 sm:p-2 lg:p-3'>
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
                            className='text-white text-2xl lg:text-3xl xl:text-4xl font-bold'>
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
                        <h3 className='text-white blur-sm hover:blur-0 text-xl lg:text-2xl xl:text-3xl font-bold'>{'<Frontend Dev />;'}</h3>
                    </div>
                    <h5 className='text-[#A9A7A9] text-base sm:text-lg'>I am interested in frontend designs, logics and technicalities.</h5>
                    <div className='flex items-center space-x-2 sm:space-x-6'>
                        <motion.a
                            onClick={handleMixpanelFn}
                            variants={buttonVariants}
                            whileHover='hover'
                            href='/cv_timilehin.pdf' target='_blank' className='border-2 border-[#fe4957] bg-[#1e2235] text-base px-5 py-2 rounded-full text-white hidden sm:block'>Download CV</motion.a>
                        {/* <motion.button
                            variants={buttonVariants}
                            whileHover='hover'
                            className='md:bg-[#fe4957] md:px-8 md:py-3 rounded-full md:text-white text-white'>
                            {renderThemeChanger()}
                        </motion.button> */}
                    </div>
                </div>
                <div>
                    <img src='/banner.png' className='hidden sm:block' />
                </div>
            </div>
        </div>
    )
}

export default Banner