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
            amount: 30,
            teacherId: 1,
            study: "Ca 2",
            amount: 20,
            timeStart: "20/11/2024",
            timeEnd: "20/02/2024",
            classTime: "8:00 - 10:00",
            notes: "Cần chuẩn bị tài liệu",
        },
        {
            id: 2,
            code: "WDIT122",
            teacher: "Minh Khánh",
            name: "Lập trình Web",
            amount: 30,
            teacherId: 2,
            study: "Ca 3",
            amount: 20,
            timeStart: "20/11/2024",
            timeEnd: "20/02/2024",
            classTime: "10:00 - 12:00",
            notes: "Cần chuẩn bị tài liệu",
        },
        {
            id: 3,
            code: "WDIT122",
            teacher: "Phúc Hậu",
            name: "Lập trình Web",
            amount: 30,
            teacherId: 3,
            study: "Ca 4",
            amount: 20,
            timeStart: "20/11/2024",
            timeEnd: "20/02/2024",
            classTime: "13:00 - 15:00",
            notes: "Cần chuẩn bị tài liệu",
        },
        {
            id: 4,
            code: "WDIT122",
            teacher: "Thái Lộc",
            name: "Lập trình Web",
            teacherId: 3,
            study: "Ca 5",
            amount: 20,
            timeStart: "20/11/2024",
            timeEnd: "20/02/2024",
            classTime: "13:00 - 15:00",
            notes: "Cần chuẩn bị tài liệu",
        },
        {
            id: 5,
            code: "WDIT122",
            teacher: "Thái Lộc",
            name: "Lập trình Web",
            teacherId: 3,
            study: "Ca 6",
            amount: 20,
            timeStart: "20/11/2024",
            timeEnd: "20/02/2024",
            classTime: "16:00 - 18:00",
            notes: "Cần chuẩn bị tài liệu",
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
        <div className="container mx-auto p-16 bg-white rounded-lg shadow-default">
            <BreadcrumbStudent
                        items={[
                            { label: "Đăng kí môn học", link: "/student/dang-ki-mon-hoc" },
                            { label: "Chi tiết đăng ký môn học" },
                        ]}
                    />
            <div className="py-4">
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
                <table className="table-auto w-full border border-gray-300 rounded-md text-sm">
                    <thead className="bg-gray-200">
                        <tr>
                            {[
                                "STT",
                                "Mã môn",
                                "Tên môn",
                                "Giảng viên",
                                "Ca học",
                                "Số lượng",
                                "Ngày bắt đầu",
                                "Ngày kết thúc",
                                "Ghi chú",
                                "Thao tác",
                            ].map((header) => (
                                <th
                                    key={header}
                                    className="border border-gray-300 px-4 py-4 font-semibold text-center text-sm"
                                >
                                    {header}
                                </th>
                            ))}
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
                                <td className="border border-gray-300 px-4 py-2 text-sm">
                                    {course.teacher}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-sm">
                                    {course.study}
                                </td>

                                <td className="border border-gray-300 px-4 py-2 text-sm">
                                    {course.amount}
                                </td>

                                <td className="border border-gray-300 px-4 py-2 text-sm">
                                    {course.timeStart}
                                </td>

                                <td className="border border-gray-300 px-4 py-2 text-sm">
                                    {course.timeEnd}
                                </td>

                                <td className="border border-gray-300 px-4 py-2 text-sm">
                                    {course.notes}
                                </td>
                                <td className="flex justify-center items-center">
                                    <Link
                                        href="/student/chi-tiet-dang-ki-mon-hoc"
                                        className="w-30 bg-blue-500 text-white flex items-center text-sm py-2 px-4 m-2 rounded transition duration-200 hover:bg-blue-300"
                                    >
                                        <i className="fas fa-pencil-alt mr-2"></i>{" "}
                                        Đăng kí
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {totalPages > 1 && (
                    <div className="flex justify-center space-x-2 mt-4">
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                className={`px-4 py-2 rounded ${
                                    currentPage === i + 1
                                        ? "bg-blue-700"
                                        : "bg-blue-500"
                                } text-white hover:bg-blue-400 text-sm`}
                                onClick={() => setCurrentPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default RegisterForCourseDetail;
