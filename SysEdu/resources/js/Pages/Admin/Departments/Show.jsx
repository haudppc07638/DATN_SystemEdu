import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const Show = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleDeleteClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="py-6 px-4 md:px-6 xl:px-7.5 flex flex-col md:flex-row justify-between">
                <h4 className="text-xl font-semibold text-black dark:text-white mb-4 md:mb-0">
                    Danh sách phòng ban
                </h4>
                
                <div className='flex flex-col md:flex-row gap-5'>
                    <form action="" className='btn-group'>
                        <input type="search" className='border border-gray-300 rounded-md p-2 w-full md:w-auto' placeholder="Tìm kiếm" />
                    </form> 
      
                    <Link href="/admin/phong-ban/them" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
                        Thêm
                    </Link>

                </div>
            </div>
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[10px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                #
                            </th>
                            <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                                Tên
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Địa điểm
                            </th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">
                                Tác vụ
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                <h5 className="font-medium text-black dark:text-white">
                                    1
                                </h5>
                            </td>
                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                <p className="text-black dark:text-white">
                                    Phòng Hành chính
                                </p>
                            </td>
                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                <p className="text-black dark:text-white">
                                    Tòa 1, Tầng 1, Phòng Hành Chính
                                </p>
                            </td>
                            <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                <div className="flex items-center space-x-3.5">
                                    <button className="hover:text-primary">
                                        <i className="fa-regular fa-pen-to-square text-xl"></i>
                                    </button>
                                    <button className="hover:text-primary" onClick={handleDeleteClick}>
                                        <i className="fa-regular fa-trash-can text-xl"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Cảnh báo</h2>
                        <p>Bạn có chắc chắn muốn xóa mục này không?</p>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2" onClick={handleClosePopup}>
                                Hủy
                            </button>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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