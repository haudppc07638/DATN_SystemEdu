import React, { useState, useEffect } from "react";
import logo from "../../Assets/Images/logo.png";
import banner from "../../Assets/Images/banner.jpg";
import banner1 from "../../Assets/Images/banner1.jpg";
import banner2 from "../../Assets/Images/banner2.jpg";
import bgschools from "../../Assets/Images/school.jpg";
import imfomation from "../../Assets/Images/congnghethongtin.jpg";
import automation from "../../Assets/Images/tudonghoa.png";
import tourism from "../../Assets/Images/dulich.jpg";
import restaurant from "../../Assets/Images/nhahang.jpg";
import otherindustry from "../../Assets/Images/nganhkhac.png";
import student from "../../Assets/Images/iconstudent.png";
import certification from "../../Assets/Images/iconchungnhan.png";
import base from "../../Assets/Images/iconcoso.png";
import branch from "../../Assets/Images/iconchinhanh.png";
import blog from "../../Assets/Images/blog.jpg";
import blog1 from "../../Assets/Images/blog1.jpg";
import blog2 from "../../Assets/Images/blog2.jpg";
import bannerbottom from "../../Assets/Images/banner-botton.png";
import LayoutBlog from "../../Layouts/LayoutBlog";

function Home() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [currentBanner, setCurrentBanner] = useState(0);
    const banners = [banner, banner1, banner2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [banners.length]);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    return (
        <div>
            {/* background */}
            <div
                className="sticky z-50 bg-cover bg-center bg-no-repeat h-[700px] shadow-lg"
                style={{ backgroundImage: `url(${banners[currentBanner]})` }}
            >
                <div className="flex justify-end space-x-6 py-4 px-16 border-b">
                    <div className="flex items-center space-x-2">
                        <i className="text-white fa fa-envelope" />{" "}
                        <a
                            href="mailto:nhannghiatran2@gmail.com"
                            className="text-white hover:text-blue-500 transition duration-300 text-sm font-medium"
                        >
                            nhannghiatran2@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center space-x-2">
                        <i className="text-white fa fa-phone" />{" "}
                        <a
                            href="tel:0345456544"
                            className="text-white hover:text-blue-500 transition duration-300 text-sm font-medium"
                        >
                            0345456544 - 0345456545
                        </a>
                    </div>

                    <div className="relative">
                        {isSearchVisible && (
                            <input
                                type="text"
                                placeholder=" Tìm kiếm thông tin..."
                                className="rounded bg-white text-sm p-1"
                                style={{ width: "200px" }}
                            />
                        )}
                        <button
                            className="text-white text-sm px-2"
                            onClick={toggleSearch}
                        >
                            <i className="text-white fa fa-search" />{" "}
                        </button>
                    </div>
                </div>

                <div className=" h-20 px-16 py-14 mx-auto flex justify-center items-center bg-opacity-50 space-x-8">
                    <div className="flex items-center">
                        <a href="/home">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-[80px] transform transition duration-300"
                            />
                        </a>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="/home"
                            className="text-white hover:text-blue-500 transition duration-300 text-sm font-medium"
                        >
                            TRANG CHỦ
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-blue-500 transition duration-300 text-sm font-medium"
                        >
                            TUYỂN SINH
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-blue-500 transition duration-300 text-sm font-medium"
                        >
                            TUYỂN DỤNG
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-blue-500 transition duration-300 text-sm font-medium"
                        >
                            CHƯƠNG TRÌNH ĐÀO TẠO
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-blue-500 transition duration-300 text-sm font-medium"
                        >
                            GIỚI THIỆU CHUNG
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-blue-300 transition duration-300 text-sm font-medium"
                        >
                            HOẠT ĐỘNG HẰNG NĂM
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-blue-500 transition duration-300 text-sm font-medium"
                        >
                            TIN TỨC
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-blue-500 transition duration-300 text-sm font-medium"
                        >
                            LIÊN HỆ
                        </a>
                    </nav>
                </div>
            </div>
            <div
                className="sticky z-50 bg-cover bg-center bg-no-repeat h-[400px] shadow-lg border-t-4 border-white"
                style={{ backgroundImage: `url(${bgschools})` }}
            >
                <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-6xl p-4">
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={student}
                                alt="student"
                                className="text-red-500 w-[70px]"
                            />
                            <h3 className="text-2xl text-blue-600 font-bold mt-3">
                                99.99%
                            </h3>
                            <p className=" text-blue-600">
                                Sinh viên có việc làm
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={certification}
                                alt="certification"
                                className="text-red-500 w-[70px]"
                            />
                            <h3 className="text-2xl text-blue-600 font-bold mt-3">
                                1.000+
                            </h3>
                            <p className=" text-blue-600">
                                Có doanh nghiệp đối tác
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={base}
                                alt="base"
                                className="text-red-500 w-[70px]"
                            />
                            <h3 className="text-2xl  text-blue-600 font-bold mt-3">
                                15.000+
                            </h3>
                            <p className=" text-blue-600">
                                Sinh viên & Sinh vên đã ra trường
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={branch}
                                alt="branch"
                                className="text-red-500 w-[70px]"
                            />
                            <h3 className="text-2xl  text-blue-600 font-bold mt-3">
                                1
                            </h3>
                            <p className=" text-blue-600">
                                Cơ sở đào tạo Cần Thơ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* content */}
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 bg-white rounded-lg">
                    <div className="bg-gray p-4">
                        <h2 className="text-xl font-bold mb-4 mt-4">
                            CÁC NGÀNH ĐÀO TẠO
                        </h2>
                        <p className="text-sm text-justify pr-4">
                            Sysedu còn có đội ngũ giảng viên giàu kinh nghiệm,
                            nhiệt huyết và hệ thống cơ sở vật chất hiện đại, đáp
                            ứng đầy đủ nhu cầu học tập và nghiên cứu của sinh
                            viên. Môi trường học tập năng động và sáng tạo tại
                            Sysedu sẽ là nền tảng vững chắc giúp sinh viên tự
                            tin bước vào thị trường lao động đầy cạnh tranh.
                        </p>
                    </div>
                    <div className="relative overflow-hidden">
                        <img
                            src={imfomation}
                            alt="Công nghệ thông tin"
                            className="w-full h-full inset-0 bg-white bg-opacity-60"
                        />
                        <a
                            href=""
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                        >
                            <h3 className="text-xl font-bold text-white hover:text-blue-600">
                                CÔNG NGHỆ THÔNG TIN
                            </h3>
                        </a>
                    </div>
                    <div className="relative overflow-hidden">
                        <img
                            src={automation}
                            alt="Tự động hóa"
                            className="w-full h-full inset-0 bg-white bg-opacity-60"
                        />
                        <a
                            href=""
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                        >
                            <h3 className="text-xl font-bold text-white hover:text-blue-600">
                                TỰ ĐỘNG HÓA
                            </h3>
                        </a>
                    </div>
                    <div className="relative overflow-hidden">
                        <img
                            src={restaurant}
                            alt="Ngành nhà hàng"
                            className="w-full h-full inset-0 bg-white bg-opacity-60"
                        />
                        <a
                            href=""
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                        >
                            <h3 className="text-xl font-bold text-white hover:text-blue-600">
                                NGÀNH NHÀ HÀNG
                            </h3>
                        </a>
                    </div>
                    <div className="relative overflow-hidden">
                        <img
                            src={tourism}
                            alt="Ngành du lịch"
                            className="w-full h-full inset-0 bg-white bg-opacity-60"
                        />
                        <a
                            href=""
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                        >
                            <h3 className="text-xl font-bold text-white hover:text-blue-600">
                               NGÀNH DU LỊCH
                            </h3>
                        </a>
                    </div>
                    <div className="relative overflow-hidden">
                        <img
                            src={otherindustry}
                            alt="Ngành khác"
                            className="w-full h-full inset-0 bg-white bg-opacity-60"
                        />
                        <a
                            href=""
                            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                        >
                            <h3 className="text-xl font-bold text-white hover:text-blue-600">
                                NGÀNH KHÁC...
                            </h3>
                        </a>
                    </div>
                </div>
            </div>
            {/* blog home */}
            <div className="bg-white mx-auto py-16 flex justify-center">
                <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col lg:items-start min-h-full space-y-4">
                        <h3 className="text-xl font-bold mb-4">TIN MỚI NHẤT</h3>
                        <div className="mb-4">
                            <img
                                src={blog}
                                alt="Tin mới nhất"
                                className="w-full h-64 object-cover"
                            />
                            <h3 className="text-blue-600 text-lg font-bold mt-4 text-center lg:text-left">
                                Sinh viên SysEdu khởi động dự án bảo vệ môi
                                trường bằng công nghệ AI
                            </h3>
                            <p className="text-gray-500 text-sm mt-2 text-center lg:text-left">
                                Thứ sáu, 18/10/2024
                            </p>
                        </div>
                        <ul>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-lg hover:text-blue-600 font-bold text-black"
                                >
                                    SysEdu tổ chức cuộc thi lập trình ứng dụng
                                    thực tế ảo (VR)
                                </a>
                                <p className="text-gray-500 text-sm">
                                    Thứ sáu, 18/10/2024
                                </p>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="flex flex-col lg:items-start min-h-full space-y-4">
                        <h3 className="text-xl font-bold mb-4">
                            GƯƠNG MẶT SYS
                        </h3>
                        <div className="mb-4">
                            <img
                                src={blog1}
                                alt="Gương mặt SYS"
                                className="w-full h-64 object-cover" 
                            />
                            <h3 className="text-blue-600 text-lg font-bold mt-4 text-center lg:text-left">
                                Sinh viên SysEdu giành giải nhất cuộc thi khởi
                                nghiệp trẻ
                            </h3>
                            <p className="text-gray-500 text-sm mt-2 text-center lg:text-left">
                                Thứ sáu, 18/10/2024
                            </p>
                        </div>
                        <ul>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-lg hover:text-blue-600 font-bold text-black"
                                >
                                    Người tiên phong trong lĩnh vực nghiên cứu
                                    robot tại SysEdu
                                </a>
                                <p className="text-gray-500 text-sm">
                                    Thứ sáu, 18/10/2024
                                </p>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-lg hover:text-blue-600 font-bold text-black"
                                >
                                    Sinh viên SysEdu tạo ra hệ thống phân tích
                                    dữ liệu tự động dựa trên Blockchain
                                </a>
                                <p className="text-gray-500 text-sm">
                                    Thứ sáu, 18/10/2024
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col lg:items-start min-h-full space-y-4">
                        <h3 className="text-xl font-bold mb-4">
                            AN SINH & XÃ HỘI
                        </h3>
                        <div className="mb-4">
                            <img
                                src={blog2}
                                alt="An Sinh & Xã Hội"
                                className="w-full h-64 object-cover" 
                            />
                            <h3 className="text-blue-600 text-lg hover:text-blue-600 font-bold mt-4 text-center lg:text-left">
                                Sinh viên SysEdu chung tay xây dựng nhà tình
                                nghĩa cho người nghèo
                            </h3>
                            <p className="text-gray-500 text-sm mt-2 text-center lg:text-left">
                                Thứ sáu, 18/10/2024
                            </p>
                        </div>
                        <ul>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-lg hover:text-blue-600 font-bold text-black"
                                >
                                    Ngày hội “Hiến máu nhân đạo” tại SysEdu –
                                    Một giọt máu, triệu tấm lòng
                                </a>
                                <p className="text-gray-500 text-sm">
                                    Thứ sáu, 18/10/2024
                                </p>
                            </li>
                            <li className="mb-2">
                                <a
                                    href="#"
                                    className="text-lg hover:text-blue-600 font-bold text-black"
                                >
                                    Hỗ trợ sinh viên vùng sâu vùng xa đến học
                                    tập tại SysEdu
                                </a>
                                <p className="text-gray-500 text-sm">
                                    Thứ sáu, 18/10/2024
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* backgrond bottom */}
            <div
                className="sticky z-50 bg-cover bg-center bg-no-repeat h-[500px] shadow-lg border-t-4 border-white"
                style={{ backgroundImage: `url(${bannerbottom})` }}
            ></div>
        </div>
    );
}

Home.layout = (page) => <LayoutBlog>{page}</LayoutBlog>;

export default Home;
