import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Navbar({ hidden }) {
  const router = useRouter()
  return (
    <nav style={{ zIndex: "999" }} className={`fixed w-2/3 md:w-1/6 h-full top-0 right-0 bg-primry py-4 z-50  ${hidden ? "hidden md:block" : null}`}>
      <div className="flex justify-center mb-6">
        <svg className='w-[91px] h-[48px]'>
          <use href='#Logo'></use>
        </svg>
      </div>
      <ul className='space-y-1 z-50'>
        <li className={`w-full px-5 py-2 ${router.pathname == "/" ? "navLink__active" : "font-VazirR text-deactivate"}`}>
          <Link href={"/"} className='flex gap-x-3.5 items-center w-fit'>
            <svg className='w-6 h-6'>
              <use href='#home'></use>
            </svg>
            داشبورد
          </Link>
        </li>

        <li className={`w-full px-5 py-2   ${router.pathname == "/CreateWork" ? "navLink__active" : "font-VazirR text-deactivate"}`}>
          <Link href={"/CreateWork"} className='flex gap-x-3.5 items-center w-fit'>
            <svg className='w-6 h-6'>
              <use href='#plus'></use>
            </svg>
            ایجاد کار
          </Link>
        </li>

        <li className={`w-full px-5 py-2 ${router.pathname == "/users" ? "navLink__active" : "font-VazirR text-deactivate"}`}>
          <Link href={"/users"} className='flex gap-x-3.5 items-center w-fit'>
            <svg className='w-6 h-6'>
              <use href='#users'></use>
            </svg>
            معرفی اشخاص
          </Link>
        </li>

        <li className={`w-full px-5 py-2   ${router.pathname == "/Financial" ? "navLink__active" : "font-VazirR text-deactivate"}`}>
          <Link href={"/Financial"} className='flex gap-x-3.5 items-center w-fit'>
            <svg className='w-6 h-6'>
              <use href='#docs'></use>
            </svg>
            سوابق مالی
          </Link>
        </li>

        <li className={`w-full px-5 py-2   ${router.pathname == "/category" ? "navLink__active" : "font-VazirR text-deactivate"}`}>
          <Link href={"/category"} className='flex gap-x-3.5 items-center w-fit'>
            <svg className='w-6 h-6 '>
              <use href='#category'></use>
            </svg>
            کارتابل
          </Link>
        </li>

        <li className={`w-full px-5 py-2   ${router.pathname == "/Bulletin" ? "navLink__active" : "font-VazirR text-deactivate"}`}>
          <Link href={"/Bulletin"} className='flex gap-x-3.5 items-center w-fit'>
            <svg className='w-6 h-6 '>
              <use href='#folder'></use>
            </svg>
            تابلو اعلانات
          </Link>
        </li>

        <li className={`w-full px-5 py-2   ${router.pathname == "/setting" ? "navLink__active" : "font-VazirR text-deactivate"}`}>
          <Link href={"/setting"} className='flex gap-x-3.5 items-center w-fit'>
            <svg className='w-6 h-6 '>
              <use href='#setting'></use>
            </svg>
            تنظیمات
          </Link>
        </li>
        <li className={`w-full px-5 py-2   ${router.pathname == "/send" ? "navLink__active" : "font-VazirR text-deactivate"}`}>
          <Link href={"/send "} className='flex gap-x-3.5 items-center w-fit'>
            <svg className='w-6 h-6 '>
              <use href='#send '></use>
            </svg>
            پیام رسان
          </Link>
        </li>

        <li className={`w-full px-5 py-2   ${router.pathname == "/Charge" ? "navLink__active" : "font-VazirR text-deactivate"}`}>
          <Link href={"/Charge "} className='flex gap-x-3.5 items-center w-fit'>
            <svg className='w-6 h-6 '>
              <use href='#graph '></use>
            </svg>
            شارژ
          </Link>
        </li>

        <li className={`w-full px-5 py-2   ${router.pathname == "/logout" ? "navLink__active" : "font-VazirR text-deactivate"}`}>
          <Link href={"/logout "} className='flex gap-x-3.5 items-center w-fit'>
            <svg className='w-6 h-6 '>
              <use href='#logout '></use>
            </svg>
            خروج
          </Link>
        </li>

      </ul>
    </nav>
  )
}
