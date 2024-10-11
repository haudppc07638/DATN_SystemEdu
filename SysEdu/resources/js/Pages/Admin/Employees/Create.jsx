import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Create = ({ faculties, departments }) => {
    const [form, setForm] = useState({
        full_name: '',
        phone: '',
        email: '',
        password: '',
        image: null,
        position: 'teacher',
        faculty_id: '',
        department_id: ''
    });
    const { errors } = usePage().props;

    const [selectedRole, setSelectedRole] = useState('teacher');

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/admin/nhan-su/them', form);
    };

    const handleChangeValue = (e) => {
        const { name, value, files } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: files ? files[0] : value
        }));
    };

    const handleCancel = () => {
        setForm({
            full_name: '',
            phone: '',
            email: '',
            password: '',
            image: null,
            position: 'teacher',
            faculty_id: '',
            department_id: ''
        });
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
                        { label: 'Quản lý nhân sự', link: '/admin/nhan-su' },
                        { label: 'Thêm nhân sự' }
                    ]} />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="flex flex-col gap-5.5 p-6.5">

                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">Họ và tên</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                    name="full_name"
                                    value={form.full_name}
                                    onChange={handleChangeValue}
                                />
                                {renderError('full_name')}
                            </div>
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">Số điện thoại</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChangeValue}
                                />
                                {renderError('phone')}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">Email</label>
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                    name="email"
                                    placeholder='abc0123@gmail.com'
                                    value={form.email}
                                    onChange={handleChangeValue}
                                />
                                {renderError('email')}
                            </div>
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">Mật khẩu</label>
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChangeValue}
                                />
                                {renderError('password')}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">Ảnh</label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleChangeValue}
                                    className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary"
                                />
                                {renderError('image')}
                            </div>

                            <div className="xl:w-1/2">
                                {/* Radio for position */}
                                <label className="mb-3 block text-black">Chức vụ</label>
                                {['teacher', 'admin'].map((role) => (
                                    <label key={role} htmlFor={`radio${role}`} className="flex cursor-pointer select-none items-center mt-4">
                                        <div className="relative">
                                            <input
                                                type="radio"
                                                id={`radio${role}`}
                                                name="position"
                                                className="sr-only"
                                                checked={selectedRole === role}
                                                value={role}
                                                onChange={() => setSelectedRole(role)}
                                            />
                                            <div className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${selectedRole === role && 'border-primary'}`}>
                                                <span className={`h-2.5 w-2.5 rounded-full bg-transparent ${selectedRole === role && '!bg-primary'}`}></span>
                                            </div>
                                        </div>
                                        {role.charAt(0).toUpperCase() + role.slice(1)}
                                    </label>
                                ))}

                            </div>
                        </div>

                        {/* Other fields (Faculties and Departments) */}
                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">Chọn khoa</label>
                                <select
                                    name="faculty_id"
                                    value={form.faculty_id || ''}
                                    onChange={handleChangeValue}
                                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary ${form.faculty_id ? 'text-black' : ''}`}
                                >
                                    <option value="" disabled>Chọn khoa</option>
                                    {faculties.map((faculty) => (
                                        <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
                                    ))}
                                </select>
                                {renderError('faculty_id')}
                            </div>

                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">Chọn phòng ban</label>
                                <select
                                    name="department_id"
                                    value={form.department_id || ''}
                                    onChange={handleChangeValue}
                                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary ${form.department_id ? 'text-black' : ''}`}
                                >
                                    <option value="" disabled>Chọn phòng ban</option>
                                    {departments.map((department) => (
                                        <option key={department.id} value={department.id}>{department.name}</option>
                                    ))}
                                </select>
                                {renderError('department_id')}
                            </div>
                        </div>

                        {/* Submit and Cancel buttons */}
                        <div className="flex gap-2">
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
