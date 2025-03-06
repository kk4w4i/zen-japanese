import './App.css';

import { useEffect, useState } from 'react';

import Bar from './assets/storephotos/bar.webp';
import BusinessCard from './assets/pngicons/Businesscard.png';
import DinnerIcon from './assets/pngicons/Dinner Icon.webp';
import DinnerMenu from './assets/PDF/Zen Japanese Dinner Menu.pdf';
import { Drawer } from 'vaul';
import Drinks from './assets/storephotos/drinks.webp';
import FadeGallery from './components/FadeGallery.tsx';
import Instore from './assets/storephotos/instore.webp';
import { LinearBlur } from 'progressive-blur'
import { Logo } from './assets/svg/logo.tsx';
import LunchIcon from './assets/pngicons/Lunch Icon.webp';
import LunchMenu from './assets/PDF/Zen Japanese Lunch Menu.pdf';
import DessertIcon from './assets/pngicons/Dessert Icon.webp';
import DessertMenu from './assets/PDF/Zen Japanese Dessert Menu.pdf';
import DrinkIcon from './assets/pngicons/Drink Icon.webp';
import DrinkMenu from './assets/PDF/Zen Japanese Drink Menu.pdf';
import { MenuBook, LicensedLogo } from './assets/svg/icons.tsx';
import Salmon from './assets/storephotos/salmon.webp';
import Salmon2 from './assets/storephotos/salmon2.webp';
import Serving from './assets/storephotos/serving.webp';
import StorePhoto from './assets/storephotos/store-front.webp';
import StoreSign from './assets/storephotos/store-sign.webp';
import TAMenu from './assets/PDF/Zen Japanese Takeaway Menu.pdf'
import TAMenuIcon from './assets/pngicons/Takeaway Icon.webp'
import { X } from 'lucide-react';
import Yamazaki from './assets/storephotos/yamazaki.webp';

interface GalleryItem {
  image: string;
  color: string;
}

const gallery: Record<number, GalleryItem> = {
  0: { image: StorePhoto, color: "#514C45" },
  1: { image: StoreSign, color: "#5B5C53" },
  2: { image: Yamazaki, color: "#706053" },
  3: { image: Serving, color: "#BE9A5E" },
  4: { image: Bar, color: "#9B938E" },
  5: { image: Salmon, color: "#9E9B99" },
  6: { image: Drinks, color: "#D8D5CB" },
  7: { image: Salmon2, color: "#848484" },
  8: { image: Instore, color: "#AC9A8D" }
};
  
