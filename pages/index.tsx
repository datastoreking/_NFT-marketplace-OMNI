import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Mint from '../components/Mint'
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect (()=>{
    Aos.init({ duration: 1000 });
  }, [])
  const router = useRouter()

  return (
    <div className='w-full main'>
      <Head>
        <title>Caveat NFT marketplace</title>
        <meta name='description' content='Caveat NFT marketplace'/>
        <link rel='icon'href="/static/favicon.ico" />
      </Head>
      <Mint />
    </div>
  )
}
