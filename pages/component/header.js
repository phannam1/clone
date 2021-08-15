import React from 'react'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import PhoneIcon from '@material-ui/icons/Phone';
import VideocamIcon from '@material-ui/icons/Videocam';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import EmailIcon from '@material-ui/icons/Email';
import LandscapeIcon from '@material-ui/icons/Landscape';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import CategoryIcon from '@material-ui/icons/Category';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import DialerSipIcon from '@material-ui/icons/DialerSip';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import TextsmsIcon from '@material-ui/icons/Textsms';
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
                            <div className='opacity-0 hidden md:group-hover:block group-hover:opacity-100    transition-all duration-500 items-center' >
                                <ul className='absolute bg-red-500  rounded pb-2 text-gray-200 mt-1 mr-3 ' >
                                    <li className=' flex items-center hover:text-gray-300 px-2 py-3'><a href='#'>Vietnamese</a></li>
                                </ul>
                            </div>
                        </div>
                        <li className='group'>
                            <a className='uppercase relative ' href='#'>Support</a>
                            <div className='opacity-0 hidden md:group-hover:block group-hover:opacity-100  transition-all duration-500'>
                                <ul className='bg-red-500 px-4  rounded absolute text-gray-200 text-center mt-3' >
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
            <div className='h-16  w-full flex items-center justify-between'>
                <div>
                    <img className='h-auto w-34 max-h-14' src='/images/home.png' />
                </div>
                <ul className='inline-flex text-sm'>
                    <li className='group '>
                        <a className='px-6 hover:border-b-2 hover:border-blue-600 pb-5' href='#'>Product</a>
                        <div className='absolute justify-around flex items-stretch  py-6 my-5 shadow  rounded-b-md -ml-56 hidden md:group-hover:flex opacity-0 group-hover:opacity-100'>
                            <div className='w-1/3'>
                                <div className='font-bold border-b border-gray-100 pb-6  mx-16' >
                                    Channels
                                </div>
                                <ul className='pt-6  mx-16 max-w-md'>
                                    <li >
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <ChatBubbleOutlineIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Messaging</div>
                                            </div>
                                        </a>
                                        <p className='text-xs  ml-8'> Send and receive text messages</p>
                                        <div className='ml-8 mt-1'>
                                            <a className='text-xs text-blue-500 underline' href='#'>SMS <ArrowRightAltIcon fontSize='inherit' /> </a>
                                            <a className='text-xs text-blue-500 underline' href='#'>WhatsApp <ArrowRightAltIcon fontSize='inherit' /> </a>
                                            <a className='text-xs text-blue-500 underline' href='#'>Chat  <ArrowRightAltIcon fontSize='inherit' /></a>
                                        </div>
                                    </li>
                                    <li className='pt-8' >
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <PhoneIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Programmable Voice
                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs  ml-8'> Make, receive, and monitor calls around the world</p>
                                    </li>
                                    <li className='pt-8' >
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <VideocamIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Video
                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs  ml-8'> Build HD real-time video applications</p>
                                    </li>
                                    <li className='pt-8' >
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <WifiTetheringIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Twilio Live</div>

                                            </div>
                                        </a>
                                        <p className='text-xs ml-8'> Build interactive audio and video live streaming experiences</p>
                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <EmailIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Email</div>

                                            </div>
                                        </a>
                                        <p className='text-xs  ml-8'> Deliver email messages reliably at scale</p>
                                    </li>


                                </ul>
                            </div>
                            <div className='w-1/3'>
                                <div className='border-b border-gray-100 pb-6  mr-16 font-bold'>Applications</div>
                                <ul className='pt-6 max-w-xs '>
                                    <li >
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <LandscapeIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Twilio Flex
                                                </div>
                                            </div>
                                        </a>
                                        <p className='text-xs  ml-8'> Build with the most flexible cloud contact center</p>
                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <AirplanemodeActiveIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Marketing Campaigns
                                                </div>
                                            </div>
                                        </a>
                                        <p className='text-xs  ml-8'> Create and manage email marketing campaigns</p>
                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <CategoryIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Twilio Frontline
                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs  ml-8'> Connect employees to customers securely from anywhere</p>
                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <AttachFileIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Account Security

                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs  ml-8'> Prevent sign up fraud, account takeovers, and protect transactions</p>
                                        <div className='ml-8 mt-1'>
                                            <a className='text-xs text-blue-500 underline' href='#'>Authy<ArrowRightAltIcon fontSize='inherit' /> </a>
                                            <a className='text-xs text-blue-500 underline' href='#'>Verify <ArrowRightAltIcon fontSize='inherit' /> </a>
                                            <a className='text-xs text-blue-500 underline' href='#'>Lookup  <ArrowRightAltIcon fontSize='inherit' /></a>
                                        </div>
                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <BubbleChartIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Twilio Segment

                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs  ml-8'>Unify your customer data to power personalized engagement</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='w-1/3'>
                                <div className='border-b border-gray-100 pb-6 mr-16 font-bold'>Connectivity</div>
                                <ul className='pt-6 max-w-xs '>
                                    <li >
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <PhonelinkRingIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>
                                                    Internet of Things
                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs ml-8'> Connect IoT devices to global cellular networks</p>
                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <DialerSipIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Elastic SIP Trunking

                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs ml-8'> Deploy SIP trunks globally in minutes</p>
                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <AcUnitIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Phone Numbers



                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs ml-8'> Access local, national, and toll-free phone numbers</p>
                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>
                                            <TextsmsIcon className='text-blue-500 mr-2' />
                                            <div>
                                                <div className='font-medium'>Short Codes

                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs ml-8'> Send text and picture messages at scale</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className='group '>
                        <a className='px-6 hover:border-b-2 hover:border-blue-600 pb-5' href='#'>Solutions</a>
                        <div className='absolute justify-around flex items-stretch   my-5 shadow -ml-80 rounded-b-md hidden md:group-hover:flex opacity-0 group-hover:opacity-100 '>
                            <div className='w-1/4 pb-6'>
                                <div className='font-bold border-b border-gray-100 pt-6 pb-4 mx-8' >
                                    By Department
                                </div>
                                <ul className='pt-6  mx-8 max-w-xs'>
                                    <li >
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>Marketing
                                                </div>
                                            </div>
                                        </a>
                                        <p className='text-xs  '> Keep customers engaged on any channel</p>

                                    </li>
                                    <li className='pt-8' >
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>Operations
                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs  '> Streamline workforce operations and customer fulfillment</p>
                                        <div className=' mt-1'>
                                            <a className='text-xs text-blue-500 underline' href='#'>
                                                Alerts & Notifications  <ArrowRightAltIcon fontSize='inherit' /> </a>


                                        </div>
                                        <div className=' mt-1'>
                                            <a className='text-xs text-blue-500 underline' href='#'>Identity & Verification <ArrowRightAltIcon fontSize='inherit' /> </a>
                                        </div>
                                    </li>
                                    <li className='pt-8' >
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>Customer Service



                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs  '>Deliver personalized customer experiences at scale</p>
                                        <div className=' mt-1'>
                                            <a className='text-xs text-blue-500 underline' href='#'>

                                                Contact Center  <ArrowRightAltIcon fontSize='inherit' /> </a>


                                        </div>
                                        <div className=' mt-1'>
                                            <a className='text-xs text-blue-500 underline' href='#'>IVR & Bots<ArrowRightAltIcon fontSize='inherit' /> </a>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            <div className='w-1/4 pb-6'>
                                <div className='border-b border-gray-100 pt-6 pb-4  mr-8 font-bold'>By Industry</div>
                                <ul className='pt-6 max-w-xs '>
                                    <li >
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>Financial Services




                                                </div>
                                            </div>
                                        </a>

                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>Retail
                                                </div>
                                            </div>
                                        </a>

                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>Hospitality
                                                </div>

                                            </div>
                                        </a>

                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>Real Estate

                                                </div>

                                            </div>
                                        </a>

                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>Healthcare

                                                </div>

                                            </div>
                                        </a>

                                    </li>
                                </ul>
                            </div>
                            <div className='w-1/4 pb-6'>
                                <div className='border-b border-gray-100 pt-6 pb-4 mr-8 font-bold'>By Business</div>
                                <ul className='pt-6 max-w-xs '>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>Enterprise


                                                </div>

                                            </div>
                                        </a>

                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>Startup

                                                </div>

                                            </div>
                                        </a>

                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>
                                                    Nonprofit

                                                </div>

                                            </div>
                                        </a>

                                    </li>
                                </ul>
                            </div>
                            <div className='w-1/4 bg-gray-200 pb-6'>
                                <div className=' ml-10 border-b border-gray-100 pt-6 pb-4  mr-16 font-bold'>Resources</div>
                                <ul className='pt-6 max-w-md ml-10 mr-10 '>
                                    <li >
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>
                                                    The Current

                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs '> Discover how the world’s leading teams create and nurture meaningful customer relationships
                                        </p>
                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>Customer Stories


                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs '> See what customers are building with Twilio</p>
                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>COVID-19 Field Guide





                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs '> Build communication solutions to respond to COVID-19</p>
                                    </li>
                                    <li className='pt-8'>
                                        <a className='hover:text-blue-500 hover:underline  flex' href='#'>

                                            <div>
                                                <div className='font-medium'>
                                                    A2P 10DLC

                                                </div>

                                            </div>
                                        </a>
                                        <p className='text-xs '> Prepare for the new A2P 10DLC requirements</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
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