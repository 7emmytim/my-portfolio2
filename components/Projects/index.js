import { VscLinkExternal } from 'react-icons/vsc'
import { GiNotebook } from 'react-icons/gi'
import { BsCart4 } from 'react-icons/bs'
import { MdQrCode2, MdQuiz } from 'react-icons/md'

const Projects = () => {

    const _projects = [
        { name: 'notepad', icon: <GiNotebook className='w-12 h-12 text-green-400' />, link: 'https://notepad-clone.web.app/', techs: ['reactjs', 'redux'] },
        { name: 'shopping cart', icon: <BsCart4 className='w-12 h-12 text-yellow-400' />, link: 'https://hungry-beaver-3b770e.netlify.app/', techs: ['nextjs', 'tailwindcss'] },
        { name: 'qr pay', icon: <MdQrCode2 className='w-12 h-12 text-gray-400' />, link: 'https://qrcode-app-dev.firebaseapp.com/', techs: ['reactjs', 'firebase'] },
        { name: 'flag quiz', icon: <MdQuiz className='w-12 h-12 text-blue-400' />, link: 'https://flagquiz-app.web.app/', techs: ['reactjs', 'bootstrap'] }
    ]

    return (
        <div className='container py-20 w-2/3'>
            <h3 className='text-[#fe4957] text-2xl font-bold'>{'< Projects />'}</h3>
            <div className='lg:flex lg:flex-wrap gap-11 items-center justify-center w-full mt-10'>
                {
                    _projects.map(project => {
                        return (
                            <div key={project.link} className='focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded'>
                                <div className='flex items-center border-b border-gray-200 pb-6'>
                                    {project.icon}
                                    <div className='flex items-start justify-between w-full'>
                                        <div className='pl-3 w-full'>
                                            <p className='focus:outline-none text-xl font-medium leading-5 text-gray-800'>{project.name}</p>
                                        </div>
                                        <div>
                                            <a href={project.link} target='_blank' className=' text-gray-500'>
                                                <VscLinkExternal className='w-4 h-4' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <p className='focus:outline-none text-sm leading-5 py-4 text-gray-600 truncate'>A group of people interested in dogecoin, the currency and a bit of side for the meme and dof that we all know and love. These cases are perfectly simple and easy to distinguish.</p>
                                    <div className='focus:outline-none flex gap-3'>
                                        {
                                            project.techs.map(item => <div key={item} className='py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100'>#{item}</div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects