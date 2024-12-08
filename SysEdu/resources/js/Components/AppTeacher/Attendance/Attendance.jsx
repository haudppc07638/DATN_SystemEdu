import React, { useEffect, useState } from "react";
import BreadcrumbTeacher from "../../Breadcrumbs/BreadcrumbTeacher";
import { Link } from "@inertiajs/react";

const classList = [
    {
        id: 1,
        className: "Lập trình Website",
        classCode: "Lập Trình Web-WD18302",
        numberOfStudents: 30,
        date: "01/12/2024",
        study: "Ca 3",
    },
    {
        id: 2,
        className: "Lập trình Website",
        classCode: "Lập Trình Web-WD18303",
        numberOfStudents: 25,
        date: "01/12/2024",
        study: "Ca 4",
    },
    {
        id: 3,
        className: "Lập trình Website",
        classCode: "Lập Trình Web-WD18304",
        numberOfStudents: 28,
        date: "01/12/2024",
        study: "Ca 5",
    },
    {
        id: 4,
        className: "Lập trình Website",
        classCode: "Lập Trình Web-WD18305",
        numberOfStudents: 32,
        date: "02/12/2024",
        study: "Ca 1",
    },
];

function Attendance() {
    const [loading, setLoading] = useState(true);
    const [classes] = useState(classList);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredClasses, setFilteredClasses] = useState(classList);
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
        if (searchTerm.trim() === "") {
            setFilteredClasses(classes);
        } else {
            setFilteredClasses(
                classes.filter(
                    (classItem) =>
                        classItem.className
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        classItem.classCode
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()),
                ),
            );
        }
        setCurrentPage(1);
    }, [searchTerm, classes]);

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
    const currentClasses = filteredClasses.slice(
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
                            <th className="py-4 px-6 text-center font-semibold">
                                STT
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Môn
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Tên lớp
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Số lượng sinh viên
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Ngày học
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Ca học
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Tác vụ
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentClasses.length > 0 ? (
                            currentClasses.map((classItem, index) => (
                                <tr
                                    key={classItem.id}
                                    className="hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                        {(currentPage - 1) * itemsPerPage +
                                            index +
                                            1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {classItem.className}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {classItem.classCode}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {classItem.numberOfStudents}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {classItem.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {classItem.study}
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
                                                            href="/teacher/"
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                            Xem chi tiết
                                                        </Link>
                                                        <Link
                                                            href="/teacher/"
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        >
                                                            Chỉnh sửa
                                                        </Link>
                                                        <Link
                                                            href="/teacher/student-attendance-detail"
                                                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                                                                new Date(
                                                                    classItem.date,
                                                                ) > new Date()
                                                                    ? "pointer-events-none opacity-50"
                                                                    : ""
                                                            }`}
                                                        >
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
