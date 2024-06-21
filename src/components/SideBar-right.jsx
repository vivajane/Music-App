
import { allAssets } from '../apiRequest/ApiRequest';
import { useEffect, useState } from 'react';
const SideBarRight = () => {
  const[getArtist, setGetArtist] = useState([]);
  useEffect(() =>{
    const getArtist = async() => {
      try{
        const res = await allAssets(
          // setGetArtist(res.albums)
          
        )
        console.log(res)

      }catch(error){
        console.log(error)

      }
    }
    getArtist()
  },[])
  return (
    <div>
      
    </div>
  )
}

export default SideBarRight



