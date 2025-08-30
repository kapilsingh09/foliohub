"use client"
import Link from 'next/link'
import data from '../data/music_courese.json'
import { BackgroundGradient } from './ui/background-gradient'

interface courese{
        id:number,
        title: string,
        slug: string,
        description:string,
        price: number,
        
        isFeatured: boolean,
}


const FeaturedSection = () => {
   const featurecourese =  data.courese.filter((e:courese) => e.isFeatured)
  return (
    <div className='py-12 bg-gray-900' data-scroll-section>
        <div data-scroll data-scroll-speed="0.3">
            <div className='text-center flex items-center justify-center flex-col'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase '>Featured music_courese</h2>

                <p className='mt-2 text-3xl leading-8  font-extrabold tracking-tighter text-white sm:w-4xl'>Learn with the best</p>
            </div>

        </div>
        <div className='mt-10' data-scroll data-scroll-speed="0.5">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {featurecourese.map((courese:courese, index: number)=>(
                    <div key={courese.id} className='flex justify-center' data-scroll data-scroll-speed={0.2 + (index * 0.1)}>
                        <BackgroundGradient className='flex flex-col dark:bg-zinc-900 overflow-hidden text-center items-center flex-grow rounded-2xl'>

                        <p className='text-lg text-black sm:text-xl dark:text-neutral-200 mt-4'>{courese.title}</p>
                        <p className=''>{courese.description}</p>
                        <Link className='py-2 px-4 rounded-2xl border-white/20 border-2 bg-slate-900 hover:scale-105 transition-all duration-200 ease-in-out animate-pulse' href={'/course'}>
                        learn more
                        </Link >
                            </BackgroundGradient>
                    </div>
))}
            </div>
        </div>

        <div className='mt-20 text-center' data-scroll data-scroll-speed="0.4">
            <Link href={'/#'}
            
            className='py-2 px-4 rounded-2xl border-white/20 border-2 bg-slate-900 hover:scale-105 transition-all duration-200 ease-in-out animate-pulse'>
                View all courese
            </Link>
        </div>

    </div>
  )
}

export default FeaturedSection
