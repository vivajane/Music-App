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
     <div>
        <img src={albums.image} alt="" />
     </div>
    </div>
  )
}

export default Album
