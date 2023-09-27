import Link from 'next/link'
import React from 'react'

export default function Financial() {
 return (
  <div className="mt-20 float-left w-full md:w-5/6 md:px-5 md:pt-3.5">
   <h2 className="font-VazirB text-2xl text-secondary px-5 md:px-0">سوابق مالی</h2>


   <div className="relative scroll overflow-auto mt-6 max-h-[30rem]">
    <table className="w-full text-sm text-center px-2">
     <thead className="bg-[#448BFF]/10">
      <tr>
       <th scope="col" className="py-3 rounded-s-lg pr-2">
        مبلغ تراکنش
       </th>
       <th scope="col">
        تاریخ
       </th>
       <th scope="col">
        از طریق
       </th>
       <th scope="col" className='py-3  rounded-l-lg'>
        وضعیت
       </th>
      </tr>
     </thead>
     <tbody>
      <tr className=" bg-primry">
       <td scope="row" className="py-3 rounded-s-lg pr-2">
        ۲۵۰،۰۰۰ ریال
       </td>
       <td>
        ۱۴۰۱/۱۱/۰۵ − ۲۱:۵۸:۱۲
       </td>
       <td>
        درگاه بانکی
       </td>
       <td className='rounded-l-lg text-green'>
        تایید شده
       </td>
      </tr>
      <tr className=" bg-primry">
       <td scope="row" className="py-3 rounded-s-lg pr-2">
        ۳۰۰،۰۰۰ ریال
       </td>
       <td>
        ۱۴۰۱/۱۱/۰۵ − ۱۹:۳۵:۴۵
       </td>
       <td>
        کارت به کارت
       </td>
       <td className='rounded-l-lg text-orange'>
        رد شده
       </td>
      </tr>
     </tbody>
    </table>
   </div>
  </div>
 )
}
