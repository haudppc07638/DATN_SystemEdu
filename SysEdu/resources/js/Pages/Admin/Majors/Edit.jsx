import React, { useState, useEffect } from 'react';
import { router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Edit = ({ major, faculties }) => {
    const { errors } = usePage().props;

    const [form, setForm] = useState({
        name: major.name,
        faculty_id: major.faculty_id
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(`/admin/chuyen-nganh/${major.id}/sua`, {
            ...form,
            _method: 'PATCH'
        });
    };

    const handleChangeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        setForm({ name: '', faculty_id: '' });
    };

    return (
        <div className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default">
                {/* Breadcrumb */}
                <div className="mx-6.5 mt-6.5">
                    <Breadcrumb items={[
                        { label: 'Quản lý chuyên ngành', link: '/admin/chuyen-nganh' },
                        { label: 'Sửa chuyên ngành' }
                    ]} />
                </div>

                {/* Form sửa */}
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <div>
                            <label className="mb-3 block text-black">
                                Tên chuyên ngành
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                name="name"
                                value={form.name}
                                onChange={handleChangeValue}
                            />
                            {errors?.name && <div className="text-red-500 mt-1">{errors.name}</div>}
                        </div>

                        <div>
                            <label className="mb-3 block text-black">
                                Chọn khoa
                            </label>
                            <div className="relative z-20 bg-transparent dark:bg-form-input">
                                <select
                                    name="faculty_id"
                                    value={form.faculty_id || ''}
                                    onChange={handleChangeValue}
                                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary ${form.faculty_id ? 'text-black' : ''}`}
                                >
                                    <option value="" disabled className="text-body">
                                        Chọn khoa
                                    </option>
                                    {faculties.map((faculty) => (
                                        <option key={faculty.id} value={faculty.id} className="text-body">
                                            {faculty.name}
                                        </option>
                                    ))}
                                </select>
                                {errors?.faculty_id && <div className="text-red-500 mt-1">{errors.faculty_id}</div>}
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <button
                                type="submit"
                                className="bg-graydark hover:opacity-80 text-white py-2 px-4 rounded"
                            >
                                Sửa
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

export default Edit;