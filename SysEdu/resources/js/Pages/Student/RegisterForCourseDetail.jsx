import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import { Link } from "@inertiajs/react";

const RegisterForCourseData = {
    courses: [
        {
            id: 1,
            code: "WDIT122",
            teacher: "Nhân Nghĩa",
            name: "Lập trình Web",
            teacherId: 1,
            study: "Ca 2",
            classTime: "8:00 - 10:00",
            startDate: "01-10-2024",
            notes: "Cần chuẩn bị tài liệu",
        },
        {
            id: 2,
            code: "WDIT122",
            teacher: "Minh Khánh",
            name: "Lập trình Web",
            teacherId: 2,
            study: "Ca 3",
            classTime: "10:00 - 12:00",
            startDate: "01-10-2024",
            notes: "Cần chuẩn bị tài liệu",
        },
        {
            id: 3,
            code: "WDIT122",
            teacher: "Phúc Hậu",
            name: "Lập trình Web",
            teacherId: 3,
            study: "Ca 4",
            classTime: "13:00 - 15:00",
            startDate: "01-10-2024",
            notes: "Cần chuẩn bị tài liệu",
        },
        {
            id: 4,
            code: "WDIT122",
            teacher: "Thái Lộc",
            name: "Lập trình Web",
            teacherId: 3,
            study: "Ca 5",
            classTime: "13:00 - 15:00",
            startDate: "01-10-2024",
            notes: "Cần chuẩn bị tài liệu",
        },
    ],
};

function RegisterForCourse() {
    const [selectedTeacher, setSelectedTeacher] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCourses = RegisterForCourseData.courses.slice(
        startIndex,
        endIndex,
    );
    const totalPages = Math.ceil(
        RegisterForCourseData.courses.length / itemsPerPage,
    );

    return (
        <div className="container mx-auto p-16 bg-white rounded-lg">
            <h3 className="text-2xl font-semibold">Đăng kí môn học</h3>
            <div className="flex flex-col mb-6 mt-4">
                <div className="mb-4">
                    <label
                        htmlFor="select"
                        className="block mb-2 font-medium text-gray-700 text-sm"
                    >
                        Học kỳ
                    </label>
                    <select
                        className="form-select border border-gray-200 rounded-md p-2 focus:ring focus:ring-blue-300 transition duration-150 w-full text-sm"
                        id="select"
                    >
                        <option>Summer 2024</option>
                        <option>Fall 2025</option>
                    </select>
                </div>
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
            <table className="table-auto w-full border border-gray-300 rounded-md text-sm">
                <thead className="bg-gray-200">
                    <tr>
                        {[
                            "STT",
                            "Mã môn",
                            "Tên môn",
                            "Giảng viên",
                            "Ca học",
                            "Ngày bắt đầu",
                            "Ghi chú",
                            "Thao tác",
                        ].map((header) => (
                            <th
                                key={header}
                                className="border border-gray-300 px-4 py-2 font-semibold text-left text-sm"
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
                                {course.startDate}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                {course.notes}
                            </td>
                            <td className="flex justify-center items-center">
                                <Link
                                    href="/student/chi-tiet-dang-ki-mon-hoc"
                                    className="bg-blue-500 text-white font-semibold py-2 px-4 m-2 rounded transition duration-200 hover:bg-blue-300 flex items-center text-sm"
                                >
                                    <i className="fas fa-pencil-alt mr-2"></i>{" "}
                                    Đăng kí
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
        </div>
    );
}

RegisterForCourse.layout = (page) => <Layout children={page} />;
export default RegisterForCourse;
