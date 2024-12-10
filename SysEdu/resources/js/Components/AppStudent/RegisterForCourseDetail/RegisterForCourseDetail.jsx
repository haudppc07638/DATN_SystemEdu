import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import BreadcrumbStudent from "../../Breadcrumbs/BreadcrumbStudent";

const RegisterForCourseData = {
    courses: [
        {
            id: 1,
            code: "WDIT122",
            teacher: "Nhân Nghĩa",
            name: "Lập trình Web",
            teacherId: 1,
            study: "Ca 2",
            day: "Thứ 2,4,6",
            amount: 16,
            timeStart: "20/11/2024",
            timeEnd: "20/12/2024",
            classTime: "8:00 - 10:00",
            notes: "Cần chuẩn bị tài liệu",
            subjectCode: "WEB1022",
            registerDeadline: "20/12/2024",
        },
        {
            id: 2,
            code: "WDIT122",
            teacher: "Minh Khánh",
            name: "Lập trình Web",
            teacherId: 2,
            study: "Ca 3",
            day: "Thứ 3,5,7",
            amount: 18,
            timeStart: "20/11/2024",
            timeEnd: "20/12/2024",
            classTime: "10:00 - 12:00",
            notes: "Cần chuẩn bị tài liệu",
            subjectCode: "WEB1022",
            registerDeadline: "20/12/2024",
        },
        {
            id: 3,
            code: "WDIT122",
            teacher: "Phúc Hậu",
            name: "Lập trình Web",
            teacherId: 3,
            study: "Ca 4",
            day: "Thứ 2,4,6",
            amount: 11,
            timeStart: "20/11/2024",
            timeEnd: "20/12/2024",
            classTime: "13:00 - 15:00",
            notes: "Cần chuẩn bị tài liệu",
            subjectCode: "WEB1022",
            registerDeadline: "20/12/2024",
        },
        {
            id: 4,
            code: "WDIT122",
            teacher: "Thái Lộc",
            name: "Lập trình Web",
            teacherId: 3,
            study: "Ca 5",
            day: "Thứ 3,5,7",
            amount: 15,
            timeStart: "20/11/2024",
            timeEnd: "20/12/2024",
            classTime: "13:00 - 15:00",
            notes: "Cần chuẩn bị tài liệu",
            subjectCode: "WEB1022",
            registerDeadline: "20/12/2024",
        },
        {
            id: 5,
            code: "WDIT122",
            teacher: "Thái Lộc",
            name: "Lập trình Web",
            teacherId: 3,
            study: "Ca 6",
            day: "Thứ 2,4,6",
            amount: 19,
            timeStart: "20/11/2024",
            timeEnd: "20/12/2024",
            classTime: "16:00 - 18:00",
            notes: "Cần chuẩn bị tài liệu",
            subjectCode: "WEB1022",
            registerDeadline: "20/12/2024",
        },
    ],
};

function RegisterForCourseDetail() {
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
                    Đăng kí môn học
                </h2>
                <BreadcrumbStudent
                    items={[
                        {
                            label: "Danh sách môn học",
                            link: "/student/dang-ki-mon-hoc",
                        },
                        { label: "Đăng ký môn học" },
                    ]}
                />
            </div>

            <div className="flex justify-end mb-3 mt-5">
                {["Print", "Copy", "Excel", "CSV", "PDF"].map((action) => (
                    <div
                        key={action}
                        className="px-3 py-2 bg-graydark text-white cursor-pointer text-sm"
                    >
                        {action}
                    </div>
                ))}
            </div>

            <div className="bg-white shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                                <th className="py-3 px-4 text-sm text-center font-medium">STT</th>
                                <th className="py-3 px-4 text-sm text-center font-medium">
                                    Mã môn
                                </th>
                                <th className="py-3 px-4 text-sm text-center font-medium">
                                    Tên môn
                                </th>
                                <th className="py-3 px-4 text-sm text-center font-medium">
                                    Giảng viên
                                </th>
                                <th className="py-3 px-4 text-sm text-center font-medium">
                                    Ca học
                                </th>
                                <th className="py-3 px-4 text-sm text-center font-medium">
                                    Ngày học
                                </th>
                                <th className="py-3 px-4 text-sm text-center font-medium">SL</th>
                                <th className="py-3 px-4 text-sm text-center font-medium">
                                    Bắt đầu
                                </th>
                                <th className="py-3 px-4 text-sm text-center font-medium">
                                    Kết thúc
                                </th>
                                <th className="py-3 px-4 text-sm text-center font-medium">
                                    Hạn ĐK
                                </th>
                                <th className="py-3 px-4 text-sm text-center font-medium">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {currentCourses.map((course, index) => (
                                <tr
                                    key={course.id}
                                    className="hover:bg-gray-50"
                                >
                                    <td className="py-4 px-4 text-center text-sm">
                                        {startIndex + index + 1}
                                    </td>
                                    <td className="py-4 px-4 text-center text-sm">
                                        {course.code}
                                    </td>
                                    <td className="py-4 px-4 text-center text-sm">
                                        {course.name}
                                    </td>
                                    <td className="py-4 px-4 text-center text-sm">
                                        {course.teacher}
                                    </td>
                                    <td className="py-4 px-4 text-center text-sm">
                                        {course.study}
                                    </td>
                                    <td className="py-4 px-4 text-center text-sm">
                                        {course.day}
                                    </td>
                                    <td className="py-4 px-4 text-center text-sm">
                                        {course.amount}/20
                                    </td>
                                    <td className="py-4 px-4 text-center text-sm">
                                        {course.timeStart}
                                    </td>
                                    <td className="py-4 px-4 text-center text-sm">
                                        {course.timeEnd}
                                    </td>
                                    <td className="py-4 px-4 text-center text-sm">
                                        {course.registerDeadline}
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        <Link
                                            href="/student/chi-tiet-dang-ki-mon-hoc"
                                            className="bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-500"
                                        >
                                            <i className="fas fa-pencil-alt mr-1"></i>
                                            Đăng kí
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                    <div className="flex space-x-1">
                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1,
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded ${
                                    currentPage === page
                                        ? "bg-blue-700 text-white"
                                        : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                                }`}
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

export default RegisterForCourseDetail;
