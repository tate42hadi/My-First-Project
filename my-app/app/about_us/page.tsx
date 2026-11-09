import Image from 'next/image'
import React from 'react'

export default function About_Us() {
  return (
    <div className='my-15'>
        <div className='items-center flex my-15 flex-col gap-4 justify-center'>
            <Image src={"/logo_text.webp"} alt='logo text' height={100} width={250}/>
            <h1 className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 text-center">Empowering Your Connection to a Faster, Smarter, and Boundless World</h1>
        </div>
        <div className='my-20 flex flex-col gap-y-11'>
            <h2 className='md:text-2xl text-[15px] px-5 md:px-10 text-blue-500 md:text-start text-center font-semibold'>(-Hindukush Bridge: Connecting Afghanistan to the Digital World-)</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center md:px-8 px-4 gap-5'>
                <p className='text-slate-500 text-xl hover:text-slate-600 transition-colors'>Hindukush Bridge ICT Services Company is a Kabul-based, 100% Afghan-owned provider of internet and ICT services, catering to NGOs, government entities, businesses, and home users across Afghanistan. Managed by a team of experienced professionals with over a decade of expertise in the ISP and ICT sectors, the company ensures reliable, high-quality services.</p>
                <Image src={"/about1.webp"} alt='about1' height={250} width={500}/>
                <p className='text-slate-500 text-xl hover:text-slate-600 transition-colors'>With strong partnerships in the satellite and telecom industries, Hindukush Bridge offers value-added services nationwide, supported by a 24/7 Network Operation Center. Operating under License No. 66724 issued by the Ministry of Commerce and Industry, the company employs skilled professionals specializing in project management, surveying, analysis, budgeting, reporting, and data solutions.</p>
            </div>
        </div>
        <div className='my-15 justify-center flex-col md:px-14 px-4'>
            <div className='flex justify-center items-center md:flex-row flex-col gap-y-4 gap-x-8'>
                <p className='text-xl text-slate-500 font-semibold'>High-speed internet coverage in Kabul</p>
                <h3 className='text-3xl text-blue-500 font-bold'>Covered Provinces</h3>
                <p className='text-xl text-slate-500 font-semibold'>Herat, Mazar-e-Sharif and Jowzjan.</p>
            </div>
            <div className='flex py-10 items-center justify-center'>
                <Image src={"/map.webp"} alt='map' height={400} width={800} className='w-250'/>
            </div>
        </div>
    </div>
  )
}
