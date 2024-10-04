import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Create = ({ faculties }) => {

    const [form, setForm] = useState({});
    const [majors, setMajors] = useState([]);
    const { errors } = usePage().props;

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/admin/mon-hoc/them', form);
    };

    const handleChangeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        setForm({ name: '', code: '', credit: '', description: '', major_id: '' });
        setMajors([]);
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
    }

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
                        { label: 'Quản lý môn học', link: '/admin/mon-hoc' },
                        { label: 'Thêm môn học' }
                    ]} />
                </div>

                {/* Form thêm*/}
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5.5 p-6.5">

                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">
                                    Chọn khoa
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
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
                            </div>

                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">
                                    Chọn chuyên ngành
                                </label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        name="major_id"
                                        value={form.major_id || ''}
                                        onChange={handleChangeValue}
                                        className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary 
                                        ${form.major_id ? 'text-black' : ''}`}
                                    >
                                        <option value="" disabled className="text-body  ">
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
                        </div>

                        <div>
                            <label className="mb-3 block text-black">
                                Tên môn học
                            </label>
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
                            <label className="mb-3 block text-black">
                                Mã môn học
                            </label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                name="code"
                                value={form.code}
                                onChange={handleChangeValue}
                            />
                            {renderError('code')}
                        </div>

                        <div>
                            <label className="mb-3 block text-black">
                                Số tín chỉ
                            </label>
                            <input
                                type="number"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                name="credit"
                                value={form.credit}
                                onChange={handleChangeValue}
                            />
                            {renderError('credit')}
                        </div>

                        <div>
                            <label className="mb-3 block text-black">
                                Mô tả
                            </label>
                            <textarea
                                rows={6}
                                placeholder="Nhập mô tả về môn học"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                name="description"
                                value={form.description}
                                onChange={handleChangeValue}
                            ></textarea>
                            {renderError('description')}
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