import React, { useState, useEffect } from 'react';
import { Link, useForm, router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';
import dayjs from 'dayjs';

const Show = ({ faculties }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [majors, setMajors] = useState([]);
    const [majorClasses, setMajorClasses] = useState([]);

    const [idToDelete, setIdToDelete] = useState(null);
    const [form, setForm] = useState({
        faculty_id: '',
        major_id: '',
        subject_id: ''
    });

    const handleDeleteClick = (id) => {
        setIdToDelete(id);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setIdToDelete(null);
    };

    const confirmDelete = () => {
        router.delete(`lop-chuyen-nganh/${idToDelete}`);
        handleClosePopup();
    };

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            Swal.fire({
                title: 'Thành công!',
                text: flash.success,
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
        if (flash.error) {
            Swal.fire({
                title: 'Lỗi!',
                text: flash.error,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }, [flash]);

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

    const handleMajorChange = (e) => {
        const majorId = e.target.value;
        setForm((prevForm) => ({ ...prevForm, major_id: majorId }));

        if (majorId) {
            fetch(`/api/majorClasses?major_id=${majorId}`)
                .then(response => response.json())
                .then(data => {
                    setMajorClasses(data);
                })
        }
    };

    const formatDate = (date) => {
        return dayjs(date).format('MM/YYYY');
    };

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">

            {/* Breadcrumb */}
            <Breadcrumb items={[
                { label: 'Quản lý Lớp chuyên ngành', link: '/admin/phong-ban' },
                { label: 'Danh sách lớp chuyên ngành' }
            ]} />

            {/* action */}
            <div className='flex flex-col justify-between md:flex-row gap-5 my-6'>

                {/* Chọn khoa */}
                <div className="xl:w-1/2">
                    <label className="mb-3 block text-black">Chọn khoa</label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                        <select
                            name="faculty_id"
                            value={form.faculty_id}  // Lấy từ state `form`
                            onChange={handleFacultyChange}  // Gọi khi khoa thay đổi
                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary"
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
                    </div>
                </div>

                {/* Chọn chuyên ngành */}
                <div className="xl:w-1/2">
                    <label className="mb-3 block text-black">Chọn chuyên ngành</label>
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                        <select
                            name="major_id"
                            value={form.major_id}
                            onChange={handleMajorChange}
                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary"
                            disabled={!majors.length}
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
                    </div>
                </div>
            </div>

            {form.major_id && (
                <div className="flex justify-end mb-6">
                    <Link href={`/admin/lop-chuyen-nganh/${form.major_id}/them`} className="bg-graydark hover:opacity-80 text-white font-bold py-2 px-4 rounded text-center">
                        Thêm
                    </Link>
                </div>
            )}

            {/* Table */}
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[10px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">#</th>
                            <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">Hệ đào tạo</th>
                            <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">Tên</th>
                            <th className="min-w-[60px] py-4 px-4 font-medium text-black dark:text-white">Số lượng</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Chuyên ngành</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Chủ nhiệm</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Tình trạng</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Năm học</th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>

                        {Array.isArray(majorClasses) && majorClasses.length > 0 ? (
                            majorClasses.map((majorClass, index) => (
                                <tr key={majorClasses.id}>
                                    <td className="border-b border-[#eee] py-4 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        <h5 className="font-medium text-black dark:text-white">{index + 1}</h5>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">{majorClass.training_system}</p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">{majorClass.name}</p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">{majorClass.quantity}</p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">{majorClass.major.name}</p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">{majorClass.employee.full_name}</p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <span
                                            className={`cursor-pointer ${majorClass.status === 0 ? 'text-green-500' : 'text-red-500'}`}
                                            onClick={majorClass.status === 0 ? () => handleEndClass(majorClass) : null}
                                        >
                                            {majorClass.status === 0 ? 'Đang học' : 'Đã kết thúc'}
                                        </span>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">
                                            {formatDate(majorClass.created_at)}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <div className="flex items-center space-x-3.5">
                                            {majorClass.status === 0 && (
                                                <Link href={`/admin/lop-chuyen-nganh/${majorClass.major_id}/${majorClass.id}/sua`} className="hover:text-primary">
                                                    <i
                                                        className="fa-regular fa-pen-to-square text-xl"
                                                        title="Chỉnh sửa"
                                                    ></i>
                                                </Link>
                                            )}
                                            <button className="hover:text-primary" onClick={() => handleDeleteClick(majorClass.id)}>
                                                <i
                                                    className="fa-regular fa-trash-can text-xl"
                                                    title="Xóa"
                                                ></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="border-b border-[#eee] py-4 px-4 dark:border-strokedark text-center">Không có dữ liệu</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className='my-6'>
                {/* <Pagination link={departments.links} onPageChange={handlePageChange} /> */}
            </div>

            {/* Popup */}
            {showPopup && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
                >
                    <div className="bg-white p-6 rounded shadow-lg z-60 relative">
                        <h2 className="text-xl font-semibold mb-4">Cảnh báo</h2>
                        <p>Bạn có chắc chắn muốn xóa mục này không?</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
                                onClick={handleClosePopup}
                            >
                                Hủy
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={confirmDelete}
                            >
                                Xóa
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Show;