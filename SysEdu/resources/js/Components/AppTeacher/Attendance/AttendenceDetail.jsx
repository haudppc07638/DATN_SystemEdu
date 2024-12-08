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
    },
    {
        id: 2,
        className: "Lập trình Website",
        classCode: "WD18306",
        nameStudents: "Danh Phúc Hậu",
        idStudent: "SV002",
        date: "01/12/2024",
        study: "Ca 3",
    },
    {
        id: 3,
        className: "Lập trình Website",
        classCode: "WD18306",
        nameStudents: "Võ Minh Khánh",
        idStudent: "SV003",
        date: "01/12/2024",
        study: "Ca 3",
    },
    {
        id: 4,
        className: "Lập trình Website",
        classCode: "WD18306",
        nameStudents: "Thái Văn Lộc",
        idStudent: "SV004",
        date: "01/12/2024",
        study: "Ca 3",
    },
];

function AttendanceDetail() {
    const [loading, setLoading] = useState(true);
    const [classes, setClasses] = useState(classList);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredClasses, setFilteredClasses] = useState(classList);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    const [classStates, setClassStates] = useState(
        classList.reduce((account, classItem) => {
            account[classItem.id] = true;
            return account;
        }, {}),
    );

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

    const toggleButtonState = (id) => {
        setClassStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
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
            <h2 className="text-2xl font-bold">Chi tiết điểm danh</h2>
            <div className="flex flex-col items-start mb-2">
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
            <div className="flex justify-start mb-4">
                <input
                    type="text"
                    placeholder="Tìm kiếm sinh viên..."
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
                                Ca học
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Trạng thái
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Ghi chú
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentClasses.length > 0 ? (
                            currentClasses.map((classItem, index) => (
                                <tr
                                    key={classItem.id}
                                    className="hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                        {(currentPage - 1) * itemsPerPage +
                                            index +
                                            1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                        {classItem.className}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                        {classItem.classCode}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                        {classItem.nameStudents}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                        {classItem.idStudent}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                        {classItem.study}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                        <button
                                            onClick={() =>
                                                toggleButtonState(classItem.id)
                                            }
                                        >
                                            <i
                                                className={`fa ${classStates[classItem.id] ? "fa-toggle-on text-green-400" : "fa-toggle-off text-gray-200"} text-[40px]`}
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                        <input
                                            type="text"
                                            className="max-w-[200px] px-2 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Nhập ghi chú..."
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="12" className="py-4 text-center">
                                    Không tìm thấy sinh viên nào.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center mt-4">
                <button className="px-6 py-2 bg-green-400 text-white rounded-lg">
                    Gửi điểm danh
                </button>
            </div>

            <div className="flex justify-center mt-4">
                {totalPages > 1 &&
                    Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-4 py-2 mx-1 ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-300"} rounded`}
                        >
                            {i + 1}
                        </button>
                    ))}
            </div>
        </div>
    );
}

export default AttendanceDetail;
