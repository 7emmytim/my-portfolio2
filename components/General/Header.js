import Link from 'next/link'
import { useState } from 'react'
import { BiDoorOpen } from 'react-icons/bi'

const Header = () => {

    const [expanded, setExpanded] = useState(true)

    const handleToggle = () => setExpanded(prev => !prev)

    return (
        <div className='py-6'>
            <div className='container flex items-center justify-between w-2/3'>
                <h4 className='text-white'>
                    <Link href='/'>{`<jsx />`}</Link>
                </h4>
                {
                    expanded ? <BiDoorOpen className='text-white h-6 w-6 cursor-pointer' onClick={handleToggle} />
                        :
                        <ul className='flex items-center gap-8 text-white'>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/projects' scroll>Projects</Link></li>
                            <li><Link href='/'>About</Link></li>
                            <li><Link href='#skills-section'>Services</Link></li>
                        </ul>
                }
            </div>
        </div>
    )
}

export default Header