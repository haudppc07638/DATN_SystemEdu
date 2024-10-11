import React, { useState, useEffect, useCallback } from 'react';
import { Link, useForm, router, usePage } from '@inertiajs/react';
import Pagination from '../../../Components/Paginations/Base';
import LimitSelector from '../../../Components/LimitSelectors/Base';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Show = ({ departments, limit }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [idToDelete, setDepartmentIdToDelete] = useState(null);
    const { flash } = usePage().props;

    const { data, setData, get } = useForm({
        limit: limit || 10,
        search: '',
        page: departments.current_page || 1,
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
        setDepartmentIdToDelete(id);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setDepartmentIdToDelete(null);
    };

    const confirmDelete = () => {
        router.delete(`phong-ban/${idToDelete}`);
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

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">

            {/* Breadcrumb */}
            <Breadcrumb items={[
                { label: 'Quản lý phòng ban', link: '/admin/phong-ban' },
                { label: 'Danh sách phòng ban' }
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
                    <Link href="/admin/phong-ban/them" className="bg-graydark hover:opacity-80 text-white font-bold py-2 px-4 rounded text-center">
                        Thêm
                    </Link>
                </form>

            </div>

            {/* Table */}
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[10px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">#</th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Tên</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Địa điểm</th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.data && departments.data.length > 0 ? (
                            departments.data.map((department, index) => (
                                <tr key={department.id}>
                                    <td className="border-b border-[#eee] py-4 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        <h5 className="font-medium text-black dark:text-white">{index + 1}</h5>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">{department.name}</p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">{department.location}</p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <div className="flex items-center space-x-3.5">
                                            <Link href={`/admin/phong-ban/${department.id}/sua`} className="hover:text-primary">
                                                <i
                                                    className="fa-regular fa-pen-to-square text-xl"
                                                    title="Chỉnh sửa"
                                                ></i>
                                            </Link>
                                            <button className="hover:text-primary" onClick={() => handleDeleteClick(department.id)}>
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
                <Pagination link={departments.links} onPageChange={handlePageChange} />
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