import Link from 'next/link'
import React from 'react'

export default function Charge() {
 return (
  <div className="mt-20 float-left w-full md:w-5/6 md:px-5 md:pt-3.5">
   <h2 className="font-VazirB text-2xl text-secondary px-5 md:px-0">صورتحساب شارژ</h2>
   <div className="grid md:grid-cols-2 mt-5 gap-4 items-center">
    <div className="relative scroll overflow-auto mt-6 max-h-[35rem] space-y-2">

     <div className="flex items-center justify-between bg-primry px-4 py-3 rounded-xl ml-1">
      <p className='font-VazirM text-lg'>شهریور ۱۴۰۱</p>
      <div className="flex gap-2">
       <p className='text-orange'>تسویه نشده</p>
       <svg className="w-6 h-6 cursor-pointer">
        <use href='#info'></use>
       </svg>
      </div>
     </div>

     <div className="flex items-center justify-between bg-primry px-4 py-3 rounded-xl ml-1">
      <p className='font-VazirM text-lg'>مرداد ۱۴۰۱</p>
      <div className="flex gap-2">
       <p className='text-green'>تسویه شده</p>
       <svg className="w-6 h-6 cursor-pointer">
        <use href='#info'></use>
       </svg>
      </div>
     </div>

    </div>
    <div className="">
     <div className="flex text-secondary items-center  gap-3" >
      <svg className="w-6 h-6">
       <use href='#docs'></use>
      </svg>
      <h2 className="font-VazirB text-xl px-5 md:px-0">آخرین صورتحساب شارژ</h2>
     </div>
     <div className="w-full mt-7 bg-primry rounded-lg px-16 py-6">
      <center className='text-lg mb-5'>شهریور ۱۴۰۱ </center>
      <div className="flex items-center justify-between mb-5">
       <p>نوع هزینه:</p>
       <p className='text-secondary'>سهم واحد</p>
      </div>
      <div className="flex items-center justify-between mb-5">
       <p>مبلغ شارژ ماه جاری:</p>
       <p>۳،۵۰۰،۰۰۰ ریال</p>
      </div>
      <div className="flex items-center justify-between mb-5">
       <p>شارژهای غیر مشترک:</p>
       <p>۴،۰۰۰،۰۰۰ ریال</p>
      </div>
      <div className="flex items-center justify-between mb-5">
       <p>جریمه دیرکرد شارژ:</p>
       <p>۱۰۰،۰۰۰ ریال</p>
      </div>
      <div className="flex items-center justify-between mb-8 text-secondary">
       <p>جمع کل:</p>
       <p>۷،۶۰۰،۰۰۰ ریال</p>
      </div>
      <div className='flex items-center justify-between bg-secondary mx-5 px-5 py-3 rounded-2xl mb-5'>
       <p>مبلغ قابل پرداخت:</p>
       <p>۷،۶۰۰،۰۰۰ ریال</p>
      </div>
      <Link href={"/"} className='text-lg font-VazirM px-6 py-2 border-2 border-green bg-green/20 text-green mx-44 rounded-xl'>
       پرداخت
      </Link>
     </div>
    </div>
   </div>
  </div>
 )
}
