import './App.css'

import { Logo } from './assets/svg/logo.tsx'
import StorePhoto from './assets/store-front.webp'

function App() {

  return (
    <>
    <img className="object-cover fixed w-full h-full" src={StorePhoto}></img>
      <div className='fixed flex flex-col gap-5 h-screen w-screen justify-center items-center z-10'>
        <div>
          <Logo/>
        </div>
        <div className='flex-col fixed bottom-5 left-5 text-[1rem] md:text-[1.5rem]'>
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
    </>
  )
}

export default App
