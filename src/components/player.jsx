import React from 'react'
import {songsData} from '../assets/assets'

function player() {
  return (
    <div className='h-[10%] bg-[#000] flex justify-between items-center text-white'>
        <div className='hidden lg:flex items-center gap-4'>
            <img src={songsData[0].image} alt="" />

        </div>
    </div>
  )
}

export default player