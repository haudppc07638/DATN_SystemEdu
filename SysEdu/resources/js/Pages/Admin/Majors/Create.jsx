import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Create = ({ faculties }) => {
    const [form, setForm] = useState({ name: '', faculty_id: '' });
    const { errors } = usePage().props;

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/admin/chuyen-nganh/them', form);
    };

    const handleChangeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        if (window.confirm("Bạn có chắc chắn muốn hủy không?")) {
            setForm({ name: '', faculty_id: '' });
        }
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
                        { label: 'Quản lý chuyên ngành', link: '/admin/chuyen-nganh' },
                        { label: 'Thêm chuyên ngành' }
                    ]} />
                </div>

                {/* Form thêm */}
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <div>
                            <label className="mb-3 block text-black">Tên chuyên ngành</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                name="name"
                                value={form.name}
                                onChange={handleChangeValue}
                            />
                            {renderError('name')}
                        </div>

                        <div>
                            <label className="mb-3 block text-black">Chọn khoa</label>
                            <div className="relative z-20 bg-transparent dark:bg-form-input">
                                <select
                                    name="faculty_id"
                                    value={form.faculty_id || ''}
                                    onChange={handleChangeValue}
                                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary ${form.faculty_id ? 'text-black' : ''}`}
                                >
                                    <option value="" disabled className="text-body">Chọn khoa</option>
                                    {faculties.map((faculty) => (
                                        <option key={faculty.id} value={faculty.id} className="text-body">
                                            {faculty.name}
                                        </option>
                                    ))}
                                </select>
                                {renderError('faculty_id')}
                            </div>
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
    );
}

export default Create;