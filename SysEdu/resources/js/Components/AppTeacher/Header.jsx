import React, { useState, useEffect } from "react";
import Shark from "../../Assets/Images/avatar.png";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isToggled, setIsToggled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleIcon = () => {
        setIsToggled(!isToggled);
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm flex items-center h-24 px-6 text-sm">
            <form className="flex-grow flex items-center mr-4">
                <div className="w-1/2 relative">
                    <input
                        className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="search"
                        placeholder="Nhập tìm kiếm của bạn..."
                        aria-label="search"
                    />
                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
            </form>
            <div className="flex items-center">
                {/* <div>
                    <i
                        className={`fa ${isToggled ? "fa-toggle-on" : "fa-toggle-off"} text-blue-400 text-[25px]`}
                        onClick={toggleIcon}
                        aria-hidden="true"
                    ></i>
                </div> */}
                <div>
                    <i
                        className="fa fa-bell mx-5 text-blue-400 text-[20px]"
                        aria-hidden="true"
                    ></i>
                </div>
                <div>
                    <span className="flex items-center relative">
                        <img
                            src={Shark}
                            alt="none"
                            className="rounded-full w-8 h-8 mr-3 cursor-pointer"
                            onClick={toggleDropdown}
                        />
                        <div className="text-[15px]">
                            Xin chào, <span className="font-bold">Nghĩa</span>
                        </div>

                        {isDropdownOpen && (
                            <div className="absolute letf-5 top-10 w-40 bg-white shadow-lg rounded-lg border border-gray-200">
                                <ul className="list-none">
                                    <li>
                                        <a
                                            href="/profile"
                                            className="block text-sm px-4 py-2 text-gray-500 hover:bg-blue-600 hover:text-white rounded-lg"
                                        >
                                            Xem hồ sơ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/logout"
                                            className="block text-sm px-4 py-2 text-gray-500 hover:bg-blue-600 hover:text-white rounded-lg"
                                        >
                                            Đăng xuất
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Header;
