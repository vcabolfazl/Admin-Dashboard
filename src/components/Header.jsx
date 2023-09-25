import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from './navbar'

export default function Header() {
 const [showMenu, setShowMenu] = useState(true)
 return (
  <>
   <header className='fixed top-0 left-0 w-full md:w-5/6 md:px-5 md:pt-3.5'>
    <div className="w-full flex items-center justify-between bg-primry px-2 md:px-6 py-2 md:rounded-lg">
     <svg className="block md:hidden w-8 h-8" onClick={() => setShowMenu(status => !status)}>
      <use href='#menu'></use>
     </svg>
     <Navbar hidden={showMenu} />
     <svg className='block md:hidden w-[91px] h-[48px]'>
      <use href='#Logo'></use>
     </svg>

     <ul className='hidden md:flex gap-x-4 lg:gap-x-14 items-center'>
      <li>
       <Link href={"#"}>
        دبیرخانه
       </Link>
      </li>
      <li>
       <Link href={"#"}>
        بیمه
       </Link>
      </li>
      <li>
       <Link href={"#"}>
        مالیات
       </Link>
      </li>
      <li>
       <Link href={"#"}>
        اضافه کاری
       </Link>
      </li>
      <li>
       <Link href={"#"}>
        مرخصی
       </Link>
      </li>
     </ul>
     <div className="flex items-center gap-x-3 font-VazirM">
      <svg className="w-10 h-10">
       <use href='#profile'></use>
      </svg>
      <p className='hidden md:block'>ابوالفضل شریفی</p>
     </div>
    </div>
   </header>
   <div className={`fixed top-0 left-0 w-1/3 h-full z-20 bg-black/40 md:hidden ${showMenu ? "hidden" : "block"}`} onClick={() => setShowMenu(status => !status)}></div >
  </>
 )
}
