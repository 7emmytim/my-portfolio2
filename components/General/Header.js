import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BiDoorOpen } from 'react-icons/bi'
import { IoCloseCircle } from 'react-icons/io5'
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
        <div className='py-6 fixed top-0 w-full z-20 bg-[#242639]'>
            <div className='container relative flex items-center justify-between w-2/3'>
                <h4 className='text-white'>
                    {/* <Link href='/'>{`<tsx />`}</Link> */}
                </h4>
                {
                    expanded ? <BiDoorOpen className='text-white h-6 w-6 cursor-pointer' onClick={handleToggle} />
                        :
                        <ul className='fixed sm:static right-0 top-0 bg-[#242639] space-y-4 sm:space-y-0 py-6 sm:py-0 sm:bg-transparent z-20 h-fit w-full sm:w-fit block text-center sm:flex items-center gap-8 text-white'>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/projects'>Projects</Link></li>
                            <li><Link href='/blog'>Blog</Link></li>
                            <li><Link href='/workflow'>Workflow</Link></li>
                            <li className='block sm:hidden'>
                                <a href='/cv_timilehin.pdf' target='_blank'>Download CV</a>
                            </li>
                            {/* <li><Link href='/contact'>Contact</Link></li> */}
                            <IoCloseCircle className='text-[#fe4957] h-6 w-6 cursor-pointer mx-auto' onClick={handleToggle} />
                        </ul>
                }
            </div>
        </div>
    )
}

export default Header