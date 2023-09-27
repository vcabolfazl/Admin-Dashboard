import Link from 'next/link'
import React from 'react'

export default function error() {
 return (
  <div className="mt-28 float-left w-full md:w-5/6 md:px-5 md:pt-3.5">
   <div className="w-full h-full flex flex-wrap items-center justify-center">
    <div className="text-center">
     <h2 className='text-3xl md:text-5xl text-secondary font-VazirB text-center mb-10'>صفحه مورد نظر پیدا نشد</h2>
     <Link href={"/"} className='font-VazirM transition-all hover:bg-secondary/30 px-5 py-2 rounded-2xl border-2 border-secondary text-secondary'>
      بازگشت به صفحه اصلی
     </Link>
    </div>
    <img src="/assets/error.png" className='w-full md:w-1/2' alt="error" />
   </div>
  </div>
 )
}
