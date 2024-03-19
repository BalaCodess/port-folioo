import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const [toggleMenu,setToggleMenu]=useState(false);
  return <header className="flex justify-between px-2 bg-primary h-[100px]  text-center sticky">
    <a className="font-bold text-white py-10 text-4xl" href="" >Portfolio</a>
    <nav className="hidden md:block " >
    <ul className="flex text-white py-10 text-2xl ">
        <li><a>Home</a></li>
        <li><a href="#about" rel="noopener">About</a></li>
        <li><a href="#projects" rel="noopener"> Projects</a></li>
        <li><a href="#resume" rel="noopener"> Resume</a></li>
        <li><a href="#contact" rel="noopener"> Contact</a></li>
    </ul>
    </nav>
    {toggleMenu && <nav className='block md:hidden '>
    <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
        <li><a >Home</a></li>
        <li><a href="#about" rel="noopener">About</a></li>
        <li><a href="#projects" rel="noopener" > Projects</a></li>
        <li><a href="#contact" rel="noopener"> Contact</a></li>
    </ul>


    </nav>}
    <button onClick={()=>setToggleMenu(!toggleMenu)}  className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    






  </header>
}

