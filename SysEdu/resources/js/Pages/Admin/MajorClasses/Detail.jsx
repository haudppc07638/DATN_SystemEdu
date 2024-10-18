import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Detail = ({ adviser ,students }) => {

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">

            {/* Breadcrumb */}
            <Breadcrumb items={[
                { label: 'Quản lý lớp chuyên ngành', link: '' },
                { label: 'Danh sách phòng ban' }
            ]} />

            

            {/* Table */}
            <div className="max-w-full overflow-x-auto">
                
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[10px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">#</th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Họ và tên</th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Địa điểm</th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.data && student.data.length > 0 ? (
                            students.data.map((student, index) => (
                                <tr key={student.id}>
                                    <td className="border-b border-[#eee] py-4 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        <h5 className="font-medium text-black dark:text-white">{index + 1}</h5>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">{student.name}</p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">{student.location}</p>
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

export default Detail;