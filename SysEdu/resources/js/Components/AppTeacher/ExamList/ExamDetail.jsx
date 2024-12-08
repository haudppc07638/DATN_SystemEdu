import React, { useEffect, useState } from "react";
import BreadcrumbTeacher from "../../Breadcrumbs/BreadcrumbTeacher";
const classList = [
    {
        id: 1,
        className: "Lập trình Website",
        classCode: "WD18306", 
        nameStudents: "Trần Nhân Nghĩa",
        idStudent: "SV001",
        date: "01/12/2024",
        study: "Ca 3",
        examClass: "P303",
        examSubject: "ReactJS",
    },
    {
        id: 2,
        className: "Lập trình Website", 
        classCode: "WD18306",
        nameStudents: "Danh Phúc Hậu",
        idStudent: "SV002",
        date: "01/12/2024",
        study: "Ca 3",
        examClass: "P303",
        examSubject: "ReactJS",
    },
    {
        id: 3,
        className: "Lập trình Website",
        classCode: "WD18306",
        nameStudents: "Võ Minh Khánh",
        idStudent: "SV003",
        date: "01/12/2024",
        study: "Ca 3",
        examClass: "P303",
        examSubject: "ReactJS",
    },
    {
        id: 4,
        className: "Lập trình Website",
        classCode: "WD18306",
        nameStudents: "Thái Văn Lộc",
        idStudent: "SV004",
        date: "01/12/2024",
        study: "Ca 3",
        examClass: "P303",
        examSubject: "ReactJS",
    },
];

function ExamList() {
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
                        classItem.className
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        classItem.classCode
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        classItem.nameStudents
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        classItem.idStudent
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
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
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
            <BreadcrumbTeacher
                items={[
                    {
                        label: "Danh sách phòng thi",
                        link: "/teacher/student-examlist",
                    },
                    { label: "Danh sách sinh viên" },
                ]}
            />

            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <div className="w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Tìm kiếm theo tên, mã sinh viên..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
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
                                Ngày thi
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Ca thi
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Phòng thi
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Môn thi
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentClasses.length > 0 ? (
                            currentClasses.map((classItem, index) => (
                                <tr key={classItem.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                        {(currentPage - 1) * itemsPerPage + index + 1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {classItem.className}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                        {classItem.classCode}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {classItem.nameStudents}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                        {classItem.idStudent}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                        {classItem.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                        {classItem.study}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                        {classItem.examClass}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                        {classItem.examSubject}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="px-6 py-4 text-center text-sm text-gray-500">
                                    Không tìm thấy dữ liệu
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center mt-6">
                {totalPages > 1 && (
                    <nav className="flex items-center space-x-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => handlePageChange(i + 1)}
                                className={`px-3 py-1 rounded-md ${
                                    currentPage === i + 1
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </nav>
                )}
            </div>
        </div>
    );
}

export default ExamList;
