import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BiDoorOpen } from 'react-icons/bi'
import { RiDoorClosedLine } from 'react-icons/ri'
// import useSound from 'use-sound'

const Header = () => {

    const [expanded, setExpanded] = useState(true)
    // const [play] = useSound('/resources/door-3-close.mp3')
    const router = useRouter()

    const handleToggle = () => setExpanded(prev => !prev)

    useEffect(() => {
        setExpanded(true)
    }, [router.route])

    return (
        <div className='py-6 fixed top-0 w-full z-20'>
            <div className='container relative flex items-center justify-between w-2/3'>
                <h4 className='text-black dark:text-white'>
                    {/* <Link href='/'>{`<tsx />`}</Link> */}
                </h4>
                {
                    expanded ? <BiDoorOpen className='text-black dark:text-white h-6 w-6 cursor-pointer' onClick={handleToggle} />
                        :
                        <ul className='fixed sm:static right-0 top-0 bg-[#242639] bg-opacity-90 space-y-4 sm:space-y-0 py-6 sm:py-0 sm:bg-transparent z-20 h-fit w-full sm:w-fit block text-center sm:flex items-center gap-8 text-black dark:text-white'>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/projects'>Projects</Link></li>
                            <li><Link href='/blog'>Blog</Link></li>
                            <li><Link href='/workflow'>Workflow</Link></li>
                            {/* <li><Link href='/contact'>Contact</Link></li> */}
                            <RiDoorClosedLine className='text-black dark:text-white h-6 w-6 cursor-pointer mx-auto' onClick={handleToggle} />
                        </ul>
                }
            </div>
        </div>
    )
}

export default Header