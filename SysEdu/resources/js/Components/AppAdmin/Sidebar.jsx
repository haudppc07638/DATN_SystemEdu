import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import logo from "../../Assets/Images/logo.png";

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [openMenus, setOpenMenus] = useState({});

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleMenu = (menuKey) => {
        setOpenMenus((prevState) => ({
            ...prevState,
            [menuKey]: !prevState[menuKey],
        }));
    };

    const menuItems = [
        {
            link: "/admin",
            label: "Thống kê",
            icon: "chart-bar", 
        },
        {
            label: "Đào tạo",
            icon: "graduation-cap", 
            isDropdown: true,
            key: "training",
            subItems: [
                {
                    link: "/admin/khoa",
                    label: "Khoa",
                },
                {
                    link: "/admin/chuyen-nganh",
                    label: "Chuyên ngành",
                },
                {
                    link: "",
                    label: "Điểm quá trình",
                },
                {
                    link: "/admin/dang-ky-mon",
                    label: "Đăng ký môn dạy",
                },
                {
                    link: "",
                    label: "Tính chỉ",
                },
                {
                    link: "/admin/phong-ban",
                    label: "Phòng ban",
                },
                {
                    link: "/admin/phong-hoc",
                    label: "Phòng học",
                },
            ],
        },
        {
            link: "/admin/hoc-ky",
            label: "Học kỳ",
            icon: "calendar-alt", 
        },
        {
            link: "/admin/lop-chuyen-nganh",
            label: "Lớp chuyên ngành",
            icon: "chalkboard-teacher", 
        },
        {
            link: "/",
            label: "Lớp môn",
            icon: "book", 
        },
        {
            link: "/admin/nhan-su",
            label: "Nhân sự",
            icon: "user-tie", 
        },
        {
            link: "/admin/sinh-vien",
            label: "Sinh viên",
            icon: "user-graduate",
        },
        {
            link: "/",
            label: "Gửi thông báo",
            icon: "paper-plane",
        },
        {
            link: "/admin/ca-hoc",
            label: "Thời gian theo ca",
            icon: "clock", 
        },
        {
            link: "/",
            label: "Feedback",
            icon: "comment-dots",
        },
    ];

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
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            {item.isDropdown ? (
                                <>
                                    <div
                                        onClick={() => toggleMenu(item.key)}
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
                                                className={`fas ${openMenus[item.key] ? "fa-chevron-down" : "fa-chevron-up"}`}
                                            ></i>
                                        )}
                                    </div>
                                    {openMenus[item.key] && !isCollapsed && (
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
