import React, { useState } from "react";

import JobImg1 from "../../../Assets/Images/tuyendung1.png";
import JobImg2 from "../../../Assets/Images/tuyendung2.png";
import JobImg3 from "../../../Assets/Images/tuyendung3.png";
import JobImg4 from "../../../Assets/Images/tuyendung4.png";
import JobImg5 from "../../../Assets/Images/tuyendung5.png";
import JobImg6 from "../../../Assets/Images/tuyendung6.png";
import JobImg7 from "../../../Assets/Images/tuyendung7.png";
import Job from "../../../Assets/Images/tuyendungbanner.jpg";

const jobPosts = [
    {
        id: 1,
        imageUrl: JobImg1,
        title: "Tuyển dụng TTS Design",
        description:
            "Thông báo tuyển dụng vị trí Thực tập sinh Design (Mã TD1815) Bạn là sinh viên trường Cao đẳng Sysedu đang tìm kiếm việc làm?",
        link: "#",
    },
    {
        id: 2,
        imageUrl: JobImg2,
        title: "Tuyển dụng TTS Kinh doanh Sapo",
        description:
            "Thông báo tuyển dụng vị trí Thực tập sinh Kinh doanh Sapo (Mã tuyển dụng TD1917) Bạn là sinh viên trường Cao đẳng Sysedu đang tìm kiếm việc làm?",
        link: "#",
    },
    {
        id: 3,
        imageUrl: JobImg3,
        title: "Tuyển dụng Leader Kinh doanh Online",
        description:
            "Thông báo tuyển dụng vị trí Leader Kinh doanh online. Bạn muốn tìm kiếm cơ hội việc làm?",
        link: "#",
    },
    {
        id: 4,
        imageUrl: JobImg4,
        title: "Tuyển dụng nhân viên Sale Admin",
        description:
            "Tuyển dụng vị trí Nhân viên Sale Admin. Bạn mong muốn tìm kiếm cơ hội việc làm?",
        link: "#",
    },
    {
        id: 5,
        imageUrl: JobImg5,
        title: "Tuyển dụng TTS Phát triển đối tác Amazon",
        description:
            "Tuyển dụng vị trí TTS Phát triển đối tác Amazon. Bạn là sinh viên Cao đẳng Sysedu và đang muốn tìm kiếm việc làm và phát triển kỹ năng?",
        link: "#",
    },
    {
        id: 6,
        imageUrl: JobImg6,
        title: "Tuyển dụng Nhân viên Kế hoạch sản xuất",
        description:
            "Tuyển dụng vị trí Nhân viên Kế hoạch sản xuất. Bạn là sinh viên Cao đẳng Sysedu và đang muốn tìm kiếm việc làm?",
        link: "#",
    },
    {
        id: 7,
        imageUrl: JobImg7,
        title: "Tuyển dụng TTS Editor",
        description:
            "Tuyển dụng vị trí Thực tập sinh Editor. Bạn là sinh viên Cao đẳng Sysedu và đang muốn phát triển kỹ năng editor?",
        link: "#",
    },
];

const sidebarItems = [
    { id: 1, text: "THÔNG BÁO TUYỂN SINH", icon: "👥" },
    { id: 2, text: "CHƯƠNG TRÌNH ĐÀO TẠO", icon: "📎" },
    { id: 3, text: "QUY CHẾ TUYỂN SINH", icon: "✅" },
    { id: 4, text: "PHIẾU ĐĂNG KÝ HỌC", icon: "✏️" },
    { id: 5, text: "HƯỚNG DẪN NHẬP HỌC", icon: "👉" },
    { id: 6, text: "HỌC PHÍ", icon: "🔑" },
    { id: 7, text: "CÂU HỎI THƯỜNG GẶP", icon: "❓" },
];

const featuredNews = [
    { id: 1, title: "Ngày hội việc làm tại Cao đẳng Sysedu", link: "#" },
    {
        id: 2,
        title: "Thông báo tuyển dụng TTS tại Công ty Công nghệ CND Quận 7",
        link: "#",
    },
    { id: 3, title: "Tuyển dụng nhân viên Thiết kế Content", link: "#" },
    {
        id: 4,
        title: "Tuyển dụng Leader Quản lý sản xuất tại Cty TNHH Samsung",
        link: "#",
    },
];

function JobContent() {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = jobPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(jobPosts.length / postsPerPage);

    const handlePageClick = (page) => setCurrentPage(page);

    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1,
    );

    return (
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-90">
                {currentPosts.map((post) => (
                    <div
                        key={post.id}
                        className="flex flex-col p-4 shadow-sm items-start bg-white"
                    >
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-40 object-cover mb-4 rounded-md"
                        />
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                            {post.description}
                        </p>
                        <a
                            href={post.link}
                            className="text-blue-600 hover:text-blue-500 text-sm inline-block mt-auto"
                        >
                            Xem thêm...
                        </a>
                    </div>
                ))}
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    {sidebarItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-md shadow-sm"
                        >
                            <span>{item.text}</span>
                            <span className="text-2xl">{item.icon}</span>
                        </div>
                    ))}
                </div>
                <div className="border-t shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">
                        TIN NỔI BẬT
                    </h3>
                    <ul className="space-y-2 mt-4">
                        {featuredNews.map((news) => (
                            <li key={news.id}>
                                <a
                                    href={news.link}
                                    className="text-sm text-gray-700 hover:text-blue-600"
                                >
                                    {news.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="border-t shadow-sm">
                    <img
                        src={Job}
                        alt="Quảng cáo tuyển dụng"
                        className="w-full rounded-lg mt-4"
                    />
                </div>
                <div className="border-t shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">
                        TIN TỨC SYSEDU
                    </h3>
                    <div className="mt-4">
                        <iframe
                            width="100%"
                            height="200"
                            src="https://www.youtube.com/embed/example-video"
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-md"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex justify-center mt-4 space-x-2">
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`px-4 py-2 rounded-md ${
                            page === currentPage
                                ? "bg-blue-700 text-white"
                                : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default JobContent;
