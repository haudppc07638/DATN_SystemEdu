import React, { useEffect, useState } from "react";

const scoreBoardData = {
    courses: [
        {
            id: 1,
            secondperiod: 1,
            code: "IT101",
            name: "Lập trình Web",
            numbercredits: 3,
            score: 7,
            status: "Passed",
        },
        {
            id: 2,
            secondperiod: 1,
            code: "CS102",
            name: "Cơ sở dữ liệu",
            numbercredits: 3,
            score: 8,
            status: "Passed",
        },
        {
            id: 3,
            secondperiod: 2,
            code: "CS103",
            name: "Cấu trúc dữ liệu",
            numbercredits: 4,
            score: 6.5,
            status: "Passed",
        },
        {
            id: 4,
            secondperiod: 2,
            code: "CS104",
            name: "Hệ điều hành",
            numbercredits: 3,
            score: 5,
            status: "Failed",
        },
        {
            id: 5,
            secondperiod: 2,
            code: "CS105",
            name: "Mạng máy tính",
            numbercredits: 3,
            score: 7.5,
            status: "Passed",
        },
        {
            id: 6,
            secondperiod: 3,
            code: "IT102",
            name: "Lập trình di động",
            numbercredits: 3,
            score: 9,
            status: "Passed",
        },
        {
            id: 7,
            secondperiod: 3,
            code: "CS106",
            name: "Phân tích hệ thống",
            numbercredits: 3,
            score: 6,
            status: "Passed",
        },
        {
            id: 8,
            secondperiod: 3,
            code: "IT103",
            name: "Trí tuệ nhân tạo",
            numbercredits: 4,
            score: 8.5,
            status: "Passed",
        },
        {
            id: 9,
            secondperiod: 3,
            code: "CS107",
            name: "Lập trình Java",
            numbercredits: 3,
            score: 7.2,
            status: "Passed",
        },
        {
            id: 10,
            secondperiod: 4,
            code: "CS108",
            name: "Kỹ thuật phần mềm",
            numbercredits: 3,
            score: 6.8,
            status: "Passed",
        },
    ],
};

function ScoreBoard() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(scoreBoardData);
    const { courses } = data;

    const itemsPerPage = 10;
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
        <div className="container mx-auto p-16 bg-white rounded-lg">
            <h3 className="text-2xl font-semibold">Bảng điểm</h3>
            <div className="flex flex-col mb-6 mt-4">
                <h3 className="text-lg font-bold pt-2">
                    Chuyên ngành: <span>Lập trình Web</span>
                </h3>
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
            <table className="table-auto w-full border border-gray-300 rounded-md">
                <thead className="bg-gray-200">
                    <tr>
                        {[
                            "STT",
                            "Kỳ thứ",
                            "Mã môn",
                            "Tên môn",
                            "Số tín chỉ",
                            "Điểm",
                            "Trạng thái",
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
                            <td className="border border-gray-300 px-4 py-2 text-sm text-center">
                                {course.secondperiod}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm text-center">
                                {course.code}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                {course.name}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm text-center">
                                {course.numbercredits}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm text-center">
                                {course.score}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm text-center">
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
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
            </div>
        </div>
    );
}

export default ScoreBoard;
