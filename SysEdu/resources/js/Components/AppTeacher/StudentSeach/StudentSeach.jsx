import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import BreadcrumbTeacher from "../../Breadcrumbs/BreadcrumbTeacher";

const studentsList = [
    { id: 1, name: "Trần Nhân Nghĩa", studentId: "SV001" },
    { id: 2, name: "Thái Văn Lộc", studentId: "SV002" },
    { id: 3, name: "Danh Phúc Hậu", studentId: "SV003" },
    { id: 4, name: "Võ Minh Khánh", studentId: "SV004" },
];

function StudentSearch() {
    const [loading, setLoading] = useState(true);
    const [students] = useState(studentsList);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredStudents, setFilteredStudents] = useState(studentsList);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredStudents(students);
        } else {
            setFilteredStudents(
                students.filter(
                    (student) =>
                        student.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()) ||
                        student.studentId
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()),
                ),
            );
        }
    }, [searchTerm, students]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed border-t-blue-600 border-b-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-16 bg-white rounded-lg shadow-default">
            <BreadcrumbTeacher items={[{ label: "Tìm kiếm sinh viên" }]} />
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Nhập tên hoặc mã sinh viên..."
                    className="w-full p-2 pl-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full mt-8 bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-blue-100">
                            <th className="py-4 px-4 text-left text-gray-700">
                                STT
                            </th>
                            <th className="py-4 px-4 text-left text-gray-700">
                                Tên sinh viên
                            </th>
                            <th className="py-4 px-4 text-left text-gray-700">
                                Mã sinh viên
                            </th>
                            <th className="py-4 px-4 text-left text-gray-700">
                                Hành động
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map((student, index) => (
                                <tr
                                    key={student.id}
                                    className="hover:bg-blue-50 border-b last:border-none"
                                >
                                    <td className="py-4 px-4">{index + 1}</td>
                                    <td className="py-4 px-4">
                                        {student.name}
                                    </td>
                                    <td className="py-4 px-4">
                                        {student.studentId}
                                    </td>
                                    <td className="py-4 px-4">
                                        <Link
                                            to={`/student/${student.id}`}
                                            className="text-white bg-blue-600 p-2 rounded-lg"
                                        >
                                            Xem chi tiết
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="4"
                                    className="py-4 text-center text-gray-500"
                                >
                                    Không tìm thấy sinh viên nào.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentSearch;
