import Link from 'next/link'
import { useState } from 'react'
import { BiDoorOpen } from 'react-icons/bi'
import { RiDoorClosedLine } from 'react-icons/ri'

const Header = () => {

    const [expanded, setExpanded] = useState(true)

    const handleToggle = () => setExpanded(prev => !prev)

    return (
        <div className='py-6 fixed top-0 w-full z-20 bg-transparent'>
            <div className='container flex items-center justify-between w-2/3'>
                <h4 className='text-black dark:text-white'>
                    <Link href='/'>{`<tsx />`}</Link>
                </h4>
                {
                    expanded ? <BiDoorOpen className='text-black dark:text-white h-6 w-6 cursor-pointer' onClick={handleToggle} />
                        :
                        <ul className='flex items-center gap-8 text-black dark:text-white'>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/projects'>Projects</Link></li>
                            <li><Link href='/blog'>Blog</Link></li>
                            {/* <li><Link href='/contact'>Contact</Link></li> */}
                            <RiDoorClosedLine className='text-black dark:text-white h-6 w-6 cursor-pointer' onClick={handleToggle} />
                        </ul>
                }
            </div>
        </div>
    )
}

export default Header