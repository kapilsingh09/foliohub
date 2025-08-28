export default function GridLayout() {
    return (
      <div className="grid gap-6  space-x-8 p-10">
        {/* First Row: 75% / 25% */}
        <div className="grid grid-cols-4 h-64 gap-2">
          <div className="col-span-2  rounded-2xl flex items-center object-cover justify-center text-white">
          <video
            src="/car-3.mp4"
            className="w-full h-60 md:h-64 object-cover rounded-2xl"
            loop
            autoPlay
            muted
            playsInline
          />
          </div>
          <div className="col-span-2 bg-green-500 rounded-2xl flex items-center justify-center text-white">
            25%
          </div>
        </div>
  
        {/* Second Row: 25% / 75% */}
        <div className="grid grid-cols-4 h-60 gap-2">
          <div className="col-span-1 bg-purple-500 rounded-2xl flex items-center justify-center text-white">
            25%
          </div>
          <div className="col-span-3 bg-red-500 rounded-2xl flex items-center justify-center text-white">
            75%
          </div>
        </div>
  
        {/* Third Row: 50% / 50% */}
        <div className="grid grid-cols-2 h-60 gap-2">
          <div className="bg-yellow-500 rounded-2xl flex items-center justify-center text-white">
            50%
          </div>
          <div className="bg-pink-500 rounded-2xl flex items-center justify-center text-white">
            50%
          </div>
        </div>
      </div>
    );
  }
  