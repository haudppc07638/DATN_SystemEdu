import React from "react";

function Header() {
    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm flex items-center h-24 px-6 text-sm">
            <form className="flex-grow flex items-center mr-4">
                <div className="w-1/2 relative">
                    <input
                        className="w-full p-2 mx-6 border border-gray rounded-lg"
                        type="search"
                        placeholder="Nhập tìm kiếm của bạn..."
                        aria-label="search"
                    />
                </div>
            </form>
            <div className="flex items-center">
                <i
                    className="fa fa-toggle-off mx-3 text-gray-500"
                    aria-hidden="true"
                ></i>
                <i
                    className="fa fa-bell mx-3 text-gray-500"
                    aria-hidden="true"
                ></i>
                <span className="flex items-center">
                    <i
                        className="fa fa-user mx-3 text-gray-500"
                        aria-hidden="true"
                    ></i>
                    Xin chào, <span className="font-bold">Nghĩa</span>
                </span>
            </div>
        </nav>
    );
}

export default Header;
