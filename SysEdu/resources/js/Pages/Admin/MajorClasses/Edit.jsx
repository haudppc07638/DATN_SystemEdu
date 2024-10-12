import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Create = ({ majorClass, employees }) => {

    const [form, setForm] = useState({
        training_system:  majorClass.training_system,
        name: majorClass.name,
        major_id: majorClass.major_id,
        employee_id: majorClass.employee_id
      
    });
    const { errors } = usePage().props;

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(`/admin/lop-chuyen-nganh/${majorClass.id}/sua`, {
            ...form,
            _method: 'PATCH'
        });
    };

    const handleChangeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        setForm({ training_system: '', name: '', employee_id: '' });
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
                        { label: 'Quản lý lớp chuyên ngành', link: '/admin/lop-chuyen-nganh' },
                        { label: 'Sửa lớp chuyên ngành' }
                    ]} />
                </div>

                {/* Form thêm*/}
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <div>
                            <label className="mb-3 block text-black">
                                Hệ đào tạo
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                name="training_system"
                                value={form.training_system}
                                onChange={handleChangeValue}
                            />
                            {renderError('training_system')}
                        </div>

                        <div>
                            <label className="mb-3 block text-black">
                                Name
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                name="name"
                                value={form.name}
                                onChange={handleChangeValue}
                            />
                            {renderError('code')}
                        </div>

                        <div>
                            <label className="mb-3 block text-black">
                                Chuyên ngành
                            </label>
                            <select
                                name="major_id"
                                value={form.major_id || ''}
                                onChange={handleChangeValue}
                                className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition text-black'
                            >
                                <option value={form.major_id} disabled>{majorClass.major.name}</option>
                            </select>
                            {renderError('major_id')}
                        </div>

                        <div>
                            <label className="mb-3 block text-black">Chủ nhiệm</label>
                            <select
                                name="employee_id"
                                value={form.employee_id || ''}
                                onChange={handleChangeValue}
                                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary ${form.employee_id ? 'text-black' : ''}`}
                            >
                                <option value={form.employee_id} disabled>{majorClass.employee.full_name}</option>
                                {employees.map((employee) => (
                                    <option key={employee.id} value={employee.id}>{employee.full_name}</option>
                                ))}
                            </select>
                            {renderError('department_id')}
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