import React from 'react';
import CardHeader from '../component/cardHeader'
export default function Home() {
    const abc = [1, 2, 3, 4]
    return (
        <div className='container max-w-screen-2xl mt-10'>
            <ul className='md:flex md:justify-around justify-center ' >
                <li ><CardHeader /></li>
                <li className='md:mx-1 lg:mx-1 xl:mx-0'><CardHeader /></li>
                <li><CardHeader /></li>
                <li className='md:ml-1 lg:ml-1 xl:ml-0' ><CardHeader /></li>
            </ul>


        </div>
    )
}