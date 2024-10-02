import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Create = ({ faculty }) => {

    const [form, setForm] = useState({
        name: faculty.name,
        code: faculty.code,
        description: faculty.description
    });

    const { errors } = usePage().props;

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(`/admin/khoa/${faculty.id}/sua`, form);
    };

    const handleChangeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        setForm({ name: '', code: '', description: '' });
    };


    return (
        <div className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default">

                {/* Breadcrumb */}
                <div className="mx-6.5 mt-6.5">
                    <Breadcrumb items={[
                        { label: 'Quản lý khoa', link: '/admin/khoa' },
                        { label: 'Sửa khoa' }
                    ]} />
                </div>

                {/* Form thêm*/}
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <div>
                            <label className="mb-3 block text-black">
                                Tên khoa
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
                                Mã khoa
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                name="code"
                                value={form.code}
                                onChange={handleChangeValue}
                            />
                            {errors?.code && <div className="text-red-500 mt-1">{errors.code}</div>}
                        </div>

                        <div>
                            <label className="mb-3 block text-black">
                                Mô tả
                            </label>
                            <textarea
                                rows={6}
                                placeholder="Nhập mô tả về khoa"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                name="description"
                                value={form.description}
                                onChange={handleChangeValue}
                            ></textarea>
                            {errors?.description && <div className="text-red-500 mt-1">{errors.description}</div>}
                        </div>

                        <div className='flex gap-2'>
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
    )
}

export default Create;