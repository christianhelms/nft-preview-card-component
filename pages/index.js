import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Front-End Mentor Practice Problem</title>
      </Head>
      <div className='grid place-items-center h-screen bg-dark-blue'>
        <p className='text-white font-outfit font-semibold text-2xl'>Equilibrium #3429</p>
      </div>
    </main>
  )
}
