import React, { useEffect, useState } from "react";
import BreadcrumbTeacher from "../../Breadcrumbs/BreadcrumbTeacher";
import { Link } from "@inertiajs/react";
import axios from "axios";

function Attendance() {
    const [loading, setLoading] = useState(true);
    const [currentClasses, setCurrentClasses] = useState([]);
    const [pastClasses, setPastClasses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredClasses, setFilteredClasses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [openMenu, setOpenMenu] = useState(null);
    const itemsPerPage = 10;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/attendance/class-list");
                setCurrentClasses(response.data.currentClasses);
                setPastClasses(response.data.pastClasses.data);
                setFilteredClasses([
                    ...response.data.currentClasses,
                    ...response.data.pastClasses.data,
                ]);
                setLoading(false);
            } catch (error) {
                console.error("Lỗi khi tải dữ liệu:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredClasses([...currentClasses, ...pastClasses]);
        } else {
            const filtered = [...currentClasses, ...pastClasses].filter(
                (classItem) =>
                    classItem.subject.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    classItem.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
            );
            setFilteredClasses(filtered);
        }
        setCurrentPage(1);
    }, [searchTerm, currentClasses, pastClasses]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openMenu && !event.target.closest(".relative")) {
                setOpenMenu(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedClasses = filteredClasses.slice(
        indexOfFirstItem,
        indexOfLastItem,
    );
    const totalPages = Math.ceil(filteredClasses.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed border-t-blue-600 border-b-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-8 bg-white rounded-xl shadow-lg">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                    Danh sách lớp điểm danh
                </h2>
                <BreadcrumbTeacher
                    items={[{ label: "Danh sách lớp điểm danh" }]}
                />
            </div>

            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Tìm kiếm lớp học..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute right-3 top-2">
                        <i className="fas fa-search text-gray-400 text-lg"></i>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                            <th className="py-2 px-3 text-center font-semibold">
                                STT
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Lớp môn
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Tên môn
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Mã môn
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Số lượng sinh viên
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Ngày bắt đầu
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Ngày kết thúc
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Tác vụ
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {paginatedClasses.length > 0 ? (
                            paginatedClasses.map((classItem, index) => (
                                <tr
                                    key={classItem.id}
                                    className="hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                        {(currentPage - 1) * itemsPerPage +
                                            index +
                                            1}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {classItem.name}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {classItem.subject.name}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {classItem.subject.code}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {classItem.quantity} sinh viên
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {classItem.start_date}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {classItem.end_date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-medium">
                                        <div className="relative inline-block text-left">
                                            <button
                                                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                                                onClick={() =>
                                                    setOpenMenu(classItem.id)
                                                }
                                            >
                                                <i className="fas fa-ellipsis-v"></i>
                                            </button>

                                            {openMenu === classItem.id && (
                                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                                    <div className="py-1">
                                                        <Link
                                                            href={`/attendance/class-detail/${classItem.id}`}
                                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                            <i className="fas fa-eye mr-2"></i>
                                                            Xem chi tiết
                                                        </Link>
                                                        <Link
                                                            href={`/attendance/class-detail/${classItem.id}`}
                                                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                            <i className="fas fa-user-check mr-2"></i>
                                                            Điểm danh
                                                        </Link>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="px-6 py-4 text-center text-sm text-gray-500"
                                >
                                    Không tìm thấy lớp nào.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center mt-4 gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-3 py-1 text-sm rounded-md ${
                                currentPage === i + 1
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Attendance;
