import React, { useEffect, useState } from "react";
import BreadcrumbTeacher from "../../Breadcrumbs/BreadcrumbTeacher";

const scheduleList = [
    {
        id: 1,
        teachingDate: "Thứ Ba 25/11/2024",
        campus: "Sys Ninh Kiều",
        room: "K301",
        subject: "Lập trình Web",
        subjectCode: "WEB101",
        department: "Công nghệ thông tin",
        className: "WD18306",
        timeSlot: "Ca 1",
        timeRange: "07:15 - 09:15",
    },
    {
        id: 2,
        teachingDate: "Thứ Năm 26/11/2024",
        campus: "Sys Ninh Kiều",
        room: "K301",
        subject: "Lập trình Web",
        subjectCode: "WEB101",
        department: "Công nghệ thông tin",
        className: "WD18306",
        timeSlot: "Ca 1",
        timeRange: "07:15 - 09:15",
    },
    {
        id: 3,
        teachingDate: "Thứ Bảy 27/11/2024",
        campus: "Sys Ninh Kiều",
        room: "K301",
        subject: "Lập trình Web",
        subjectCode: "WEB101",
        department: "Công nghệ thông tin",
        className: "WD18306",
        timeSlot: "Ca 1",
        timeRange: "07:15 - 09:15",
    },
    {
        id: 4,
        teachingDate: "Thứ Ba 28/11/2024",
        campus: "Sys Ninh Kiều",
        room: "K301",
        subject: "Lập trình Web",
        subjectCode: "WEB101",
        department: "Công nghệ thông tin",
        className: "WD18306",
        timeSlot: "Ca 1",
        timeRange: "07:15 - 09:15",
    },
];

const campuses = [];
const timeSlots = ["Ca 1", "Ca 2", "Ca 3", "Ca 4", "Ca 5", "Ca 6"];
const departments = [
    "Công nghệ thông tin",
    "Kinh tế",
    "Quản trị kinh doanh",
    "Marketing",
];

function TeachingSchedule() {
    const [loading, setLoading] = useState(true);
    const [schedules] = useState(scheduleList);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredSchedules, setFilteredSchedules] = useState(scheduleList);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const [filters, setFilters] = useState({
        campus: "",
        timeSlot: "",
        department: "",
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let filtered = schedules;

        if (filters.campus) {
            filtered = filtered.filter(
                (schedule) => schedule.campus === filters.campus,
            );
        }
        if (filters.timeSlot) {
            filtered = filtered.filter(
                (schedule) => schedule.timeSlot === filters.timeSlot,
            );
        }
        if (filters.department) {
            filtered = filtered.filter(
                (schedule) => schedule.department === filters.department,
            );
        }

        setFilteredSchedules(filtered);
        setCurrentPage(1);
    }, [filters, schedules]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentSchedules = filteredSchedules.slice(
        indexOfFirstItem,
        indexOfLastItem,
    );

    const totalPages = Math.ceil(filteredSchedules.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed border-t-blue-600 border-b-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-8 bg-white rounded-xl shadow-lg">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                    Danh sách lịch dạy của tôi
                </h2>
                <BreadcrumbTeacher
                    items={[{ label: "Danh sách lịch dạy của tôi" }]}
                />
            </div>

            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Tìm kiếm lịch dạy..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute right-3 top-2">
                        <i className="fas fa-search text-gray-400 text-lg"></i>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                            <th className="py-4 px-6 text-center font-semibold">
                                STT
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Ngày dạy
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Giảng đường
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Phòng
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Môn dạy
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Mã môn dạy
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Lớp
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Ca dạy
                            </th>
                            <th className="py-4 px-6 text-center font-semibold">
                                Giờ dạy
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentSchedules.length > 0 ? (
                            currentSchedules.map((schedule, index) => (
                                <tr
                                    key={schedule.id}
                                    className="hover:bg-gray-50"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                                        {(currentPage - 1) * itemsPerPage +
                                            index +
                                            1}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {schedule.teachingDate}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {schedule.campus}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {schedule.room}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {schedule.subject}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {schedule.subjectCode}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {schedule.className}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {schedule.timeSlot}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900">
                                        {schedule.timeRange}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="9"
                                    className="px-6 py-4 text-center text-sm text-gray-500"
                                >
                                    Không tìm thấy lịch dạy nào.
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

export default TeachingSchedule;
