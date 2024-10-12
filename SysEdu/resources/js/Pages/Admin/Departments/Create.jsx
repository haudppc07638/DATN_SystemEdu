import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Create = () => {

  const [form, setForm] = useState({});
  const { errors } = usePage().props;

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

  const renderError = (field) => {
    return errors?.[field] && <div className="text-red-500 mt-1">{errors[field]}</div>;
  };

  return (
    <div className="flex flex-col gap-9">

      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

        {/* Breadcrumb */}
        <div className="mx-6.5 mt-6.5">
          <Breadcrumb items={[
            { label: 'Quản lý phòng ban', link: '/admin/phong-ban' },
            { label: 'Thêm phòng ban' }
          ]} />
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
              {renderError('name')}

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
              {renderError('location')}

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