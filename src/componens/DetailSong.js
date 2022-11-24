import React from 'react'

export default function DetailSong(props) {
  const {name,links,author} = props.song
  return (
    <div className='col-span-1 p-3'>
      <h2 className='text-lime-700 font-bold'>Now Playing</h2>
      <h2 className='text-lime-800 text-2xl h-10'>{name}</h2>
      <div className='w-[240px] m-auto mt-10 '>
        <img className='w-full rounded-xl h-64' src={links.images[0].url} alt=''></img>
      </div>
      <div className='flex justify-evenly items-center mt-10'>
        <img className='w-[70px] rounded-full' src={links.images[1].url} alt=''></img>
        <span className='text-xl text-lime-800'>{author}</span>
      </div>
    </div>
  )
}
