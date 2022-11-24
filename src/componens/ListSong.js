import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {useState} from "react"
import { useEffect } from 'react'
export default function ListSong(props) {
  const productList = useSelector(state => state.songList.songs)
  const [state, setState] = useState(0)
  const {handleSetSong, song} = props
  const handlePlaySong =(state)=>{ 
    setState(state)
    handleSetSong(state)
  }
  useEffect(() => {
    setState(song.id)
  }, [song])
  return (
    <div className='col-span-2 overflow-y-scroll'>
      <table className='table-auto w-full text-lime-700 '>
        <thead className='h-12 text-lime-900'>
          <tr>
            <th className='w-[10%]'>#</th>
            <th className='text-left'>Title</th>
            <th className='w-[10%]'>Author</th>
            <th className='w-[10%]'><i className='fa fa-download'></i></th>
          </tr>
        </thead>
        <tbody className='mt-2 shadow'>
          {productList.map(item => {
            const {id,name,author,url} = item
            return (
              <tr key={id} onClick={()=>{handlePlaySong(id)}} className={clsx(' bg-emerald-200 h-12 font-semibold bg-opacity-50 p-3 hover:bg-emerald-100 hover:text-orange-600',{'bg-emerald-100 text-orange-600 ': id ===state})}>
                <td className='text-center'>{id+1}</td>
                <td >{name}</td>
                <td className='text-center'>{author}</td>
                <td className='text-center'><a href={url}><i className='fa fa-download text-lime-600 text-sm'></i></a></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
