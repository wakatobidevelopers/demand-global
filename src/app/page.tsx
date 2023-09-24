'use client'

import Image from 'next/image'
import Link from 'next/link'
import fishermanImg from '../../public/images/fisherman.png'
import farmerImg from '../../public/images/farmer.png'
import data from '../../public/data.json'
import Products from '@/components/Products'
import Title from '@/components/text/Title'
import fs from 'fs/promises'; 
import { useState } from 'react'



export default function Home() {
  const dataProductsSlice = data.products.slice(0, 3);
  
  const [openDesc, setOpenDesc] = useState(false);

  const toggleDescription = () => (
    setOpenDesc(!openDesc)
  )

  return (
      <main className='text-lg'>
        <section 
        style={{backgroundImage: 'url(images/section1.png)'}}
        className="relative bg-cover section1 w-full md:py-48 py-10 text-white z-[1] px-4 md:text-center pt-28">
          <span className='z-[1]'>Welcome to PT HAEDIRI BINTANG SEJAHTERA</span>
          {/* <h1 className='z-[1] mt-6 font-extrabold text-4xl md:text-5xl'>Empowering Local Producers <br/> Connecting Global Markets</h1> */}
          <Title
            text='Empowering Local Producers'
            text2='Connecting Global Markets'
          />
        </section>
        <section className="section2 px-4 py-32 md:px-28">
          <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-4">
            <div className=' bg-dark-blue p-7 font-bold text-white md:h-max md:text-2xl md:-mb-6'>Unlocking Indonesia's Bounty: Our Commitment to Direct Sourcing in Kendari, Southeast Sulawesi</div>
            <div className='w-full h-72 overflow-hidden'>
              <Image
                alt='fisherman'
                src={fishermanImg}
                width={562}
              />
            </div>
            <div
              style={{backgroundImage: 'url(images/ship.png)', backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPositionY:'-10px'}}
              className='item3 relative p-7 text-lg text-white flex flex-col z-[1] md:text-2xl md:-mt-[8.5rem] justify-center'
            ><span>we are dedicated to connecting you with the rich and diverse treasures of Indonesia, sourced directly from farmers, fishermen, and micro, small, and medium enterprises in Kendari, Southeast Sulawesi.</span>
              <button 
              className='flex items-center gap-2 bg-white p-2 text-dark-blue mt-4 w-max'>
                <Link href='#'>More About Us</Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
                  <path d="M0 9H19.9007M19.9007 9L12.9355 16M19.9007 9L12.9355 2" stroke="#3D51B2" strokeWidth="3"/>
              </svg>
              </button>
            </div>
            <div className='w-full h-72 overflow-hidden object-fit'>
              <Image
                alt='farmer'
                src={farmerImg}
                width={600}
              />
            </div>
          </div>
        </section>
        <section className="section3 bg-slate-50 px-4 py-28 md:px-28">
          <h2 className='text-2xl font-bold text-dark-blue mb-8'>Why Our Products Are in <br/> Global Demand ?</h2>
          
          <div className="item grid md:grid-cols-2 md:grid-rows-3 gap-14">
            {data.items.map((item) => (
                <div key={item.id}>
                  <h3 className='text-xl font-bold text-dark-blue '>{item.id}. {item.name}</h3>
                  <p className=' text-slate-400'>{item.description}</p>
                </div>
            ))}
          </div>
          
        </section>
        <section className="products grid-cols-1 md:px-28 px-4 py-28 grid gap-8 md:grid-cols-1 md:grid-rows-1 md:row-span-2">
        <h2 className='text-2xl font-bold text-dark-blue mb-8'>Featured Products</h2>
              {dataProductsSlice.map((items, index) => (
                <div key={index}> 
                  <Products name={items.name} images={items.image} btnCLick={toggleDescription} desc={items.description} openDesc={openDesc}/>
                </div>
              ))}
        </section>
        <section className='md:px-28 px-4 py-9 text-center text-dark-blue bg-[#E8ECFF] flex flex-col items-center gap-2'>
          <h1 className='text-2xl font-bold '>Get to Know Us Better <br/>
Explore Our Company Profile</h1>
<span>Discover our story, values, and mission in our Company Profile.</span>
<div className="brn flex gap-2">
<button className='p-2 bg-dark-blue text-white w-max'>Explore Now</button>
<button className='p-2 border border-dark-blue text-dark-blue w-max'>Contact Us</button>
</div>
        </section>
      </main>

  )
}