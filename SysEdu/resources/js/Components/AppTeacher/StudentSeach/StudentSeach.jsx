import React, { useEffect, useState } from "react";
import BreadcrumbTeacher from "../../Breadcrumbs/BreadcrumbTeacher";
import axios from "axios";

function StudentSearch({ students: initialStudents }) {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [students, setStudents] = useState(initialStudents || []);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const searchStudents = async () => {
            try {
                if (searchTerm.trim() === "") {
                    const response = await axios.get("/api/all-students");
                    if (response.data.status === "success") {
                        setStudents(response.data.data);
                    }
                } else {
                    const response = await axios.get("/api/students", {
                        params: {
                            search_term: searchTerm,
                        },
                    });
                    if (response.data.status === "success") {
                        setStudents(response.data.data);
                    }
                }
            } catch (error) {
                console.error("Lỗi khi tìm kiếm sinh viên:", error);
            }
        };

        const delaySearch = setTimeout(() => {
            searchStudents();
        }, 500);

        return () => clearTimeout(delaySearch);
    }, [searchTerm]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStudents = students.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(students.length / itemsPerPage);

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
                        placeholder="Nhập tên, mã, email hoặc số điện thoại sinh viên..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute right-3 top-2">
                        <i className="fas fa-search text-gray-400 text-lg"></i>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                            <th className="py-2 px-2 font-semibold text-center">
                                STT
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Tên sinh viên
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Mã sinh viên
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Email
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Số điện thoại
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Quê quán
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Chuyên ngành
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Lớp
                            </th>
                            <th className="py-2 px-2 font-semibold text-left">
                                Trạng thái
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
                                    <td className="py-2 px-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {(currentPage - 1) * itemsPerPage +
                                            index +
                                            1}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {student.full_name}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {student.code}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {student.email}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {student.phone}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {student.provice_city}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {student.major?.name}
                                    </td>
                                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {student.stuClass?.name}.....................
                                    </td>
                                    <td
                                        className={`px-2 py-4 whitespace-nowrap text-sm rounded-md ${
                                            student.status === "active"
                                                ? "text-green-600"
                                                : student.status === "inactive"
                                                  ? "text-red-600"
                                                  : student.status ===
                                                      "graduated"
                                                    ? "text-blue-600"
                                                    : student.status ===
                                                        "suspended"
                                                      ? "text-orange-600"
                                                      : student.status ===
                                                          "deferred"
                                                        ? "text-yellow-600"
                                                        : "text-gray-600"
                                        }`}
                                    >
                                        {student.status === "active"
                                            ? "Đang học"
                                            : student.status === "inactive"
                                              ? "Không hoạt động"
                                              : student.status === "graduated"
                                                ? "Đã tốt nghiệp"
                                                : student.status === "suspended"
                                                  ? "Đình chỉ"
                                                  : student.status ===
                                                      "deferred"
                                                    ? "Hoãn lại"
                                                    : "Không xác định"}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="8"
                                    className="py-4 text-center text-gray-500 text-sm"
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
                                className={`px-4 py-2 text-sm rounded-lg ${
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
