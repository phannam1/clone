import React from 'react'
export default function header() {
    return (
        <div className='h-24'>
            <div className='w-full'>
                <div className='text-black bg-gray-100 h-6 text-xs pt-4 pb-5  font-sans flex items-center justify-between'>
                    <div></div>
                    <div className='text-center uppercase tracking-widest'>TWILIO ACQUIRES ZIPWHIP - LEARN MORE</div>
                    <ul className='flex items-center'>
                        <div className='px-4 border-r '><img className='h-6 w-6 ' src='/images/english.png' /></div>
                        <li className='px-4 uppercase tracking-widest'>Support</li>
                        <li className='mr-4 uppercase tracking-widest'><a href='#'>Login</a></li>
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