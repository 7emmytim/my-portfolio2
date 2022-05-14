import { VscLinkExternal } from 'react-icons/vsc'
import { BsCart4 } from 'react-icons/bs'
import { MdQrCode2 } from 'react-icons/md'
import { IoFastFoodOutline } from 'react-icons/io5'

const Projects = () => {

    const _projects = [
        { name: 'comx trading app', icon: <img src='/x.png' className='h-12 w-12' />, link: 'https://comx.afexnigeria.com/', techs: ['reactjs', 'antd'] },
        { name: 'food app', icon: <IoFastFoodOutline className='w-12 h-12 text-yellow-400' />, link: 'https://foodie-appie.netlify.app/', techs: ['reactjs', 'tailwindcss'] },
        { name: 'qr pay', icon: <MdQrCode2 className='w-12 h-12 text-gray-400' />, link: 'https://qrcode-app-dev.firebaseapp.com/', techs: ['reactjs', 'firebase'] },
        { name: 'shopping cart', icon: <BsCart4 className='w-12 h-12 text-purple-400' />, link: 'https://hungry-beaver-3b770e.netlify.app/', techs: ['nextjs', 'tailwindcss'] },

    ]

    return (
        <div className='bg-gray-200 dark:bg-[#242639]'>
            <div className='container min-h-screen sm:flex items-center py-20 w-2/3'>
                <div className='w-full'>
                    <h3 className='text-[#fe4957] text-2xl font-bold'>{'< Projects />'}</h3>
                    <div className='sm:grid sm:grid-cols-2 space-y-6 sm:space-y-0 gap-6 w-full lg:w-2/3 mx-auto mt-10'>
                        {
                            _projects.map(project => {
                                return (
                                    <div key={project.link} className='focus:outline-none w-full bg-white p-6 shadow rounded'>
                                        <div className='flex items-center border-b border-gray-200 pb-6'>
                                            {project.icon}
                                            <div className='flex items-center justify-between w-full'>
                                                <div className='pl-1 xl:pl-3 w-full'>
                                                    <p className='focus:outline-none text-sm font-medium leading-5 text-gray-800'>{project.name}</p>
                                                </div>
                                                <div>
                                                    <a href={project.link} target='_blank' className=' text-gray-500'>
                                                        <VscLinkExternal className='w-4 h-4' />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='px-2'>
                                            {/* <p className='focus:outline-none text-sm leading-5 py-4 text-gray-600 truncate'>A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p> */}
                                            <div className='focus:outline-none sm:flex items-center space-y-2 sm:space-y-0 gap-3 pt-6'>
                                                {
                                                    project.techs.map(item => <div key={item} className='p-2 w-fit text-center text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100'>#{item}</div>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects