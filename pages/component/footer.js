import React from 'react';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
export default function Footer() {
    return (
        <div className='fixed container max-w-screen-2xl m-auto shadow bottom-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-gray-500'>

            <div className='  w-full items-center ' >

                <ul className='flex text-lg  justify-around pt-4'>
                    <li className='group '>
                        <p className=' uppercase pb-2' >Ban biên tập</p>
                        <div className='flex py-6' >
                           
                            <div className='text-sm '>
                            <p> Chịu trách nhiệm nội dung : Ông Nguyễn Văn A</p>
                               
                               
                                <p className='py-2'> Trang tin điện tử trên internet: Giấy phép số 460/GP-TTĐT</p>

                                <p > © Copyright - 2021 </p>
                            </div>

                        </div>
                    </li>
                    <li className='group '>
                        <p className='uppercase '>Địa chỉ</p>
                        <div className='flex py-6' >
                           
                            <div className='text-sm'>
                                <p>Liên hệ trực tiếp</p>
                                <p className='py-2'> Address: 30 Hùng Vương , Phường Phú Nhuận ,Tp Huế </p>
                                <p> Hotline:18001800</p>
                            </div>

                        </div>
                    </li>
                    <li>
                        <p className='uppercase pb-2'>Liên hệ quảng cáo</p>
                        <div className='flex py-6' >
                           
                        <div className='text-sm'>
                                <p> <MailIcon className='text-blue-500 mb-1 mr-1' fontSize='inherit' />Admin@gmail.com </p>
                                <p className='hover:text-blue-300 py-2'> <FacebookIcon className='text-blue-500 mb-1 mr-1' fontSize='inherit' /><a href='#'>Facebook</a> </p>
                                <p> <PhoneIcon className='text-blue-500 mb-1 mr-1' fontSize='inherit' />15001500 </p>
                            </div>

                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}