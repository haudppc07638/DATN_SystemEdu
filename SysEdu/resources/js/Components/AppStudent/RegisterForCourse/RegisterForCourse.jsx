import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import BreadcrumbStudent from "../../Breadcrumbs/BreadcrumbStudent";

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
        <div className="container mx-auto p-8 bg-white rounded-xl shadow-lg">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                    Danh sách môn học
                </h2>
                <div className="flex flex-col items-start">
                    <BreadcrumbStudent
                        items={[{ label: "Danh sách môn học" }]}
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <div className="w-1/4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Thời gian
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                            <option>7 ngày tới</option>
                            <option>14 ngày tới</option>
                            <option>30 ngày tới</option>
                            <option>60 ngày tới</option>
                            <option>90 ngày tới</option>
                            <option>7 ngày trước</option>
                            <option>14 ngày trước</option>
                            <option>30 ngày trước</option>
                            <option>60 ngày trước</option>
                            <option>90 ngày trước</option>
                        </select>
                    </div>
                </div>
            </div>

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

            <div className="bg-white shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                                <th className="py-4 px-6 text-center text-sm font-medium">
                                    STT
                                </th>
                                <th className="py-4 px-6 text-center text-sm font-medium">
                                    Mã môn học
                                </th>
                                <th className="py-4 px-6 text-center text-sm font-medium">
                                    Tên môn
                                </th>
                                <th className="py-4 px-6 text-center text-sm font-medium">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {currentCourses.map((course, index) => (
                                <tr
                                    key={course.id}
                                    className="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td className="py-4 px-6 text-center text-sm text-gray-900">
                                        {startIndex + index + 1}
                                    </td>
                                    <td className="py-4 px-6 text-center text-sm text-gray-900">
                                        {course.code}
                                    </td>
                                    <td className="py-4 px-6 text-sm text-center text-gray-900">
                                        {course.name}
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Link
                                            href="/student/chi-tiet-dang-ki-mon-hoc"
                                            className="bg-green-600 text-white py-2 px-4 rounded transition duration-200 hover:bg-green-500 inline-flex items-center text-sm"
                                        >
                                            <i className="fas fa-eye mr-2"></i>{" "}
                                            Xem chi tiết
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
                                onClick={() => setCurrentPage(page)}
                                className={`px-4 py-2 rounded-lg ${
                                    currentPage === page
                                        ? "bg-blue-700 text-white"
                                        : "bg-blue-100 text-blue-600 hover:bg-blue-200"
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

export default RegisterForCourse;
