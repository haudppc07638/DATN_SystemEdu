import React, { useState, useEffect } from 'react';
import { router, usePage } from '@inertiajs/react';

const Create = () => {

  const [form, setForm] = useState({});
  const {errors, flash} = usePage().props;

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post('/admin/phong-ban/them', form);
  };

  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setForm({ name: '', location: '' });
  };


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
        <form action="" method="POST" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Tên Phòng Ban
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="name"
              value={form.name}
              onChange={handleChangeValue}
            />
            {errors?.name && <div className="text-red-500 mt-1">{errors.name}</div>}

          </div>
        <div>
            <label className="mb-3 block text-black dark:text-white">
              Địa điểm
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              name="location"
              value={form.location}
              onChange={handleChangeValue}
            />
            {errors?.location && <div className="text-red-500 mt-1">{errors.location}</div>}

          </div>
          <div className='flex gap-2'>
            <button 
              type="submit" 
              className="bg-graydark hover:opacity-80 text-white py-2 px-4 rounded"
            >
              Thêm
            </button>
            <button 
              type="button" 
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
              onClick={handleCancel}
            >
              Hủy
            </button>
          </div>
        </div>
        
        </form>

      </div>

    </div>
  )
}

export default Create;