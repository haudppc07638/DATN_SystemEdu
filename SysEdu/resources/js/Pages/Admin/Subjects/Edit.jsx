import React, { useState, useEffect } from 'react';
import { router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Create = ({ subject, faculties }) => {

    const { errors } = usePage().props;

    // Khởi tạo majors dựa trên faculty đã chọn (nếu có)
    const [majors, setMajors] = useState([]);

    const [form, setForm] = useState({
        name: subject.name,
        code: subject.code,
        credit: subject.credit,
        description: subject.description,
        major_id: subject.major_id,
        faculty_id: subject.major?.faculty_id || ''
    });

    // Khi trang load, tự động tải majors theo faculty
    useEffect(() => {
        if (form.faculty_id) {
            fetch(`/api/majors?faculty_id=${form.faculty_id}`)
                .then(response => response.json())
                .then(data => {
                    setMajors(data);
                });
        }
    }, [form.faculty_id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(`/admin/mon-hoc/${subject.id}/sua`, {
            ...form,
            _method: 'PATCH'
        });
    };

    const handleChangeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCancel = () => {
        setForm({ name: '', code: '', credit: '', description: '', major_id: '', faculty_id: '' });
        setMajors([]);
    };

    const handleFacultyChange = (e) => {
        const facultyId = e.target.value;
        setForm({ ...form, faculty_id: facultyId, major_id: '' });

        // Gọi API để lấy danh sách majors theo faculty
        if (facultyId) {
            fetch(`/api/majors?faculty_id=${facultyId}`)
                .then(response => response.json())
                .then(data => {
                    setMajors(data);
                });
        } else {
            setMajors([]);
        }
    };

    const renderError = (field) => {
        return errors?.[field] && <div className="text-red-500 mt-1">{errors[field]}</div>;
    };

    return (
        <div className="flex flex-col gap-9">
            {/* Form Input Fields */}
            <div className="rounded-sm border border-stroke bg-white shadow-default">
                <div className="mx-6.5 mt-6.5">
                    <Breadcrumb items={[
                        { label: 'Quản lý môn học', link: '/admin/mon-hoc' },
                        { label: 'Sửa môn học' }
                    ]} />
                </div>

                <form action="" method="POST" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-5.5 p-6.5">

                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">Chọn khoa</label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        name="faculty_id"
                                        value={form.faculty_id}
                                        onChange={handleFacultyChange}
                                        className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary 
                                        ${form.faculty_id ? 'text-black' : ''}`}
                                    >
                                        {faculties.map((faculty) => (
                                            <option key={faculty.id} value={faculty.id}>
                                                {faculty.name}
                                            </option>
                                        ))}
                                    </select>
                                    {renderError('faculty_id')}
                                </div>
                            </div>

                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">Chọn chuyên ngành</label>
                                <div className="relative z-20 bg-transparent dark:bg-form-input">
                                    <select
                                        name="major_id"
                                        value={form.major_id || ''}
                                        onChange={handleChangeValue}
                                        className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary 
                                            ${form.major_id ? 'text-black' : ''}`}
                                    >
                                        {majors.length > 0 ? majors.map((major) => (
                                            <option key={major.id} value={major.id}>
                                                {major.name}
                                            </option>
                                        )) : (
                                            <option value="">Chưa có chuyên ngành</option>
                                        )}
                                    </select>
                                    {renderError('major_id')}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="mb-3 block text-black">Tên môn học</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChangeValue}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                            />
                            {renderError('name')}
                        </div>

                        <div>
                            <label className="mb-3 block text-black">Mã môn học</label>
                            <input
                                type="text"
                                name="code"
                                value={form.code}
                                onChange={handleChangeValue}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                            />
                            {renderError('code')}
                        </div>

                        <div>
                            <label className="mb-3 block text-black">Số tín chỉ</label>
                            <input
                                type="number"
                                name="credit"
                                value={form.credit}
                                onChange={handleChangeValue}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                            />
                            {renderError('credit')}
                        </div>

                        <div>
                            <label className="mb-3 block text-black">Mô tả</label>
                            <textarea
                                rows={6}
                                name="description"
                                value={form.description}
                                onChange={handleChangeValue}
                                placeholder="Nhập mô tả về môn học"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                            />
                            {renderError('description')}
                        </div>

                        <div className='flex gap-2'>
                            <button
                                type="submit"
                                className="bg-graydark hover:opacity-80 text-white py-2 px-4 rounded"
                            >
                                Cập nhật
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
