import React, { useEffect, useState } from "react";
import BreadcrumbStudent from "../../Breadcrumbs/BreadcrumbStudent";

const scoreBoardData = {
    courses: [
        {
            id: 1,
            secondperiod: 1,
            code: "MOB101",
            name: "Lập trình di động cơ bản",
            numbercredits: 4,
            score: 8.5,
            status: "Passed",
        },
        {
            id: 2,
            secondperiod: 1,
            code: "PRJ101",
            name: "Dự án lập trình Java",
            numbercredits: 5,
            score: 7.8,
            status: "Passed",
        },
        {
            id: 3,
            secondperiod: 2,
            code: "DBI101",
            name: "Quản trị cơ sở dữ liệu",
            numbercredits: 4,
            score: 6.5,
            status: "Passed",
        },
        {
            id: 4,
            secondperiod: 2,
            code: "NET101",
            name: "Lập trình .NET",
            numbercredits: 5,
            score: 4.5,
            status: "Failed",
        },
        {
            id: 5,
            secondperiod: 2,
            code: "PYT101",
            name: "Lập trình Python",
            numbercredits: 4,
            score: 8.2,
            status: "Passed",
        },
        {
            id: 6,
            secondperiod: 3,
            code: "IOT101",
            name: "Internet vạn vật",
            numbercredits: 4,
            score: 7.5,
            status: "Passed",
        },
        {
            id: 7,
            secondperiod: 3,
            code: "AIS101",
            name: "Trí tuệ nhân tạo cơ bản",
            numbercredits: 5,
            score: 8.0,
            status: "Passed",
        },
        {
            id: 8,
            secondperiod: 3,
            code: "CSD101",
            name: "Cấu trúc dữ liệu nâng cao",
            numbercredits: 4,
            score: 7.2,
            status: "Passed",
        },
        {
            id: 9,
            secondperiod: 4,
            code: "SWD101",
            name: "Phát triển phần mềm",
            numbercredits: 5,
            score: 8.5,
            status: "Passed",
        },
        {
            id: 10,
            secondperiod: 4,
            code: "NWC101",
            name: "Mạng máy tính nâng cao",
            numbercredits: 4,
            score: 7.8,
            status: "Passed",
        },
        {
            id: 11,
            secondperiod: 5,
            code: "SES101",
            name: "Bảo mật phần mềm",
            numbercredits: 4,
            score: 8.2,
            status: "Passed",
        },
        {
            id: 12,
            secondperiod: 5,
            code: "PRO101",
            name: "Quy trình phát triển phần mềm",
            numbercredits: 5,
            score: 7.5,
            status: "Passed",
        },
        {
            id: 13,
            secondperiod: 6,
            code: "DPS101",
            name: "Xử lý dữ liệu phân tán",
            numbercredits: 4,
            score: 8.0,
            status: "Passed",
        },
        {
            id: 14,
            secondperiod: 6,
            code: "MLN101",
            name: "Học máy và mạng neural",
            numbercredits: 4,
            score: 7.8,
            status: "Passed",
        },
        {
            id: 15,
            secondperiod: 7,
            code: "WEB101",
            name: "Lập trình Web",
            numbercredits: 5,
            score: 8.5,
            status: "Passed",
        },
        {
            id: 16,
            secondperiod: 7,
            code: "RJS101",
            name: "Lập trình ReactJS",
            numbercredits: 4,
            score: 7.9,
            status: "Passed",
        },
    ],
};

function ScoreBoard() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(scoreBoardData);
    const { courses } = data;

    const itemsPerPage = 100;
    const totalPages = Math.ceil(courses.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCourses = courses.slice(startIndex, startIndex + itemsPerPage);
    const setPage = (page) => {
        if (page < 1) page = 1;
        if (page > totalPages) page = totalPages;
        setCurrentPage(page);
    };

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
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-default">
            <div className="mb-8">
                <h2 className="text-2xl font-bold">Lịch sử bảng điểm</h2>
                <div className="flex flex-col items-start">
                    <BreadcrumbStudent
                        items={[{ label: "Lịch sử bảng điểm" }]}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-1/4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Thời gian
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Spring 2024</option>
                            <option>Summer 2024</option>
                            <option>Fall 2024</option>
                            <option>Winter 2024</option>
                        </select>
                    </div>
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
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                STT
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Kỳ thứ
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Mã môn
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Tên môn
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Số tín chỉ
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Điểm
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Trạng thái
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {currentCourses.map((course, index) => (
                            <tr key={course.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                    {startIndex + index + 1}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                    {course.secondperiod}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                    {course.code}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {course.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                    {course.numbercredits}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                                    {course.score}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                    <span
                                        className={`${
                                            course.status === "Passed"
                                                ? "text-green-600 font-semibold"
                                                : course.status === "Failed"
                                                  ? "text-red-600 font-semibold"
                                                  : ""
                                        }`}
                                    >
                                        {course.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-gray-100 p-4 mt-6 rounded-lg">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-semibold text-lg mb-2">
                            Điểm trung bình
                        </h3>
                        <p className="text-2xl font-bold text-blue-600">
                            {(
                                scoreBoardData.courses.reduce(
                                    (sum, course) => sum + course.score,
                                    0,
                                ) / scoreBoardData.courses.length
                            ).toFixed(1)}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-semibold text-lg mb-2">Tín chỉ</h3>
                        <p className="text-lg">
                            <span className="font-bold text-green-600">
                                {scoreBoardData.courses
                                    .filter(
                                        (course) => course.status === "Passed",
                                    )
                                    .reduce(
                                        (sum, course) =>
                                            sum + course.numbercredits,
                                        0,
                                    )}
                            </span>
                            <span className="text-gray-500">/</span>
                            <span className="font-bold">
                                {scoreBoardData.courses.reduce(
                                    (sum, course) => 110,
                                    0,
                                )}
                            </span>
                            <span className="text-sm text-gray-500 ml-2">
                                (Đạt / Tổng)
                            </span>
                        </p>
                        <p className="text-sm text-gray-500">0 miễn giảm</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-lg mb-4">Thống kê</h3>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                                    Tổng môn đạt
                                </th>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                                    Tổng môn học lại
                                </th>
                                <th className="border border-gray-300 px-4 py-2 bg-gray-100">
                                    Tổng môn đang học
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center">
                                <td className="border border-gray-300 px-4 py-3">
                                    <span className="text-xl font-bold text-green-600">
                                        {
                                            scoreBoardData.courses.filter(
                                                (course) =>
                                                    course.status === "Passed",
                                            ).length
                                        }
                                    </span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                    <span className="text-xl font-bold text-red-600">
                                        {
                                            scoreBoardData.courses.filter(
                                                (course) =>
                                                    course.status === "Failed",
                                            ).length
                                        }
                                    </span>
                                </td>
                                <td className="border border-gray-300 px-4 py-3">
                                    <span className="text-xl font-bold text-blue-600">
                                        {
                                            scoreBoardData.courses.filter(
                                                (course) =>
                                                    course.status ===
                                                    "In Progress",
                                            ).length
                                        }
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ScoreBoard;
