import React from 'react';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import DataUsageIcon from '@material-ui/icons/DataUsage';
export default function Header() {
    return (
        <div className='h-34 shadow-md border-b border-gray-100'>

            <div className='h-20  w-full flex items-center justify-between bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 '>
                <div>
                    <img className='h-auto w-34 max-h-20' src='/images/skylove.jpg' />
                </div>
                <div>
                    <SearchIcon className='text-blue-900 mr-1 ' /><input type='text' placeholder='Tìm kiếm...' className='rounded' />
                    <button className='px-4 text-white hover:text-blue-400 py-1.5 mr-2 bg-none text-md  hover:text-white align-center'><LockOpenIcon className='text-blue-900 mb-1 mr-1' fontSize='inherit' />Đăng nhập</button>
                    <button className='px-4 text-white hover:text-blue-400 py-1.5 mr-2 bg-none text-md  hover:text-white'><PersonAddIcon className='text-blue-900 mb-1 mr-1' fontSize='inherit' />Đăng ký</button>
                </div>
            </div>
            <div className='h-10  w-full flex items-center justify-between ' >

                <ul className='inline-flex text-lg text-black'>
                    <li className='group '>
                        
                        <a className='px-6 hover:border-b-2 hover:border-blue-500 pb-2' href='#'><HomeIcon className='text-blue-900 mb-1 mr-1' fontSize='inherit' />Trang chủ</a>
                    </li>
                    <li className='group '>
                        <a className='px-6 hover:border-b-2 hover:border-blue-500 pb-2' href='#'><StarIcon className='text-blue-900 mb-1 mr-1' fontSize='inherit' />Giải trí</a>
                    </li>
                    <li>
                        <a className='px-6 hover:border-b-2 hover:border-blue-500 pb-2 ' href='#'><WbSunnyIcon className=' text-blue-900 mb-1 mr-1' fontSize='inherit' />Đời sống</a>
                    </li>
                    <li>
                        <a className='px-6 hover:border-b-2 hover:border-blue-500 pb-2 ' href='#'><BeachAccessIcon className='text-blue-900 mb-1 mr-1' fontSize='inherit' />Giới trẻ</a>
                    </li>
                    <li>
                        <a className='px-6 hover:border-b-2 hover:border-blue-500 pb-2' href='#'><EmojiNatureIcon className='text-blue-900 mb-1 mr-1' fontSize='inherit' />Thời trang</a>
                    </li>
                    <li>
                        <a className='px-6 hover:border-b-2 hover:border-blue-500 pb-2' href='#'><DataUsageIcon className='text-blue-900 mb-1 mr-1' fontSize='inherit' />Cuộc sống quanh ta</a>
                    </li>
                </ul>

            </div>
        </div>
    )
}