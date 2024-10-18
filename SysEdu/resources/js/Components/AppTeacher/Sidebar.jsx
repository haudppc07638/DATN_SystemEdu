import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import logo from "../../Assets/Images/logo.png";

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleScheduleMenu = () => {
        setIsScheduleOpen(!isScheduleOpen);
    };

    return (
        <div
            className={`bg-white transition-all duration-300 text-sm ${isCollapsed ? "w-20" : "w-64"} flex flex-col px-4`}
        >
            <div className="fixed">
                <div className="flex items-center justify-between p-3 mt-2">
                    {!isCollapsed && (
                        <img
                            src={logo}
                            alt="Sysedu Logo"
                            className="w-20 mb-3"
                        />
                    )}
                    <button
                        className="text-2xl text-gray-500 focus:outline-none mt-2"
                        onClick={toggleSidebar}
                    >
                        <i className={`fas fa-bars`}></i>
                    </button>
                </div>
                <div className="h-full overflow-y-auto">
                    <div className="flex flex-col w-full mt-3">
                        {[
                            {
                                link: "/teacher/home",
                                label: "Bảng điều khiển",
                                icon: "fa-tachometer-alt",
                            },
                            {
                                link: "/student/xem-diem-danh",
                                label: "Tìm kiếm sinh viên",
                                icon: "fa-search",
                            },
                            {
                                link: "/student/dang-ki-mon-hoc",
                                label: "Lớp của tôi",
                                icon: "fa-chalkboard",
                            },
                            {
                                link: "/student/dang-ki-mon-hoc",
                                label: "Lịch dạy",
                                icon: "fa-calendar-alt",
                            },
                            {
                                link: "/student/bang-diem",
                                label: "Feedback",
                                icon: "fa-comment-dots",
                            },
                            {
                                link: "/",
                                label: "1/3 Block",
                                icon: "fa-th",
                            },
                            {
                                link: "/",
                                label: "Danh sách thi",
                                icon: "fa-list-alt",
                            },
                            {
                                link: "/",
                                label: "Sắp xếp lịch thi",
                                icon: "fa-calendar-check",
                            },
                            {
                                link: "/",
                                label: "Thống kê",
                                icon: "fa-chart-bar",
                            },
                            {
                                link: "/",
                                label: "Đăng kí dịch vụ",
                                icon: "fa-concierge-bell",
                            },
                            {
                                link: "/",
                                label: "Quản lý dự giờ",
                                icon: "fa-chalkboard-teacher",
                            },
                            {
                                link: "/",
                                label: "Hướng dẫn",
                                icon: "fa-info-circle",
                            },
                        ].map((item, index) => (
                            <div key={index}>
                                <Link
                                    href={item.link}
                                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray transition duration-300 ease-in-out"
                                >
                                    <i
                                        className={`fas ${item.icon} text-xl`}
                                    ></i>
                                    {!isCollapsed && <span>{item.label}</span>}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
