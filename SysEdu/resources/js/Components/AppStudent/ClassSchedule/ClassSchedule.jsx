import React, { useState, useEffect } from "react";
import BreadcrumbStudent from "../../Breadcrumbs/BreadcrumbStudent";

const classSchedulesData = [
    {
        id: 1,
        schoolday: "Thứ Ba 12/10/2024",
        classroom: "K302",
        lecturehall: "Sys Ninh Kiều",
        code: "CS101",
        name: "Lập trình C++",
        class: "IT30412",
        teacher: "nghiatn",
        study: "Ca 1",
        timestudy: "08:00 - 10:00",
    },
    {
        id: 2,
        schoolday: "Thứ Năm 13/10/2024",
        classroom: "K305",
        lecturehall: "Sys Ninh Kiều",
        code: "CS102",
        name: "Lập trình Java",
        class: "IT30412",
        teacher: "namnv",
        study: "Ca 2",
        timestudy: "10:00 - 12:00",
    },
    {
        id: 3,
        schoolday: "Thứ Bảy 14/10/2024",
        classroom: "K303",
        lecturehall: "Sys Ninh Kiều",
        code: "CS103",
        name: "Lập trình Python",
        class: "IT30412",
        teacher: "anpv",
        study: "Ca 1",
        timestudy: "08:00 - 10:00",
    },
    {
        id: 4,
        schoolday: "Thứ Ba 15/10/2024",
        classroom: "K304",
        lecturehall: "Sys Ninh Kiều",
        code: "CS104",
        name: "Lập trình Web",
        class: "IT30412",
        teacher: "dungmv",
        study: "Ca 2",
        timestudy: "10:00 - 12:00",
    },
    {
        id: 5,
        schoolday: "Thứ Năm 16/10/2024",
        classroom: "K302",
        lecturehall: "Sys Ninh Kiều",
        code: "CS105",
        name: "Cơ sở dữ liệu",
        class: "IT30412",
        teacher: "linhnp",
        study: "Ca 3",
        timestudy: "13:00 - 15:00",
    },
    {
        id: 6,
        schoolday: "Thứ Bảy 17/10/2024",
        classroom: "K301",
        lecturehall: "Sys Ninh Kiều",
        code: "CS106",
        name: "Hệ điều hành",
        class: "IT30412",
        teacher: "phongnv",
        study: "Ca 1",
        timestudy: "08:00 - 10:00",
    },
    {
        id: 7,
        schoolday: "Thứ Ba 18/10/2024",
        classroom: "K305",
        lecturehall: "Sys Ninh Kiều",
        code: "CS107",
        name: "Lập trình Mobile",
        class: "IT30412",
        teacher: "tuanlt",
        study: "Ca 2",
        timestudy: "10:00 - 12:00",
    },
    {
        id: 8,
        schoolday: "Thứ Năm 19/10/2024",
        classroom: "K302",
        lecturehall: "Sys Ninh Kiều",
        code: "CS108",
        name: "Phân tích thiết kế hệ thống",
        class: "IT30412",
        teacher: "anhvh",
        study: "Ca 3",
        timestudy: "13:00 - 15:00",
    },
    {
        id: 9,
        schoolday: "Thứ Bảy 20/10/2024",
        classroom: "K301",
        lecturehall: "Sys Ninh Kiều",
        code: "CS109",
        name: "Mạng máy tính",
        class: "IT30412",
        teacher: "anhvh",
        study: "Ca 1",
        timestudy: "08:00 - 10:00",
    },
    {
        id: 10,
        schoolday: "Thứ Ba 21/10/2024",
        classroom: "K304",
        lecturehall: "Sys Ninh Kiều",
        code: "CS110",
        name: "Kỹ thuật phần mềm",
        class: "IT30412",
        teacher: "caopn",
        study: "Ca 2",
        timestudy: "10:00 - 12:00",
    },
];

function ClassSchedule() {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCourses = classSchedulesData.slice(
        startIndex,
        startIndex + itemsPerPage,
    );
    const totalPages = Math.ceil(classSchedulesData.length / itemsPerPage);

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
                <h2 className="text-2xl font-bold">Lịch học</h2>
                <div className="flex flex-col items-start">
                    <BreadcrumbStudent items={[{ label: "Lịch học" }]} />
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-1/4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Thời gian
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                                Ngày
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Phòng
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Giảng đường
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Mã môn
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Môn học
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Lớp môn
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Giảng viên
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Ca học
                            </th>
                            <th className="py-3 px-4 text-center text-sm font-medium">
                                Giờ học
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {currentCourses.map((course, index) => (
                            <tr key={course.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 text-center text-sm">
                                    {startIndex + index + 1}
                                </td>
                                <td className="py-2 px-4 text-sm">
                                    {course.schoolday}
                                </td>
                                <td className="py-2 px-4 text-center text-sm">
                                    {course.classroom}
                                </td>
                                <td className="py-2 px-4 text-center text-sm">
                                    {course.lecturehall}
                                </td>
                                <td className="py-2 px-4 text-center text-sm">
                                    {course.code}
                                </td>
                                <td className="py-2 px-4 text-sm">
                                    {course.name}
                                </td>
                                <td className="py-2 px-4 text-center text-sm">
                                    {course.class}
                                </td>
                                <td className="py-2 px-4 text-center text-sm">
                                    {course.teacher}
                                </td>
                                <td className="py-2 px-4 text-center text-sm">
                                    {course.study}
                                </td>
                                <td className="py-2 px-4 text-center text-sm">
                                    {course.timestudy}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="mt-4 flex justify-center">
                    <div className="flex space-x-1">
                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1,
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 text-xs rounded ${
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

export default ClassSchedule;
