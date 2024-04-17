import './App.css'
import Logo from './assets/Zen Japanese.webp'

function App() {

  return (
    <>
      <div className='flex flex-col gap-5 h-screen w-screen justify-center items-center'>
        <img className="size-[20vh] "src={Logo}></img>
        <p className='font-inter font-light'>Coming Soon...</p>
      </div>
    </>
  )
}

export default App
