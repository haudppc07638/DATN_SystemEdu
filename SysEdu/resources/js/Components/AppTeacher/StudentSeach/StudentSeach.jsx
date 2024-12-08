import React, { useEffect, useState } from "react";
import BreadcrumbTeacher from "../../Breadcrumbs/BreadcrumbTeacher";
import { router } from "@inertiajs/react";

function StudentSearch({ students: initialStudents }) {
    const [loading, setLoading] = useState(true);
    const [students, setStudents] = useState(initialStudents || []);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredStudents, setFilteredStudents] = useState(
        initialStudents || [],
    );
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredStudents(students);
            console.log(students);
        } else {
            const searchResults = students.filter(
                (student) =>
                    student.full_name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    student.code
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    student.email
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    (student.major?.name || "")
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    (student.majorClass?.name || "")
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()),
            );
            setFilteredStudents(searchResults);
        }
        setCurrentPage(1);
    }, [searchTerm, students]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStudents = filteredStudents.slice(
        indexOfFirstItem,
        indexOfLastItem,
    );
    const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleViewDetail = (studentId) => {
        router.get(`/student-seach/${studentId}`);
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
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Tìm kiếm sinh viên
                </h2>
                <div className="flex flex-col items-start">
                    <BreadcrumbTeacher
                        items={[{ label: "Tìm kiếm sinh viên" }]}
                    />
                </div>
            </div>

            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sinh viên..."
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
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                            <th className="py-4 px-6 text-center font-semibold">
                                STT
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Tên sinh viên
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Mã sinh viên
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Email
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Số điện thoại
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Chuyên ngành
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Tác vụ
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {currentStudents.length > 0 ? (
                            currentStudents.map((student, index) => (
                                <tr
                                    key={student.id}
                                    className="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td className="py-4 px-6 text-center">
                                        {(currentPage - 1) * itemsPerPage +
                                            index +
                                            1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {student.full_name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {student.code}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {student.email}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {student.phone}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {student.major?.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                        <button
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                            onClick={() =>
                                                handleViewDetail(student.id)
                                            }
                                        >
                                            Xem chi tiết
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="py-8 text-center text-gray-500 text-sm"
                                >
                                    Không tìm thấy sinh viên nào.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="mt-6 flex justify-center">
                    <div className="flex space-x-2">
                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1,
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 rounded-lg ${
                                    currentPage === page
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                } transition-colors duration-200`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default StudentSearch;
