import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import vi from 'date-fns/locale/vi';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

registerLocale('vi', vi);

const Create = ({ semester }) => {
  const [form, setForm] = useState({
    block: semester.block,
    start_date: semester.start_date,
    end_date: semester.end_date,
    year: semester.year,
  });
  const { errors } = usePage().props;

  const handleSubmit = (e) => {
    e.preventDefault();
    router.post(`/admin/hoc-ky/${semester.id}/sua`, {
      ...form,
      year: form.year,
      _method: 'PATCH'
    });
  };

  const handleChangeValue = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setForm({ block: '', start_date: null, end_date: null, year: null });
  };

  const renderError = (field) => {
    return errors?.[field] && <div className="text-red-500 mt-1">{errors[field]}</div>;
  };

  return (
    <div className="flex flex-col gap-9">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="mx-6.5 mt-6.5">
          <Breadcrumb
            items={[
              { label: 'Quản lý học kỳ', link: '/admin/hoc-ky' },
              { label: 'Sửa học kỳ' },
            ]}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5.5 p-6.5">
            {/* Kỳ */}
            <div>
              <label className="mb-3 block text-black dark:text-white">Kỳ</label>
              <input
                type="text"
                name="block"
                value={form.block}
                onChange={(e) => handleChangeValue(e.target.name, e.target.value)}
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                placeholder="Nhập tên kỳ học"
              />
              {renderError('block')}
            </div>

            <div className="flex flex-col xl:flex-row">
              {/* Năm học */}
              <div className='xl:w-1/3'>
                <label className="mb-3 block text-black dark:text-white">Năm học</label>
                <DatePicker
                  selected={form.year ? new Date(form.year, 0) : null}
                  onChange={(date) => handleChangeValue('year', date.getFullYear())}
                  showYearPicker
                  dateFormat="yyyy"
                  locale="vi"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                  placeholderText="Chọn năm học"
                />
                {renderError('year')}
              </div>
              {/* Ngày bắt đầu */}
              <div className='xl:w-1/3'>
                <label className="mb-3 block text-black dark:text-white">Ngày bắt đầu</label>
                <DatePicker
                  selected={form.start_date}
                  onChange={(date) => handleChangeValue('start_date', date)}
                  dateFormat="dd/MM/yyyy"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                  placeholderText="Chọn ngày bắt đầu"
                  locale="vi"
                />
                {renderError('start_date')}
              </div>

              {/* Ngày kết thúc */}
              <div className='xl:w-1/3'>
                <label className="mb-3 block text-black dark:text-white">Ngày kết thúc</label>
                <DatePicker
                  selected={form.end_date}
                  onChange={(date) => handleChangeValue('end_date', date)}
                  dateFormat="dd/MM/yyyy"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
                  placeholderText="Chọn ngày kết thúc"
                  locale="vi"
                />
                {renderError('end_date')}
              </div>
            </div>

            {/* Nút hành động */}
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-graydark hover:opacity-80 text-white py-2 px-4 rounded"
              >
                Lưu
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
  );
};

export default Create;