const App: React.FC = () => {
  const [slide, setSlide] = useState<number>(0);

  const updateThemeColor = (color: string) => {
    let themeColorMetaTag = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    if (!themeColorMetaTag) {
      themeColorMetaTag = document.createElement('meta') as HTMLMetaElement;
      themeColorMetaTag.name = "theme-color";
      document.head.appendChild(themeColorMetaTag);
    }
    themeColorMetaTag.content = color;
  };

  const slideLeft = () => {
    const newSlide = slide === 0 ? Object.keys(gallery).length - 1 : slide - 1;
    setSlide(newSlide);
    updateThemeColor(gallery[newSlide].color);
  };

  const slideRight = () => {
    const newSlide = slide === Object.keys(gallery).length - 1 ? 0 : slide + 1;
    setSlide(newSlide);
    updateThemeColor(gallery[newSlide].color);
  };

  useEffect(() => {
    updateThemeColor(gallery[slide].color);
  }, [slide]);

  return (
    <>
      <LinearBlur
        // The resolution of the blur. Higher values will result in a more detailed blur, but will be more computationally expensive. Default is 8.
        steps={5}
        // The blur radius of the blur in pixels at the peak of the gradient. Default is 64.
        strength={100}
        // How much of the blur is falloff. 0 means no falloff, 100 means the entire blur is falloff. Default is 100.
        falloffPercentage={100}
        // The tint applied to the blur. This can be any valid CSS color. Default is transparent.
        tint="rgba(0, 0, 0, 0.1)"
        // You can pass any div props to the component. Useful for positioning.
        style={{
            position: "absolute",
            inset: 0,
            top: 0,
            height: "5vh",
            zIndex: 60,
        }}
            // Same props as RadialBlur, but with an additional side prop that specifies the direction of the gradient and the transform origin so it's easy to scale in the right direction. Default is "top".
            side="top"
        />
      <FadeGallery isActive={slide} gallery={Object.fromEntries(Object.entries(gallery).map(([key, value]) => [key, value.image]))} />
      <button className='fixed w-[50%] h-screen z-30 cursor-w-resize' onClick={slideLeft} />
      <button className='fixed right-0 w-[50%] h-screen z-30 cursor-e-resize' onClick={slideRight} />
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button className='fixed flex justify-center items-center gap-3 left-10 top-10 font-serif text-white text-[1.2rem] cursor-pointer z-40'>
            <MenuBook />Menu
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Content className='fixed h-screen w-screen flex justify-center items-center backdrop-blur-sm z-50'>
            <div className='relative flex flex-col md:justify-center items-center w-full h-full pt-10 font-serif text-white text-[1.2rem] overflow-auto'>
              <div className='flex flex-col md:grid md:grid-cols-3'>
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
                      <img className='object-contain' src={DinnerIcon} alt="Dinner Icon" />
                    </button>
                  </a>
                </div>
                <div className='p-10 flex flex-col items-center gap-5 justify-center'>
                  Takeaway
                  <a href={TAMenu} target="_blank" rel="noopener noreferrer">
                    <button>
                      <img className='object-contain' src={TAMenuIcon} alt="Dinner Icon" />
                    </button>
                  </a>
                </div>
              </div>
              <div className='flex flex-col md:grid md:grid-cols-2 md:w-[70%]'>
                <div className='p-10 flex flex-col items-center gap-5 justify-center'>
                  Drinks
                  <a href={DrinkMenu} target="_blank" rel="noopener noreferrer">
                    <button>
                      <img className='object-contain' src={DrinkIcon} alt="Lunch Icon" />
                    </button>
                  </a>
                </div>
                <div className='p-10 flex flex-col items-center gap-5 justify-center'>
                  Desserts
                  <a href={DessertMenu} target="_blank" rel="noopener noreferrer">
                    <button>
                      <img className='object-contain h-[30vh]' src={DessertIcon} alt="Dinner Icon" />
                    </button>
                  </a>
                </div>
              </div> 
            </div>
            <Drawer.Close>
              <button className='absolute right-10 top-10 font-serif text-white text-[1.2rem] cursor-pointer z-20'>
                <X />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button className='fixed right-10 top-10 font-serif text-white text-[1.2rem] cursor-pointer z-40'>
            Contact
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Content className='fixed h-screen w-screen backdrop-blur-sm z-50'>
            <img className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]' src={BusinessCard} />
            <div className='absolute w-full left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center z-40'>
              <a href="https://www.google.com/maps/place/Zen+Japanese/@-26.6860014,153.0506864,15z/data=!4m6!3m5!1s0x6b9377b299142165:0x131c62d91e3b9c5!8m2!3d-26.6860014!4d153.0506864!16s%2Fg%2F11w1gn_vzk?entry=ttu" target="_blank" rel="noopener noreferrer" className='font-mono text-[0.9rem] hover:underline'>
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
                <X />
              </button>
            </Drawer.Close>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <div className='fixed right-[42%] md:right-[30%] top-[30%] z-20'>
        <span className='flex h-5 w-5'>
          <span className="relative flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-gray-200"></span>
          </span>
        </span>
        <p className='absolute bottom-7 left-2 w-[10rem] font-serif text-white text-[0.8rem]'>Tap anywhere to scroll</p>
      </div>
      <div className='fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-20'>
        <Logo />
      </div>
      <div className='flex-col fixed bottom-10 left-10 text-[1rem] md:text-[1.5rem] z-20'>
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

      <div className='fixed bottom-10 right-10 z-20'>
        <LicensedLogo/>
      </div>
    </>
  );
}

export default App;