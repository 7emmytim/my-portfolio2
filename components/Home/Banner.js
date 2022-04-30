import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { IoPlaySharp } from 'react-icons/io5'
import { FiGithub } from 'react-icons/fi'

const Banner = () => {
    return (
        <div className='bg-[#242639] h-full'>
            <div className='container grid grid-cols-2 py-20 w-2/3 items-center'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <div className='rounded-full border-2 border-[#fe4957] bg-[#1e2235] p-3'>
                            <FaLinkedinIn className='h-4 w-4 text-white' />
                        </div>
                        <div className='rounded-full border-2 border-[#fe4957] bg-[#1e2235] p-3'>
                            <FiGithub className='h-4 w-4 text-white' />
                        </div>
                        <div className='rounded-full border-2 border-[#fe4957] bg-[#1e2235] p-3'>
                            <FaInstagram className='h-4 w-4 text-white' />
                        </div>
                        <div className='rounded-full border-2 border-[#fe4957] bg-[#1e2235] p-3'>
                            <FaFacebookF className='h-4 w-4 text-white' />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-white text-5xl font-bold'>{'Timilehin'}</h3>
                        <h3 className='text-white text-4xl font-bold'>{'<Self-taught Frontend Dev />.'}</h3>
                    </div>
                    <h5 className='text-[#A9A7A9] text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                    <div className='flex items-center space-x-6'>
                        <button className='border-2 border-[#fe4957] bg-[#1e2235] px-5 py-2 rounded-full text-white'>Download CV</button>
                        <button className='bg-[#fe4957] px-8 py-3 rounded-full text-white'>
                            <IoPlaySharp className='h-6 w-6' />
                        </button>
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