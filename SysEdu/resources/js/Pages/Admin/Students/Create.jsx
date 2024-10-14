import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Create = ({ faculties }) => {
    const [form, setForm] = useState({});
    const [majors, setMajors] = useState([]);
    const [majorClasses, setMajorClasses] = useState([]);
    const { errors } = usePage().props;

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/admin/sinh-vien/them', form);
        console.log(form);
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
            code: '',
            email: '',
            password: '',
            phone: '',
            image: null,
            faculty_id: '',
            major: '',
            major_class_id: ''
        });
    };

    const handleFacultyChange = (e) => {
        const facultyId = e.target.value;
        setForm(prevForm => ({ ...prevForm, faculty_id: facultyId }));

        if (facultyId) {
            fetch(`/api/majors?faculty_id=${facultyId}`)
                .then(response => response.json())
                .then(data => {
                    setMajors(data);
                    setForm(prevForm => ({ ...prevForm, major_id: '' }));
                });
        } else {
            setMajors([]);
        }
    };

    const handleMajorChange = (e) => {
        const majorId = e.target.value;
        setForm(prevForm => ({ ...prevForm, major_id: majorId }));

        if (majorId) {
            fetch(`/api/majorClasses?major_id=${majorId}`)
                .then(response => response.json())
                .then(data => {
                    setMajorClasses(data);
                    setForm(prevForm => ({ ...prevForm, major_class_id: '' }));
                });
        } else {
            setMajorClasses([]);
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
                        { label: 'Quản lý sinh viên', link: '/admin/sinh-viên' },
                        { label: 'Thêm sinh viên' }
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
                                    placeholder='abc0123@fpt.edu.vn'
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
                                <label className="mb-3 block text-black">Mã sinh viên</label>
                                <input
                                    type="text"
                                    name="code"
                                    onChange={handleChangeValue}
                                    className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary"
                                />
                                {renderError('code')}
                            </div>
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
                        </div>

                        {/* Other fields (Faculties and major) */}
                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">Chọn khoa</label>
                                <select
                                    name="faculty_id"
                                    value={form.faculty_id || ''}
                                    onChange={handleFacultyChange}
                                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary 
                                            ${form.faculty_id ? 'text-black' : ''}`}
                                >
                                    <option value="" disabled className="text-body">
                                        ... Chọn khoa ...
                                    </option>
                                    {faculties.map((faculty) => (
                                        <option key={faculty.id} value={faculty.id} className="text-body">
                                            {faculty.name}
                                        </option>
                                    ))}
                                </select>
                                {renderError('faculty_id')}
                            </div>

                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">Chọn chuyên ngành</label>
                                <select
                                    name="major_id"
                                    value={form.major_id || ''}
                                    onChange={handleMajorChange}
                                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary 
                                    ${form.major_id ? 'text-black' : ''}`}
                                >
                                    <option value="" disabled className="text-body">
                                        ... Chọn chuyên ngành ...
                                    </option>
                                    {majors.map((major) => (
                                        <option key={major.id} value={major.id} className="text-body">
                                            {major.name}
                                        </option>
                                    ))} 
                                </select>
                                {renderError('major_id')}
                            </div>
                        </div>

                        <div>
                            <label className="mb-3 block text-black">Chọn lớp chuyên ngành</label>
                            <select
                                name="major_class_id"
                                value={form.major_class_id || ''}
                                onChange={handleChangeValue}
                                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary 
            ${form.major_class_id ? 'text-black' : ''}`}
                            >
                                <option value="" disabled className="text-body">
                                    ... Chọn lớp chuyên ngành ...
                                </option>
                                {majorClasses.map((majorClass) => (
                                    <option key={majorClass.id} value={majorClass.id} className="text-body">
                                        {majorClass.name} / {majorClass.quantity} Sinh viên
                                    </option>
                                ))}
                            </select>
                            {renderError('major_class_id')}
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
