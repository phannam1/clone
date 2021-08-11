import React from 'react'
export default function header() {
    return (
        <div className='h-24'>
            <div className='w-full'>
                <div className='text-black bg-gray-100 h-6 text-xs pt-4 pb-5  font-sans flex items-center justify-between'>
                    <div></div>
                    <a href='#' className='text-center uppercase tracking-widest'>TWILIO ACQUIRES ZIPWHIP - LEARN MORE</a>
                    <ul className='flex items-center '>
                        <div className=' mr-2 px-4 border-r group'>
                            <img className='h-6 w-6 ' src='/images/english.png' />
                            <div className='opacity-0  group-hover:opacity-100    transition-all duration-500 items-center' >
                                <ul className='absolute bg-red-500  rounded pb-2 text-gray-200 mt-1 mr-3 ' >
                                    <li className=' flex items-center hover:text-gray-300 px-2 py-3'><a href='#'>Vietnamese</a></li>
                                </ul>
                            </div>
                        </div>
                        <li className='group'>
                            <a className='uppercase relative ' href='#'>Support</a>
                            <div className='opacity-0  group-hover:opacity-100  transition-all duration-500'>
                                <ul className='bg-red-500 px-4  rounded absolute text-gray-200 text-center' >
                                    <li className=' flex  hover:text-gray-300 rounded py-1 px-1'><a href='#'>Help Center</a></li>
                                    <li className='my-2 flex  hover:text-gray-300 rounded py-1 px-1'><a href='#'>Task to Support</a></li>
                                    <li className='my-2 flex  hover:text-gray-300 rounded py-1'><a href='#'>Tranning</a></li>
                                    <hr />
                                    <li className='my-2 flex  hover:text-gray-300 rounded py-1'><a href='#'>Support Plans</a></li>
                                    <li className='my-1 flex  hover:text-gray-300 rounded py-1'><a href='#'>Partner Solutions</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className='mx-4 uppercase tracking-widest'><a href='#'>Login</a></li>
                    </ul>
                </div>

            </div>
            <div className='h-16 border-b w-full flex items-center justify-between'>
                <div>
                    <img className='h-auto w-34 max-h-14' src='/images/home.png' />
                </div>
                <ul className='inline-flex text-sm'>
                    <li>
                        <a className='px-6' href='#'>Product</a>
                    </li>
                    <li>
                        <a className='px-6' href='#'>Solutions</a>
                    </li>
                    <li>
                        <a className='px-6' href='#'>Developers</a>
                    </li>
                    <li>
                        <a className='px-6' href='#'>Services & Support</a>
                    </li>
                    <li>
                        <a className='px-6' href='#'>Pricing</a>
                    </li>
                </ul>
                <div>
                    <button className='px-4 text-blue-600 rounded border-blue-700 border-2 py-1.5 mr-2 bg-none text-sm hover:bg-blue-800 hover:text-white'>Task to an expert</button>
                    <button className='px-4 bg-blue-600 py-1.5 mr-4 rounded text-white text-sm'>Sign up</button>
                </div>
            </div>
        </div>
    )
}