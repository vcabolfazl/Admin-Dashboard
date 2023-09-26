import React, { useState } from 'react'
import MultiDatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from "react-date-object/locales/persian_fa"
export default function CreateWork() {
  const date = new Date().toLocaleString("fa-IR-u-nu-latn").slice(0, 8)
  const [selectedDates, setSelectedDates] = useState(date);

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
  };
  return (
    <div className="mt-20 float-left w-full md:w-5/6 md:px-5 md:pt-3.5">
      <div className="flex items-center justify-between">
        <h2 className="font-VazirB text-2xl text-secondary px-5 md:px-0">ایجاد کار</h2>
        <p className='text-xs font-VazirM pl-5 md:pl-10'>تاریخ امروز : {date}</p>
      </div>
      <form className='grid sm:grid-cols-2  lg:grid-cols-3 items-center justify-center gap-16 mt-12'>
        <div className="flex gap-1 border-b-2 border-primry pb-1  items-center">
          <p className='text-sm text-gray-300'>عنوان:</p>
          <input type="text" className='bg-inherit outline-none border-none' />
        </div>

        <div className="flex gap-1 border-b-2 border-primry pb-1  items-center">
          <p className='text-sm text-gray-300'>نوع کار:</p>
          <input type="text" className='bg-inherit outline-none border-none' />
        </div>
        <div className="flex gap-1 border-b-2 border-primry pb-1  items-center">
          <p className='text-sm text-gray-300'>اولویت:</p>
          <input type="text" className='bg-inherit outline-none border-none' />
        </div>
        <div className="flex gap-1 border-b-2 border-primry pb-1  items-center">
          <p className='text-sm text-gray-300'>وضعیت:</p>
          <input type="text" className='bg-inherit outline-none border-none' />
        </div>
        {/* <div className="flex gap-1 border-b-2 border-primry pb-1  items-center">
          <input type="date" className='bg-inherit outline-none border-none' />
        </div> */}
        <div className='flex gap-1 border-b-2 border-primry pb-1  items-center justify-between '>
          <p className='text-sm text-gray-300'>تاریخ تحویل:</p>
          <MultiDatePicker
            inputClass='bg-inherit outline-none border-none'
            calendar={persian}
            locale={persian_fa}
            value={selectedDates}
            onChange={handleDateChange}
          />
          <svg className="w-4 h-4">
            <use href='#arrow-down'></use>
          </svg>
        </div>
        <div className="flex gap-1 border-b-2 border-primry pb-1  items-center">
          <p className='text-sm text-gray-300'>مستندات:</p>
          <input type="text" className='bg-inherit outline-none border-none' />
        </div>
        <div className="flex gap-1 border-b-2 border-primry pb-1  items-center">
          <p className='text-sm text-gray-300'>ارجاع شده به:</p>
          <input type="text" className='bg-inherit outline-none border-none' />
        </div>
        <div className="flex gap-1 border-b-2 border-primry pb-1  items-center">
          <p className='text-sm text-gray-300'>نام شخص:</p>
          <input type="text" className='bg-inherit outline-none border-none' />
        </div>
        <div className="flex gap-1 border-b-2 border-primry pb-1  items-center">
          <p className='text-sm text-gray-300'>نظاره گر:</p>
          <input type="text" className='bg-inherit outline-none border-none' />
        </div>
        <b className='hidden sm:block'></b>
        <button className="w-fit relative mx-auto flex items-center gap-2.5 text-secondary bg-secondary/30 border-2 border-secondary px-3 py-2 rounded-lg">
          ایجاد کار
          <svg className="w-5 h-5">
            <use href="#plus"></use>
          </svg>
        </button>
      </form>
    </div>
  )
}
