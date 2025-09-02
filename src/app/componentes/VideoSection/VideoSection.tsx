import React from 'react'

const VideoSection = () => {
  return (
    <div className="min-h-[70vh] bg-black h-full w-full text-white flex items-center justify-center flex-col gap-8">
      <section className="flex flex-nowrap h-full w-full flex-1 items-center justify-between gap-8">
        
        {/* LEFT BOX */}
        <div className="h-[50vh] relative bg-red-500 rounded-2xl w-1/2 p-6 flex flex-col justify-between">
          
          {/* Top content */}
          <div className="flex flex-col gap-2 border  ">
            <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
              <img src="" alt="icon" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-lg font-bold">Context 1</h1>
            <p className="text-sm">Here is the paragraph for the top section.</p>
          </div>

          {/* Bottom content */}
          <div className="flex flex-col gap-2 items-end text-right border">
            <div className="w-12 h-12 bg-white rounded-full overflow-hidden">
              <img src="" alt="icon" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-lg font-bold">Context 2</h1>
            <p className="text-sm">Here is the paragraph for the bottom section.</p>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="h-[50vh] bg-purple-500 rounded-2xl w-1/2"></div>
      </section>

      {/* FULL-WIDTH BOX BELOW */}
      <div className="h-[50vh] bg-purple-500 rounded-2xl w-[95%]"></div>
    </div>
  )
}

export default VideoSection
