import React, { useState } from "react";
import Layout from "../../Layouts/Layout";

const classSchedulesData = [
    {
        id: 1,
        schoolday: "Chủ Nhật 12/10/2024",
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
        schoolday: "Thứ Hai 13/10/2024",
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
        schoolday: "Thứ Ba 14/10/2024",
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
        schoolday: "Thứ Tư 15/10/2024",
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
        schoolday: "Thứ Sáu 17/10/2024",
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
        schoolday: "Thứ Bảy 18/10/2024",
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
        schoolday: "Chủ Nhật 19/10/2024",
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
        schoolday: "Thứ Hai 20/10/2024",
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
    {
        id: 11,
        schoolday: "Thứ Ba 21/10/2024",
        classroom: "K304",
        lecturehall: "Sys Ninh Kiều",
        code: "CS110",
        name: "Kỹ thuật phần mềm",
        class: "IT30412",
        teacher: "duytn",
        study: "Ca 2",
        timestudy: "10:00 - 12:00",
    },
];

function ClassSchedule() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentCourses = classSchedulesData.slice(
        startIndex,
        startIndex + itemsPerPage,
    );
    const totalPages = Math.ceil(classSchedulesData.length / itemsPerPage);

    return (
        <div className="container mx-auto p-16 bg-white rounded-lg">
            <h3 className="text-2xl font-semibold">Lịch học</h3>
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
                {["Print", "Copy", "Excel", "CSV", "PDF"].map((header) => (
                    <div
                        key={header}
                        className="px-3 py-2 bg-graydark text-white cursor-pointer text-sm"
                    >
                        {header}
                    </div>
                ))}
            </div>
            <table className="table-auto w-full border border-gray-300 rounded-md text-sm">
                <thead className="bg-gray-200">
                    <tr>
                        {[
                            "STT",
                            "Ngày",
                            "Phòng",
                            "Giảng đường",
                            "Mã môn",
                            "Môn",
                            "Lớp",
                            "Giảng viên",
                            "Ca học",
                            "Giờ học",
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
                    {currentCourses.map((courses, index) => (
                        <tr
                            key={courses.id}
                            className="border-b border-gray-300"
                        >
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                {startIndex + index + 1}
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-sm">
                                {courses.schoolday}
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-sm">
                                {courses.classroom}
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-sm">
                                {courses.lecturehall}
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-sm">
                                {courses.code}
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-sm">
                                {courses.name}
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-sm">
                                {courses.class}
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-sm">
                                {courses.teacher}
                            </td>
                            <td className="border border-gray-300 px-2 py-2 text-sm">
                                {courses.study}
                            </td>
                            <td className="border border-gray-300 px-2 py-2 w-25 text-sm">
                                {courses.timestudy}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center space-x-2 mt-4">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i + 1}
                        className={`px-4 py-2 rounded ${currentPage === i + 1 ? "bg-blue-700" : "bg-blue-500"} text-white hover:bg-blue-400 text-sm`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

ClassSchedule.layout = (page) => <Layout>{page}</Layout>;

export default ClassSchedule;
