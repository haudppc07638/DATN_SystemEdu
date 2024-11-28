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
                <div className="flex items-center justify-between p-4 mt-2">
                    {!isCollapsed && (
                        <img
                            src={logo}
                            alt="Sysedu Logo"
                            className="w-20 mb-3"
                        />
                    )}
                    <button
                        className="text-xl text-blue-400 focus:outline-none mt-2"
                        onClick={toggleSidebar}
                    >
                        <i className={`fas fa-bars`}></i>
                    </button>
                </div>
                <div
                    className="max-h-[500px] overflow-y-auto mt-2"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {[
                        {
                            link: "/",
                            label: "Thống kê",
                            icon: "chart-bar",
                        },
                        {
                            link: "/teacher",
                            label: "Thông báo và tin tức",
                            icon: "bell",
                        },
                        {
                            link: "/student/xem-diem-danh",
                            label: "Tìm kiếm sinh viên",
                            icon: "search",
                        },
                        {
                            link: "/student/dang-ki-mon-hoc",
                            label: "Lớp của tôi",
                            icon: "chalkboard",
                        },
                        {
                            link: "/student/dang-ki-mon-hoc",
                            label: "Lịch dạy",
                            icon: "calendar-alt",
                        },
                        {
                            link: "/student/bang-diem",
                            label: "Feedback",
                            icon: "comment-dots",
                        },
                        {
                            link: "/",
                            label: "1/3 Block",
                            icon: "th",
                        },
                        {
                            link: "/",
                            label: "Danh sách thi",
                            icon: "list-alt",
                        },
                        {
                            link: "/",
                            label: "Sắp xếp lịch thi",
                            icon: "calendar-check",
                        },
                        {
                            link: "/",
                            label: "Đăng kí dịch vụ",
                            icon: "concierge-bell",
                        },
                        {
                            link: "/",
                            label: "Quản lý dự giờ",
                            icon: "chalkboard-teacher",
                        },
                        {
                            link: "/",
                            label: "Hướng dẫn",
                            icon: "info-circle",
                        },
                    ].map((item, index) => (
                        <div key={index}>
                            {item.isDropdown ? (
                                <>
                                    <div
                                        onClick={toggleScheduleMenu}
                                        className="flex items-center justify-between p-4 rounded-lg hover:bg-gray cursor-pointer transition duration-300 ease-in-out"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <i
                                                className={`fas fa-${item.icon} text-xl text-blue-400`}
                                            ></i>
                                            {!isCollapsed && (
                                                <span>{item.label}</span>
                                            )}
                                        </div>
                                        {!isCollapsed && (
                                            <i
                                                className={`fas ${isScheduleOpen ? "fa-chevron-down" : "fa-chevron-up"}`}
                                            ></i>
                                        )}
                                    </div>
                                    {isScheduleOpen && !isCollapsed && (
                                        <div className="pl-6">
                                            <ul className="list-none space-y-1">
                                                {item.subItems.map(
                                                    (subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link
                                                                href={
                                                                    subItem.link
                                                                }
                                                                className="block p-4 hover:bg-gray rounded-lg transition duration-300 ease-in-out"
                                                            >
                                                                <i className="fas fa-circle text-[6px] mr-2"></i>
                                                                {subItem.label}
                                                            </Link>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.link}
                                    className="flex items-center space-x-3 p-4 rounded-lg hover:bg-gray transition duration-300 ease-in-out"
                                >
                                    <i
                                        className={`fas fa-${item.icon} text-xl text-blue-400`}
                                    ></i>
                                    {!isCollapsed && <span>{item.label}</span>}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
