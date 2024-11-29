import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import BreadcrumbTeacher from "../../Breadcrumbs/BreadcrumbTeacher";

const notificationData = {
    notification: [
        {
            cateNotification: "Thông tin đào tạo",
            items: [
                { title: "Thông báo về hạn đóng học phí kỳ I", link: "/" },
                { title: "Chính sách hỗ trợ đóng học phí", link: "/" },
                { title: "Hướng dẫn nộp học phí trực tuyến", link: "/" },
                { title: "Thông tin về miễn giảm học phí", link: "/" },
                { title: "Cập nhật phí dịch vụ học kỳ mới", link: "/" },
                { title: "Học phí cho sinh viên khóa mới", link: "/" },
                { title: "Hướng dẫn xử lý các vấn đề học phí", link: "/" },
                { title: "Chính sách học bổng và hỗ trợ tài chính", link: "/" },
                { title: "Cách thức xin hoãn học phí", link: "/" },
                { title: "Thông báo về việc gia hạn học phí", link: "/" },
            ],
        },
        {
            cateNotification: "Thông tin bộ môn",
            items: [
                { title: "Thông báo về hạn đóng học phí kỳ I", link: "/" },
                { title: "Chính sách hỗ trợ đóng học phí", link: "/" },
                { title: "Hướng dẫn nộp học phí trực tuyến", link: "/" },
                { title: "Thông tin về miễn giảm học phí", link: "/" },
                { title: "Cập nhật phí dịch vụ học kỳ mới", link: "/" },
                { title: "Học phí cho sinh viên khóa mới", link: "/" },
                { title: "Hướng dẫn xử lý các vấn đề học phí", link: "/" },
                { title: "Chính sách học bổng và hỗ trợ tài chính", link: "/" },
                { title: "Cách thức xin hoãn học phí", link: "/" },
                { title: "Thông báo về việc gia hạn học phí", link: "/" },
            ],
        },
        {
            cateNotification: "Thông tin lịch họp",
            items: [
                { title: "Thông báo về hạn đóng học phí kỳ I", link: "/" },
                { title: "Chính sách hỗ trợ đóng học phí", link: "/" },
                { title: "Hướng dẫn nộp học phí trực tuyến", link: "/" },
                { title: "Thông tin về miễn giảm học phí", link: "/" },
                { title: "Cập nhật phí dịch vụ học kỳ mới", link: "/" },
                { title: "Học phí cho sinh viên khóa mới", link: "/" },
                { title: "Hướng dẫn xử lý các vấn đề học phí", link: "/" },
                { title: "Chính sách học bổng và hỗ trợ tài chính", link: "/" },
                { title: "Cách thức xin hoãn học phí", link: "/" },
                { title: "Thông báo về việc gia hạn học phí", link: "/" },
            ],
        },
        {
            cateNotification: "Thông tin cập nhật",
            items: [],
        },
    ],
};
function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed border-t-blue-600 border-b-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-16 bg-white rounded-lg shadow-default">
            <BreadcrumbTeacher items={[{ label: "Thông tin mới nhất" }]} />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                {notificationData.notification.map(
                    (cateNotification, index) => (
                        <div key={index} className="p-2 h-full">
                            <h5 className="text-red-600 text-xl font-bold">
                                {cateNotification.cateNotification}
                            </h5>
                            <div
                                className="max-h-90 overflow-y-auto mt-4 px-2 text-[15px]"
                                style={{
                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                }}
                            >
                                <ul className="list-none space-y-2 border-r">
                                    {cateNotification.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="last:border-b-0 pt-2"
                                        >
                                            <Link
                                                href={item.link}
                                                className="text-blue-600 border-b border-dashed hover:text-red-600 block transition-colors duration-200"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}

export default Home;
