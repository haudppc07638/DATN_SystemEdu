import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Create = () => {

    const [form, setForm] = useState({});
    const { errors } = usePage().props;

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/admin/ca-hoc/them', form);
    };

    const handleChangeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        setForm({ slot: '', start_time: '', end_time: '' });
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
                        { label: 'Quản lý ca học', link: '/admin/ca-hoc' },
                        { label: 'Thêm ca học' }
                    ]} />
                </div>

                {/* Form thêm*/}
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Ca học
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                name="slot"
                                value={form.slot}
                                onChange={handleChangeValue}
                            />
                            {renderError('slot')}

                        </div>
                        <div className="flex flex-sm-row xl:flex-grow gap-6">
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black dark:text-white">
                                </label>
                                <input
                                    type="time"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    name="start_time"
                                    value={form.start_time}
                                    onChange={handleChangeValue}
                                />
                                {renderError('start_time')}
                            </div>
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black dark:text-white">
                                </label>
                                <input
                                    type="time"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    name="end_time"
                                    value={form.end_time}
                                    onChange={handleChangeValue}
                                />
                                {renderError('end_time')}

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
    )
}

export default Create;