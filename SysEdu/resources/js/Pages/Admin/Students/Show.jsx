import React, { useState, useEffect, useCallback } from 'react';
import { Link, useForm, router, usePage } from '@inertiajs/react';
import Pagination from '../../../Components/Paginations/Base';
import LimitSelector from '../../../Components/LimitSelectors/Base';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';
import dayjs from 'dayjs';

const Show = ({ students, limit }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);
    const { flash } = usePage().props;

    const { data, setData, get } = useForm({
        limit: limit || 10,
        search: '',
        page: students.current_page || 1,
    });

    const performSearch = useCallback(() => {
        get(window.location.pathname, {
            data: {
                limit: data.limit,
                search: data.search,
                page: data.page,
            },
            preserveState: true,
            preserveScroll: true,
        });
    }, [data.limit, data.page, data.search, get]);

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

    useEffect(() => {
        performSearch();
    }, [data.limit]);

    const handlePageChange = (page) => {
        setData('page', page);
        performSearch();
    };

    const handleDeleteClick = (id) => {
        setIdToDelete(id);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setIdToDelete(null);
    };

    const confirmDelete = () => {
        router.delete(`sinh-vien/${idToDelete}`);
        handleClosePopup();
    };

    const handleLimitChange = (newLimit) => {
        setData({
            ...data,
            limit: newLimit,
            page: 1
        });
        performSearch();
    };

    const handleSearchChange = (e) => {
        setData('search', e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        performSearch();
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    };

    const formatDate = (date) => {
        return dayjs(date).format('MM/YYYY');
    };


    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">

            {/* Breadcrumb */}
            <Breadcrumb items={[
                { label: 'Quản lý sinh viên', link: '/admin/sinh-vien' },
                { label: 'Danh sách sinh viên' }
            ]} />

            {/* action */}
            <div className='flex flex-col justify-between md:flex-row gap-5 mb-4'>

                {/* Limit */}
                <LimitSelector limit={data.limit} onLimitChange={handleLimitChange} />

                {/* Search */}
                <form onSubmit={handleSearchSubmit} className='flex items-center gap-5'>
                    <div className="flex px-4 py-1 rounded-md border-2 border-gray-700 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            value={data.search}
                            onChange={handleSearchChange}
                            onKeyPress={handleKeyPress} // Thêm sự kiện keypress
                            className="w-full outline-none bg-transparent text-gray-600 text-sm" />
                        <button type="submit" className="p-2">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    {/* Add */}
                    <Link href="/admin/sinh-vien/them" className="bg-graydark hover:opacity-80 text-white font-bold py-2 px-4 rounded text-center">
                        Thêm
                    </Link>
                </form>

            </div>

            {/* Table */}
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[10px] py-4 px-4 font-medium text-black xl:pl-11">#</th>
                            <th className="min-w-[190px] py-4 px-4 font-medium text-black ">Họ và Tên</th>
                            <th className="min-w-[50px] py-4 px-4 font-medium text-black">MSSV</th>
                            <th className="min-w-[80px] py-4 px-4 font-medium text-black">Tình trạng</th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black">Chuyên ngành</th>
                            <th className="min-w-[100px] py-4 px-4 font-medium text-black">Thuộc lớp</th>
                            <th className="min-w-[100px] py-4 px-4 font-medium text-black">Nhập học</th>
                            <th className="py-4 px-4 font-medium text-black ">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.data && students.data.length > 0 ? (
                            students.data.map((student, index) => (
                                <tr key={student.id}>
                                    <td className="border-b border-[#eee] py-4 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        <h5 className="font-medium text-black ">{index + 1}</h5>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0">
                                                <img src={`/storage/avatars/${student.image}`} alt="avatar"
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                            </div>
                                            <p className="hidden text-black sm:block text-sm">
                                                {student.full_name}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black text-sm">{student.code}</p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black text-sm">{student.status}</p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p
                                            className={student.major.deleted_at ? "text-red-500 text-sm" : "text-black text-sm"}
                                            title={student.major.deleted_at ? "Khoa này đã ngừng hoạt động" : ""}
                                        >
                                            {student.major.name}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p
                                            className={student.major_class.deleted_at ? "text-red-500 text-sm" : "text-black text-sm"}
                                            title={student.major_class.deleted_at ? "Phòng ban này đã ngừng hoạt động" : ""}
                                        >
                                            {student.major_class.name}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black ">
                                            {formatDate(student.created_at)}
                                        </p>
                                    </td>
                                    
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <div className="flex items-center space-x-3.5">
                                            <Link href={`/admin/sinh-vien/${student.id}/sua`} className="hover:text-primary">
                                                <i
                                                    className="fa-regular fa-pen-to-square text-xl"
                                                    title="Chỉnh sửa"
                                                ></i>
                                            </Link>
                                            <button className="hover:text-primary" onClick={() => handleDeleteClick(student.id)}>
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
                                <td colSpan="4" className="border-b border-[#eee] py-4 px-4 dark:border-strokedark text-center">Không có dữ liệu</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className='my-6'>
                <Pagination link={students.links} onPageChange={handlePageChange} />
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Cảnh báo</h2>
                        <p>Bạn có chắc chắn muốn xóa mục này không?</p>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2" onClick={handleClosePopup}>
                                Hủy
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={confirmDelete}>
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