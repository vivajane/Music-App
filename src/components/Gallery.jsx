
import { Routes, Route } from 'react-router-dom';
import HomeGallery from './HomeGallery';

const Gallery = () => {
  return (
    <div className='bg-blue-500 w-full overflow-auto h-full'>
        <Routes>
            <Route path='/' element={<HomeGallery/>}/>
        </Routes>
        
      
    </div>
  )
}

export default Gallery
