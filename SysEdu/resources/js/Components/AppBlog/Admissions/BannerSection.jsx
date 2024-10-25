import React from "react";

function BannerSection() {
    return (
        <div className="container mx-auto py-16">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-600 text-white p-6 rounded-lg">
                    <p>
                        Trường Sysedu thông báo tuyển sinh theo phương thức xét
                        tuyển TN THPT. Thời gian đào tạo 3 năm (6 học kỳ). Sinh
                        viên ra trường nhận bằng Cao đẳng chính quy.
                    </p>
                    <a
                        href="#"
                        className="text-yellow-400 font-bold mt-4 block"
                    >
                        Quy chế tuyển sinh {">"}
                    </a>
                </div>
                <div className="bg-yellow-400 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold">Thời gian xét tuyển</h3>
                    <p className="mt-4">Thời gian: Tháng 1/2025</p>
                    <p className="mt-4">
                        Hotline phòng tư vấn tuyển sinh: 034 5456 544
                    </p>
                </div>
            </div>

            <div className="mt-10 px-6 md:px-16 bg-gray-100 p-6 rounded-lg text-center">
                <h2 className="text-3xl font-bold text-blue-600">
                    Bạn đã sẵng sàn cho kì học đầu tiên tại trường Cao đẳng
                    Sysedu !!!
                </h2>
                <button className="text-2xl font-bold text-white bg-red-600 p-4 mt-6 inline-block transform transition-transform duration-200 hover:scale-105 hover:text-red-600 hover:bg-white hover:border-2 hover:border-red-600 rounded-lg">
                    ĐĂNG KÝ NGAY
                </button>
            </div>
        </div>
    );
}

export default BannerSection;
