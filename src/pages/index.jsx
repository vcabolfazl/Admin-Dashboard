import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20 float-left w-full md:w-5/6 md:px-5 md:pt-3.5">
      <h2 className="font-VazirB text-2xl text-secondary">داشبورد</h2>

      <div className="flex items-center justify-between mt-6">
        <form className="flex items-center gap-x-2 bg-primry rounded-md ps-3">
          <svg className="w-6 h-6">
            <use href="#search"></use>
          </svg>
          <input className="bg-inherit outline-none rounded-md py-2" type="text" placeholder="جستجو ..." />
          <select className="bg-secondary gray-50text-sm rounded-md py-2 px-2">
            <option selected>بر اساس</option>
            <option value="FR">ردیف</option>
            <option value="DE">عنوان</option>
            <option value="US">تاریخ ثبت </option>
            <option value="CA">تاریخ تحویل</option>
          </select>
        </form>

        <Link href={"/"} className="flex items-center gap-2.5 text-purple bg-purple/30 border-2 border-purple px-3 py-2 rounded-lg">
          ایجاد کار
          <svg className="w-5 h-5">
            <use href="#plus"></use>
          </svg>
        </Link>
      </div>

      <div className="relative scroll overflow-auto mt-6 max-h-[30rem]">
        <table className="w-full text-sm text-center pl-2">
          <thead className="bg-[#448BFF]/10">
            <tr>
              <th scope="col" className="py-3 rounded-s-lg">
                ردیف
              </th>
              <th scope="col">
                عنوان
              </th>
              <th scope="col">
                تاریخ ثبت
              </th>
              <th scope="col">
                تاریخ تحویل
              </th>
              <th className="py-3 rounded-e-lg"></th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-primry">
              <td scope="row" className="py-3 rounded-s-lg">
                1
              </td>
              <td>
                فروشگاه ایرانیان
              </td>
              <td>
                ۱۴۰۲/۰۵/۱۲ − ۱۵:۴۳:۵۴
              </td>
              <td>
                ۱۴۰۲/۰۵/۱۵ − ۱۸:۲۵:۰۸
              </td>
              <td className="py-3 rounded-l-lg">
                <div className="w-full flex items-center justify-center gap-x-2.5 text-secondary">
                  <Link href={"/"}>
                    <svg className="w-6 h-6">
                      <use href="#play"></use>
                    </svg>
                  </Link>
                  <Link href={"/"}>
                    <svg className="w-6 h-6">
                      <use href="#gallery"></use>
                    </svg>
                  </Link>
                  <Link href={"/"}>
                    <svg className="w-6 h-6">
                      <use href="#send"></use>
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}
