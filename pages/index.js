import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Front-End Mentor Practice Problem</title>
      </Head>
      <div className='grid place-items-center h-screen bg-dark-blue'>
        <div className='bg-darkish-blue w-96	w-2/3 rounded-md p-6'>
          <Image 
            className='rounded-md'
            src={'/image-equilibrium.jpg'}
            width={400}
            height={400}
          />
          <p className='text-white font-outfit font-semibold text-2xl pb-2 pt-2'>Equilibrium #3429</p>
          <p className='text-dark-gray font-outfit text-lg font-light pb-2'>Our Equilibrium collection promotes balance and calm.</p>
          <div className='flex flex-row border-b-2 border-very-dark-gray pb-4'>
            <div className='flex flex-row items-center'>
            <img 
              className='relitive pr-1'
              src='/icon-ethereum.svg' 
              alt='Eth' 
            />
            <p className='text-mint-blue font-outfit font-normal'>0.041 ETH</p>
            </div>
            <div className='flex flex-row items-center'>
            <img 
              className='relitive pr-1'
              src='/icon-clock.svg' 
              alt='Time Left ' 
            />
            <p className='text-dark-gray font-outfit font-light'>3 days left</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
