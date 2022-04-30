import { BiCodeBlock } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { FiCodepen } from 'react-icons/fi'
import { RiCodeSSlashFill } from 'react-icons/ri'

const Experience = () => {
    return (
        <div className='min-h-screen py-20 sm:flex flex-col justify-center sm:py-12 overflow-auto'>
            <div className='container w-2/3'>
                <h3 className='text-[#fe4957] text-2xl font-bold'>{'< Experience />'}</h3>
                <div className='py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0 mt-10'>

                    <div className='relative text-gray-700 antialiased text-sm font-semibold'>

                        {/* <!-- Vertical bar running through middle --> */}
                        <div className='hidden sm:block w-1 bg-white absolute h-full left-1/2 transform -translate-x-1/2'></div>

                        {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex flex-col sm:flex-row items-center'>
                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                        <div className='p-4 bg-white rounded shadow text-right'>
                                            <p className='text-xs text-yellow-500'>Terapacks (Lokoja)</p>
                                            <h4 className='font-semibold text-sm'>Web Developer (Full-time)</h4>
                                            <h5 className='text-xs opacity-50'>Nov 2019 - Dec 2020</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-blue-500 border-white border-[3px] w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center'>
                                    <FiCodepen className='h-5 w-5 text-white' />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex flex-col sm:flex-row items-center'>
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div className='p-4 bg-white rounded shadow'>
                                            <p className='text-xs text-yellow-500'>Klasha (Lagos)</p>
                                            <h4 className='font-semibold text-sm'>Integration and Test Engineer (Contract)</h4>
                                            <h5 className='text-xs opacity-50 text-right'>Mar 2022</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-blue-500 border-white border-[3px] w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center'>
                                    <RiCodeSSlashFill className='h-5 w-5 text-white' />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                        <div className='mt-6 sm:mt-0 sm:mb-12'>
                            <div className='flex flex-col sm:flex-row items-center'>
                                <div className='flex justify-start w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pr-8'>
                                    <div className='p-4 bg-white rounded shadow text-right'>
                                            <p className='text-xs text-yellow-500'>AFEX Commodities Exchange (Abuja)</p>
                                            <h4 className='font-semibold text-sm'>Frontend Developer (Full-time)</h4>
                                            <h5 className='text-xs opacity-50 text-right'>Jan 2021 - Present</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-blue-500 border-white border-[3px] w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center'>
                                    <FaLaptopCode className='h-5 w-5 text-white' />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                        {/* <div className='mt-6 sm:mt-0'>
                            <div className='flex flex-col sm:flex-row items-center'>
                                <div className='flex justify-end w-full mx-auto items-center'>
                                    <div className='w-full sm:w-1/2 sm:pl-8'>
                                        <div className='p-4 bg-white rounded shadow'>
                                            I'll tell you how I became the Prince of a town called Bel Air.
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-full bg-blue-500 border-white border-[3px] w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center'>
                                    <BiCodeBlock className='h-5 w-5 text-white' />
                                </div>
                            </div>
                        </div> */}



                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience