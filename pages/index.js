import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Front-End Mentor Practice Problem</title>
      </Head>
      <div className='grid place-items-center h-screen bg-dark-blue'>
        <div>
          <Image 
            src={'/image-equilibrium.jpg'}
            width={400}
            height={400}
          />
          <p className='text-white font-outfit font-semibold text-2xl'>Equilibrium #3429</p>
          <p className='text-dark-gray font-outfit text-lg font-light'>Our Equilibrium collection promotes balance and calm.</p>
        </div>
      </div>
    </main>
  )
}
