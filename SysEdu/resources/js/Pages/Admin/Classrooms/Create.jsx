import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Create = () => {

  const [form, setForm] = useState({});
  const { errors } = usePage().props;

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post('/admin/phong-hoc/them', form);
  };

  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setForm({ code: '' });
  };

  const renderError = (field) => {
    return errors?.[field] && <div className="text-red-500 mt-1">{errors[field]}</div>;
  };

  return (
    <div className="flex flex-col gap-9">
      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default">

        {/* Breadcrumb */}
        <div className="mx-6.5 mt-6.5">
          <Breadcrumb items={[
            { label: 'Quản lý phòng học', link: '/admin/phong-hoc' },
            { label: 'Thêm phòng học' }
          ]} />
        </div>

        {/* Form thêm*/}
        <form action="" method="POST" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label className="mb-3 block text-black">
                Mã phòng
              </label>
              <input
                type="text"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                name="code"
                value={form.code}
                onChange={handleChangeValue}
              />
              {renderError('code')}

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