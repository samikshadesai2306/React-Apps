import React from 'react'

export default function Card({userName="Samiksha",photo}) {
  return (
    <div>
      <div className="relative h-[400px] w-[300px] rounded-xl mb-4">
        <img
          src={photo }  alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{userName}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm  bg-black font-semibold text-white">View Profile →</button>
        </div>
      </div>
    </div>
  )
}


