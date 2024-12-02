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
    },
    {
        id: 2,
        className: "Lập trình Website",
        classCode: "WD18307",
        department: "Công nghệ thông tin",
        nameStudent: "Võ Minh Khánh",
        idStudent: "SV002",
    },
    {
        id: 3,
        className: "Lập trình Website",
        classCode: "WD18308",
        department: "Công nghệ thông tin",
        nameStudent: "Thái Văn Lộc",
        idStudent: "SV003",
    },
    {
        id: 4,
        className: "Lập trình Website",
        classCode: "WD18306",
        department: "Công nghệ thông tin",
        nameStudent: "Danh Phúc Hậu",
        idStudent: "SV004",
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
        <div className="container mx-auto p-16 bg-white rounded-lg shadow-default">
            <BreadcrumbTeacher
                items={[
                    {
                        label: "Danh sách lớp tôi",
                        link: "/teacher/student-myclass",
                    },
                    { label: "Chi tiết danh sách lớp" },
                ]}
            />
            <div className="flex justify-start mb-4">
                <input
                    type="text"
                    placeholder="Tìm kiếm sinh viên"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto mt-8">
                    <thead>
                        <tr className="text-left dark:bg-meta-4">
                            <th className="border py-4 px-4 text-center">
                                STT
                            </th>
                            <th className="border py-4 px-4 text-center">
                                Tên lớp
                            </th>
                            <th className="border py-4 px-4 text-center">
                                Mã lớp
                            </th>
                            <th className="border py-4 px-4 text-center">
                                Tên sinh viên
                            </th>
                            <th className="border py-4 px-4 text-center">
                                Mã số sinh viên
                            </th>
                            <th className="border py-4 px-4 text-center">
                                Chuyên ngành
                            </th>
                            <th className="border py-4 px-4 text-center">
                                Ghi chú
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentClasses.length > 0 ? (
                            currentClasses.map((classItem, index) => (
                                <tr key={classItem.id}>
                                    <td className="border py-4 px-4 text-center">
                                        {(currentPage - 1) * itemsPerPage +
                                            index +
                                            1}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {classItem.className}
                                    </td>
                                    <td className="border py-2 px-4 text-center">
                                        {classItem.classCode}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {classItem.nameStudent}
                                    </td>
                                    <td className="border py-2 px-4 text-center">
                                        {classItem.idStudent}
                                    </td>
                                    <td className="border py-2 px-4 text-center">
                                        {classItem.department}
                                    </td>
                                    <td className="border py-2 px-4 text-center">
                                        {classItem.note}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="12" className="py-4 text-center">
                                    Không tìm thấy sinh viên.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center mt-4">
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
    );
}

export default MyClassDetail;
