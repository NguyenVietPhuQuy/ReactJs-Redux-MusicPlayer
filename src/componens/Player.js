import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import './Player.module.css'
import clsx from 'clsx'
export default function Player(props) {
  const {url,id}= props.song
  const {handleSetSong} = props
  const handleNextSong = ()=>{
    handleSetSong(id +1)
  }
  const handlePrevSong = ()=>{
    if(id<1) {return id === 1}
    else {handleSetSong(id -1)}
  }
  return (
    <div >
        <AudioPlayer className={clsx('bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-500')}
         src={url} showSkipControls={true} 
         onClickNext ={handleNextSong}
         onClickPrevious ={handlePrevSong}
         />
    </div>
  )
}
