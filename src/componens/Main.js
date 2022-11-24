import React from 'react'
import DetailSong from './DetailSong'
import ListSong from './ListSong'
import Player from './Player'
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux'
import { useState } from 'react'
export default function Main() {
  const songList = useSelector(state => state.songList.songs) 
  const [song, setSong] = useState(songList[0])
  const handleSetSong = (idSong)=>{
    const changeSong =songList.find(song=>song.id===idSong)
    setSong(changeSong)
  }
  return (
    <div >
        <div className='h-screen-main-player grid grid-cols-3 bg-emerald-200 bg-opacity-70 overflow-hidden '>
        <DetailSong song={song}/>
        <ListSong song ={song} setSong ={setSong} handleSetSong={handleSetSong}/>
        </div>
        <Player song={song} handleSetSong={handleSetSong}/>
    </div>
  )
}
