import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

const RegisterForCourseData = {
    courses: [
        {
            id: 1,
            code: "WDIT122",
            teacher: "Nghĩa",
            name: "Lập trình Web",
            teacherId: 1,
            classTime: "8:00 - 10:00",
            startDate: "01-10-2024",
            notes: "Cần chuẩn bị tài liệu",
        },
        {
            id: 2,
            code: "WDBE322",
            name: "Lập trình PHP",
            teacherId: 1,
            classTime: "10:00 - 12:00",
            startDate: "01-10-2024",
            notes: "Cần chuẩn bị tài liệu",
        },
        {
            id: 3,
            code: "WDFE222",
            name: "Lập trình JavaScript",
            teacherId: 1,
            classTime: "13:00 - 15:00",
            startDate: "01-10-2024",
            notes: "Cần chuẩn bị tài liệu",
        },
        {
            id: 4,
            code: "WDFE222",
            name: "Lập trình JavaScript",
            teacherId: 1,
            classTime: "13:00 - 15:00",
            startDate: "01-10-2024",
            notes: "Cần chuẩn bị tài liệu",
        },
        {
            id: 5,
            code: "WDFE222",
            name: "Lập trình JavaScript",
            teacherId: 1,
            classTime: "13:00 - 15:00",
            startDate: "01-10-2024",
            notes: "Cần chuẩn bị tài liệu",
        },
    ],
};

function RegisterForCourse() {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCourses = RegisterForCourseData.courses.slice(
        startIndex,
        endIndex,
    );
    const totalPages = Math.ceil(
        RegisterForCourseData.courses.length / itemsPerPage,
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed border-t-blue-500 border-b-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-16 bg-white rounded-lg">
            <h3 className="text-2xl font-semibold">Đăng kí môn học</h3>
            <div className="py-4">
                <div className="flex justify-end mb-3 mt-5">
                    {["Print", "Copy", "Excel", "CSV", "PDF"].map((header) => (
                        <div
                            key={header}
                            className="px-3 py-2 bg-graydark text-white cursor-pointer text-sm"
                        >
                            {header}
                        </div>
                    ))}
                </div>
                <table className="table-auto w-full border border-gray-300 rounded-md">
                    <thead className="bg-gray-200">
                        <tr>
                            {["STT", "Mã môn", "Tên môn", "Thao tác"].map(
                                (header) => (
                                    <th
                                        key={header}
                                        className="border border-gray-300 px-4 py-4 font-semibold text-center text-sm"
                                    >
                                        {header}
                                    </th>
                                ),
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {currentCourses.map((course, index) => (
                            <tr
                                key={course.id}
                                className="border-b border-gray-300"
                            >
                                <td className="border border-gray-300 px-4 py-2 text-sm text-center">
                                    {startIndex + index + 1}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-sm">
                                    {course.code}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-sm">
                                    {course.name}
                                </td>
                                <td className="flex justify-center items-center text-sm">
                                    <Link
                                        href="/student/chi-tiet-dang-ki-mon-hoc"
                                        className="bg-green-500 text-white py-2 px-4 m-2 rounded transition duration-200 hover:bg-green-300 flex items-center text-sm"
                                    >
                                        <i className="fas fa-eye mr-2"></i> Xem
                                        chi tiết
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-center space-x-2 mt-4 text-sm">
                    {totalPages > 1 &&
                        [...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                className={`px-4 py-2 rounded ${
                                    currentPage === i + 1
                                        ? "bg-blue-700"
                                        : "bg-blue-500"
                                } text-white`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default RegisterForCourse;
