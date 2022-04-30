const Projects = () => {
    return (
        <div className='bg-[#242639]'>
            <div className='container h-screen mx-auto text-center flex items-center justify-between w-2/3'>
                <div className='text-center mx-auto'>
                    <h3 className='text-[#fe4957] text-2xl font-bold uppercase'>Projects</h3>
                    <div className='flex flex-wrap justify-center gap-8 mt-10'>
                        {/* {
                _skills.map(skill => {
                    return (
                        <div className='mx-auto text-center bg-[#242639] text-white px-4 py-3 space-y-1 rounded-md cursor-pointer'>
                            {skill.icon}
                            <h4 className='text-xs'>{skill.text}</h4>
                        </div>
                    )
                })
            } */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects