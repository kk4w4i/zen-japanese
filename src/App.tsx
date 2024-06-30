import './App.css'

import Bar from './assets/storephotos/bar.webp'
import Drinks from './assets/storephotos/drinks.webp'
import FadeGallery from './components/FadeGallery.tsx'
import Instore from './assets/storephotos/instore.webp'
import { Logo } from './assets/svg/logo.tsx'
import { MenuBook } from './assets/svg/icons.tsx'
import Salmon from './assets/storephotos/salmon.webp'
import Salmon2 from './assets/storephotos/salmon2.webp'
import Serving from './assets/storephotos/serving.webp'
import StorePhoto from './assets/storephotos/store-front.webp'
import StoreSign from './assets/storephotos/store-sign.webp'
import Yamazaki from './assets/storephotos/yamazaki.webp'
import { useState } from 'react';

function App() {
  const [slide, setSlide] = useState(0);

  const gallery = {
    0: StorePhoto,
    1: StoreSign,
    2: Yamazaki,
    3: Serving,
    4: Bar,
    5: Salmon,
    6: Drinks,
    7: Salmon2,
    8: Instore
  }

  const slideLeft = () => {
    if (slide === 0) {
      setSlide(Object.keys(gallery).length - 1)
    } else {
      setSlide(slide - 1)
    }
  }

  const slideRight = () => {
    if (slide === (Object.keys(gallery).length - 1)) {
      setSlide(0)
    } else {
      setSlide(slide + 1)
    }
  }
  
  return (
    <div className='w-screen h-screen'>
      <FadeGallery isActive={slide} gallery={gallery}/>
      <button className='fixed w-[50%] h-full z-10 cursor-w-resize' onClick={slideLeft}/>
      <button className='fixed right-0 w-[50%] h-full z-10 cursor-e-resize' onClick={slideRight}/>
      <button className='fixed flex justify-center items-center gap-3 left-10 top-10 z-20 font-serif text-white text-[1.2rem] cursor-pointer'>
        <MenuBook/>Menu
      </button>
      <div className='fixed right-[20%] top-[45%] z-5'>
        <span className='flex h-5 w-5'>
          <span className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-gray-200"></span>
          </span>
        </span>
        <p className='absolute bottom-5 left-7 w-[6rem] font-serif text-white text-[0.8rem]'>Tap to scroll</p>
      </div>
      <div className='fixed flex flex-col gap-5 h-screen w-screen justify-center items-center z-2'>
        <div className='mb-20'>
          <Logo/>
        </div>
        <div className='flex-col fixed bottom-10 left-10 text-[1rem] md:text-[1.5rem]'>
          <p className='font-serif  text-white'>
            Opening Hours:
          </p>
          <p className='font-serif  text-white'>
            Monday 
          </p>
          <p className='font-serif text-white'>
            Lunch 10:30 ~ 14:30
          </p>
          <p className='font-serif  text-white'>
            Tuesday to Saturday
          </p>
          <p className='font-serif  text-white'>
            Lunch 10:30 ~ 14:30
          </p>
          <p className='font-serif  text-white'>
            Dinner 17:00 ~ 20:30
          </p> 
        </div>
      </div>
    </div>
  )
}

export default App
