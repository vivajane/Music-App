import { useState, useEffect } from 'react';
import { allAssets } from '../apiRequest/ApiRequest';
import Items from './Items';

const GalleryItem = () => {
    const [assets, setAsset] = useState([])
   useEffect(() => {
    const asset = async() => {
        try{
            const res = await allAssets()
            console.log(res.data.albums, "this is the response")
            setAsset(res.data.albums)

        }catch(error){
            console.log(error)
        }
    }
    asset();
   },[])
  return (
    <div>
        {
          assets.map((asset, id) => (
            <Items key={id} artists={asset.artists} images={asset.images} tracks={asset.tracks}/>
          )
          )
        }
    </div>
  )
}
export default GalleryItem


