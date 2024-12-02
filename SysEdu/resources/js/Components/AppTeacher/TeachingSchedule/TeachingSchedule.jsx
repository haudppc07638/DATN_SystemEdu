import React, { useEffect, useState } from "react";
import BreadcrumbTeacher from "../../Breadcrumbs/BreadcrumbTeacher";

const scheduleList = [
    {
        id: 1,
        teachingDate: "Thứ 5 25/11/2024",
        campus: "Sys Ninh Kiều",
        room: "K301",
        subject: "Lập trình Web",
        subjectCode: "WEB101",
        department: "Công nghệ thông tin",
        className: "WD18306",
        timeSlot: "Ca 1",
        timeRange: "07:15/09:15",
    },
    {
        id: 2,
        teachingDate: "Thứ 6 26/11/2024",
        campus: "Sys Ninh Kiều",
        room: "K301",
        subject: "Lập trình Web",
        subjectCode: "WEB101",
        department: "Công nghệ thông tin",
        className: "WD18306",
        timeSlot: "Ca 1",
        timeRange: "07:15/09:15",
    },
    {
        id: 3,
        teachingDate: "Thứ 7 27/11/2024",
        campus: "Sys Ninh Kiều",
        room: "K301",
        subject: "Lập trình Web",
        subjectCode: "WEB101",
        department: "Công nghệ thông tin",
        className: "WD18306",
        timeSlot: "Ca 1",
        timeRange: "07:15/09:15",
    },
    {
        id: 4,
        teachingDate: "Thứ 2 28/11/2024",
        campus: "Sys Ninh Kiều",
        room: "K301",
        subject: "Lập trình Web",
        subjectCode: "WEB101",
        department: "Công nghệ thông tin",
        className: "WD18306",
        timeSlot: "Ca 1",
        timeRange: "07:15/09:15",
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
        <div className="container mx-auto p-16 bg-white rounded-lg shadow-default">
            <BreadcrumbTeacher items={[{ label: "Lịch dạy của tôi" }]} />
            <div className="flex space-x-4 mb-4">
                <select
                    name="campus"
                    value={filters.campus}
                    onChange={handleFilterChange}
                    className="text-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Chọn cơ sở</option>
                    {campuses.map((campus) => (
                        <option key={campus} value={campus} className="text-sm">
                            {campus}
                        </option>
                    ))}
                </select>
                <select
                    name="timeSlot"
                    value={filters.timeSlot}
                    onChange={handleFilterChange}
                    className="text-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Chọn ca học</option>
                    {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="text-sm">
                            {slot}
                        </option>
                    ))}
                </select>
                <select
                    name="department"
                    value={filters.department}
                    onChange={handleFilterChange}
                    className="text-sm px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Chọn chuyên ngành</option>
                    {departments.map((dept) => (
                        <option key={dept} value={dept} className="text-sm">
                            {dept}
                        </option>
                    ))}
                </select>
            </div>

            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto mt-8">
                    <thead>
                        <tr className="text-center dark:bg-meta-4 test-sm">
                            <th className="border py-3 px-4 text-center">
                                STT
                            </th>
                            <th className="border py-3 px-4 text-center">
                                Ngày dạy
                            </th>
                            <th className="border py-3 px-4 text-center">
                                Giảng đường
                            </th>
                            <th className="border py-3 px-4 text-center">
                                Phòng
                            </th>
                            <th className="border py-3 px-4 text-center">
                                Môn dạy
                            </th>
                            <th className="border py-3 px-4 text-center">
                                Mã môn dạy
                            </th>
                            <th className="border py-3 px-4 text-center">
                                Chuyên ngành
                            </th>
                            <th className="border py-3 px-4 text-center">
                                Lớp
                            </th>
                            <th className="border py-3 px-4 text-center">
                                Ca dạy
                            </th>
                            <th className="border py-3 px-4 text-center">
                                Giờ dạy
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentSchedules.length > 0 ? (
                            currentSchedules.map((schedule, index) => (
                                <tr
                                    key={schedule.id}
                                    className="hover:bg-gray-50 text-sm"
                                >
                                    <td className="border py-2 px-4 text-center">
                                        {(currentPage - 1) * itemsPerPage +
                                            index +
                                            1}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {schedule.teachingDate}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {schedule.campus}
                                    </td>
                                    <td className="border py-2 px-4 text-center">
                                        {schedule.room}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {schedule.subject}
                                    </td>
                                    <td className="border py-2 px-4 text-center">
                                        {schedule.subjectCode}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {schedule.department}
                                    </td>
                                    <td className="border py-2 px-4 text-center">
                                        {schedule.className}
                                    </td>
                                    <td className="border py-2 px-4 text-center">
                                        {schedule.timeSlot}
                                    </td>
                                    <td className="border py-2 px-4">
                                        {schedule.timeRange}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="11"
                                    className="py-4 text-center text-sm"
                                >
                                    Không tìm thấy lịch dạy.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Phân trang */}
            <div className="flex justify-center mt-4">
                {totalPages > 1 &&
                    Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-3 py-1 mx-1 text-sm ${
                                currentPage === i + 1
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-300 hover:bg-gray-400"
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
