import React, { useEffect, useState } from "react";
import BreadcrumbTeacher from "../../Breadcrumbs/BreadcrumbTeacher";

const classList = [
    {
        id: 1,
        className: "Lập trình Website",
        classCode: "WD18306",
        department: "Công nghệ thông tin",
        nameStudent: "Trần Nhân Nghĩa",
        idStudent: "SV001",
        attendance: "Có mặt",
        note: "Đi học đầy đủ",
    },
    {
        id: 2,
        className: "Lập trình Website",
        classCode: "WD18307",
        department: "Công nghệ thông tin",
        nameStudent: "Võ Minh Khánh",
        idStudent: "SV002",
        attendance: "Vắng",
        note: "Không có lý do",
    },
    {
        id: 3,
        className: "Lập trình Website",
        classCode: "WD18308",
        department: "Công nghệ thông tin",
        nameStudent: "Thái Văn Lộc",
        idStudent: "SV003",
        attendance: "Có mặt",
        note: "Đi học đầy đủ",
    },
    {
        id: 4,
        className: "Lập trình Website",
        classCode: "WD18306",
        department: "Công nghệ thông tin",
        nameStudent: "Danh Phúc Hậu",
        idStudent: "SV004",
        attendance: "Có mặt",
        note: "Đi học đầy đủ",
    },
];

function MyClassDetail() {
    const [loading, setLoading] = useState(true);
    const [classes] = useState(classList);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredClasses, setFilteredClasses] = useState(classList);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredClasses(classes);
        } else {
            setFilteredClasses(
                classes.filter(
                    (classItem) =>
                        classItem.nameStudent
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        classItem.idStudent
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()),
                ),
            );
        }
        setCurrentPage(1);
    }, [searchTerm, classes]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentClasses = filteredClasses.slice(
        indexOfFirstItem,
        indexOfLastItem,
    );

    const totalPages = Math.ceil(filteredClasses.length / itemsPerPage);

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
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-default">
            <div className="mb-8">
                <h2 className="text-2xl font-bold">Chi tiết điểm danh</h2>
                <BreadcrumbTeacher
                    items={[
                        {
                            label: "Danh sách lớp của tôi",
                            link: "/teacher/student-myclass",
                        },
                        { label: "Chi tiết điểm danh" },
                    ]}
                />
            </div>
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Tìm kiếm sinh viên"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                            <th className="py-4 px-6 text-center font-semibold">
                                STT
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Tên lớp
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Mã lớp
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Tên sinh viên
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Mã số sinh viên
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Chuyên ngành
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Trạng thái
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Ghi chú
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentClasses.length > 0 ? (
                            currentClasses.map((classItem, index) => (
                                <tr
                                    key={classItem.id}
                                    className="hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {(currentPage - 1) * itemsPerPage +
                                            index +
                                            1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {classItem.className}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {classItem.classCode}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {classItem.nameStudent}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {classItem.idStudent}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {classItem.department}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                        <span
                                            className={`px-2 py-1 rounded ${
                                                classItem.attendance ===
                                                "Có mặt"
                                                    ? "bg-green-100 text-green-800"
                                                    : classItem.attendance ===
                                                        "Vắng"
                                                      ? "bg-red-100 text-red-800"
                                                      : "bg-yellow-100 text-yellow-800"
                                            }`}
                                        >
                                            {classItem.attendance}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {classItem.note}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="py-4 text-center">
                                    Không tìm thấy sinh viên.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-600">
                    Tổng số sinh viên: {filteredClasses.length}
                </div>
                <div className="flex justify-center">
                    {totalPages > 1 &&
                        Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => handlePageChange(i + 1)}
                                className={`px-4 py-2 mx-1 ${
                                    currentPage === i + 1
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-300"
                                } rounded`}
                            >
                                {i + 1}
                            </button>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default MyClassDetail;
