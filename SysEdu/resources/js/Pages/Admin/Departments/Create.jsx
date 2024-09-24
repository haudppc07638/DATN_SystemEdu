import React from 'react';
import { Link } from '@inertiajs/react';
const Create = () => {
  return (
    <div className="flex flex-col gap-9">
      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="text-black dark:text-white text-xl">
            Thêm Phòng Ban
          </h3>
        </div>
        {/* Form thêm*/}
        <form action="" method="POST">
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Tên Phòng Ban
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        <div>
            <label className="mb-3 block text-black dark:text-white">
              Địa điểm
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div className='flex gap-2'>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Thêm</button>
            <Link href="/admin/phong-ban/them" className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Hủy</Link>
          </div>
        </div>
        
        </form>

      </div>

    </div>
  )
}

export default Create;