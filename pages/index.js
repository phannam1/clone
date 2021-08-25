import Head from 'next/head'
import Image from 'next/image'
import Header from './component/header'
import Link from 'next/link'
import Footer from './component/footer'
import Body from './home'

export default function Home() {
  return (
    <div className='overflow-y-scroll'>
      <div className='container max-w-screen-2xl m-auto  '>
        <Head>
          <title >Tin tức tổng hợp - giải trí - xã hội</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <main >
          <Header />
          <Body/>
          <Footer />
        </main>


      </div>
    </div>
  )
}
