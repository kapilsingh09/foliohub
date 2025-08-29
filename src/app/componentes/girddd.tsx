import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { cn } from '../utils/cn'
const data2 = [
    {
        quote: "Music is the universal language of mankind.",
        name: "Henry Wadsworth Longfellow",
        title: "Poet"
    },
    {
        quote: "Where words fail, music speaks.",
        name: "Hans Christian Andersen",
        title: "Author"
    },
    {
        quote: "One good thing about music, when it hits you, you feel no pain.",
        name: "Bob Marley",
        title: "Musician"
    },
    {
        quote: "Music expresses that which cannot be put into words and that which cannot remain silent.",
        name: "Victor Hugo",
        title: "Writer"
    },
    {
        quote: "Without music, life would be a mistake.",
        name: "Friedrich Nietzsche",
        title: "Philosopher"
    },
    {
        quote: "Music can change the world because it can change people.",
        name: "Bono",
        title: "Singer"
    },
    {
        quote: "Music is the strongest form of magic.",
        name: "Marilyn Manson",
        title: "Musician"
    },
    {
        quote: "After silence, that which comes nearest to expressing the inexpressible is music.",
        name: "Aldous Huxley",
        title: "Writer"
    }
]
const girddd = () => {
  return (
    // <div className=''>
    // </div>
    // <div className="flex flex-col items-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
    //   <h2 className="text-2xl sm:text-3xl font-bold text-white/30  mb-6 text-center">
    //     Here our harmony : Voices of Success
    //   </h2>
     
    // </div>
     <div className="relative flex min-h-[40rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0 flex",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black">

      </div>
      {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Backgrounds
        </p> */}
       <div className="w-full max-w-6xl">
        <div className='flex items-center justify-center'> <h2 className="text-5xl sm:text-6xl font-bold text-white z-999  mb-6 text-center">
             Here our harmony : Voices of Success
         </h2>
          </div>
          <InfiniteMovingCards
            items={data2}
            direction="right"
            speed="slow"
          />
        </div>
    </div>

  )
}

export default girddd
