import './App.css'

import Bar from './assets/storephotos/bar.webp'
import  BusinessCard from './assets/pngicons/Businesscard.png'
import DinnerIcon from './assets/pngicons/dinnericon.png'
import DinnerMenu from './assets/PDF/Zen Japanese Dinner Menu.pdf'
import { Drawer } from 'vaul';
import Drinks from './assets/storephotos/drinks.webp'
import FadeGallery from './components/FadeGallery.tsx'
import Instore from './assets/storephotos/instore.webp'
import { Logo } from './assets/svg/logo.tsx'
import LunchIcon from './assets/pngicons/lunchicon.png'
import LunchMenu from './assets/PDF/Zen Japanese Lunch Menu.pdf'
import { MenuBook } from './assets/svg/icons.tsx'
import Salmon from './assets/storephotos/salmon.webp'
import Salmon2 from './assets/storephotos/salmon2.webp'
import Serving from './assets/storephotos/serving.webp'
import StorePhoto from './assets/storephotos/store-front.webp'
import StoreSign from './assets/storephotos/store-sign.webp'
import { X } from 'lucide-react';
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
    <>
      <FadeGallery isActive={slide} gallery={gallery}/>
      <button className='fixed w-[50%] h-screen z-10 cursor-w-resize' onClick={slideLeft}/>
      <button className='fixed right-0 w-[50%] h-screen z-10 cursor-e-resize' onClick={slideRight}/>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button className='fixed flex justify-center items-center gap-3 left-10 top-10 font-serif text-white text-[1.2rem] cursor-pointer z-20'>
            <MenuBook/>Menu
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Content className='fixed h-screen w-screen flex justify-center items-center backdrop-blur-sm z-30'>
            <div className='relative flex flex-col md:grid md:grid-cols-2 w-full h-full pt-10 font-serif text-white text-[1.2rem] overflow-auto'>
              <div className='p-10 flex flex-col items-center gap-5 justify-center'>
                Lunch
                <a href={LunchMenu} target="_blank" rel="noopener noreferrer">
                  <button>
                    <img className='object-contain' src={LunchIcon} alt="Lunch Icon" />
                  </button>
                </a>
              </div>
              <div className='p-10 flex flex-col items-center gap-5 justify-center'>
                Dinner
                <a href={DinnerMenu} target="_blank" rel="noopener noreferrer">
                  <button>
                    <img className='object-contain' src={DinnerIcon} alt="Dinner Icon"/>
                  </button>
                </a>
              </div>
            </div>
            <Drawer.Close>
              <button className='absolute right-10 top-10 font-serif text-white text-[1.2rem] cursor-pointer z-20'>
                <X/>
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button className='fixed right-10 top-10 font-serif text-white text-[1.2rem] cursor-pointer z-20'>
            Contact
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Content className='fixed h-screen w-screen backdrop-blur-sm z-30'> 
            <img className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]' src={BusinessCard}/>
            <div className='absolute w-full left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center z-40'>
              <a href="https://www.google.com/maps/search/?api=1&query=11/43+Burnett+St+Buderim+4556+QLD" target="_blank" rel="noopener noreferrer" className='font-mono text-[0.9rem] hover:underline'>
                11/43 Burnett St Buderim 4556 QLD
              </a>
              <section className='flex items-center gap-2'>
                <a href="tel:+61754789476" className='font-mono text-[0.9rem] hover:underline'>
                  07 5478 9476
                </a>
                -
                <a href="mailto:contact@zen-japanese.com" className='font-mono text-[0.9rem] hover:underline'>
                  contact@zen-japanese.com
                </a>
              </section>
              <section className='flex items-center gap-2'>
                <a href="https://www.instagram.com/zen_japanese" target="_blank" rel="noopener noreferrer" className='font-mono text-[0.9rem] hover:underline'>
                  @zen_japanese
                </a>
                -
                <a className='font-mono text-[0.9rem]'>
                  www.zen-japanese.com
                </a>
              </section>
              
            </div>
            <Drawer.Close>
              <button className='absolute right-10 top-10 font-serif text-white text-[1.2rem] cursor-pointer z-20'>
                <X/>
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <div className='fixed right-[30%] top-[40%]'>
        <span className='flex h-5 w-5'>
          <span className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-gray-200"></span>
          </span>
        </span>
        <p className='absolute bottom-5 left-7 w-[6rem] font-serif text-white text-[0.8rem]'>Tap to scroll</p>
      </div>
      <div className='fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'>
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
    </>
  )
}

export default App
