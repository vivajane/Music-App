import React from 'react'
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import { Albums } from '../assets/asset';
import { PopularItems } from '../assets/popular';



const Album = () => {
    const{id} = useParams()
    // console.log(id)
    const albums = Albums.find((e) => e.id === parseInt(id)) || PopularItems.find((e) =>e.id === parseInt(id));
    console.log(albums, "FROM ALBUMS")
  return (
    <div>
     <NavBar/>
     <div className='mx-auto my-10'>
        <h1 className='text-center text-3xl font-bold'>{albums.name}</h1>
        <img src={albums.image} alt="" className='mx-auto' />
     </div>
    </div>
  )
}

export default Album
