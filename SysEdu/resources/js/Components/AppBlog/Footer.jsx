import React from "react";
import logo from "../../Assets/Images/logo.png";

function FooterBlog() {
    return (
        <footer className="bg-white p-8 mt-5 border-t-8 border-blue-600">
            <div className="container mx-auto">
                <div className="grid grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="text-center lg:text-left">
                        <h3 className="text-xl font-bold">TRỤ SỞ CHÍNH</h3>
                        <img
                            src={logo}
                            alt="Sysedu Logo"
                            className="w-20 mt-4 mx-auto lg:mx-0"
                        />
                        <div className="mt-4">
                            <h3 className="text-blue-600 text-2xl font-bold">
                                University Sysedu
                            </h3>
                            <p className="text-sm">
                                <i className="fa fa-map" aria-hidden="true"></i>{" "}
                                Toà nhà F, Phường Trường Thạnh, Quận Ninh Kiều,
                                TP. Cần Thơ
                            </p>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <h3 className="text-xl font-bold">
                            HỆ THỐNG VĂN PHÒNG
                        </h3>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">
                                Cơ sở Cần Thơ
                            </h2>
                            <p className="text-sm">
                                <i className="fa fa-map" aria-hidden="true"></i>{" "}
                                Toà nhà F, Phường Trường Thạnh, Quận Ninh Kiều,
                                TP. Cần Thơ
                            </p>
                            <p className="text-sm">091 532 9213</p>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">
                                Cơ sở Hồ Chí Minh
                            </h2>
                            <p className="text-sm">
                                <i className="fa fa-map" aria-hidden="true"></i>{" "}
                                Tòa nhà QTSC9 (Tòa T), đường Tô Ký, quận 12, TP
                                HCM
                            </p>
                            <p className="text-sm">
                                0901 660 002 — (028) 6686 6486
                            </p>
                        </div>
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold">
                                Cơ sở Đà Nẵng
                            </h2>
                            <p className="text-sm">
                                <i className="fa fa-map" aria-hidden="true"></i>{" "}
                                219 Nguyễn Sinh Sắc, Liên Chiểu, Đà Nẵng
                            </p>
                            <p className="text-sm">
                                (023) 6371 0999 — 094 302 5282
                            </p>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <h3 className="text-xl font-bold">THÔNG TIN LIÊN HỆ</h3>
                        <div className="mt-4">
                            <div className="flex justify-center lg:justify-start space-x-6 mt-4 mb-8">
                                <a
                                    href="#"
                                    className="bg-blue-600 p-4 px-5 text-white rounded-lg hover:text-blue-600 hover:bg-white transition-colors"
                                >
                                    <i className="fab fa-facebook-f text-xl"></i>
                                </a>
                                <a
                                    href="#"
                                    className="bg-blue-600 p-4 text-white rounded-lg hover:text-blue-600 hover:bg-white transition-colors"
                                >
                                    <i className="fab fa-twitter text-xl rounded-full"></i>
                                </a>
                                <a
                                    href="#"
                                    className="bg-pink-600 p-4 text-white rounded-lg hover:text-pink-600 hover:bg-white transition-colors"
                                >
                                    <i className="fab fa-instagram text-xl rounded-full"></i>
                                </a>
                                <a
                                    href="#"
                                    className="bg-blue-600 p-4 text-white rounded-lg hover:text-blue-600 hover:bg-white transition-colors"
                                >
                                    <i className="fab fa-linkedin-in text-xl rounded-full"></i>
                                </a>
                            </div>
                            <div className="flex justify-center lg:justify-start items-center space-x-2 mt-4">
                                <i className="fa fa-envelope" />{" "}
                                <a
                                    href="mailto:nhannghiatran2@gmail.com"
                                    className="transition duration-300 text-sm font-medium"
                                >
                                    nhannghiatran2@gmail.com
                                </a>
                            </div>
                            <div className="flex justify-center lg:justify-start items-center space-x-2 mt-4">
                                <i className="fa fa-phone" />{" "}
                                <a
                                    href="tel:0345456544"
                                    className="transition duration-300 text-sm font-medium"
                                >
                                    (034)5456544 - (034)5456545
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-gray-200">
                <p className="flex justify-center items-center">
                    &copy; 2024 SyseduBlog. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default FooterBlog;
