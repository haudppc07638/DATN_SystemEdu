import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import BreadcrumbStudent from "../../Breadcrumbs/BreadcrumbStudent";

const notificationData = {
    notification: [
        {
            cateNotification: "Thông tin học tập",
            items: [
                {
                    title: "Thông báo về thời gian thực tập tốt nghiệp",
                    link: "/",
                },
                { title: "Lịch thi cuối kỳ", link: "/" },
                { title: "Thông báo nghỉ lễ 30/4 và 1/5", link: "/" },
                { title: "Lịch học hè", link: "/" },
                { title: "Hướng dẫn đăng ký tín chỉ học ở kỳ I", link: "/" },
                { title: "Cập nhật điểm giữa kỳ", link: "/" },
                {
                    title: "Thời gian trả lời khảo sát ý kiến sinh viên",
                    link: "/",
                },
                { title: "Chương trình hỗ trợ học bổng", link: "/" },
                { title: "Thông báo về kỳ thi học kỳ sắp tới", link: "/" },
                { title: "Cập nhật chính sách xét học bổng", link: "/" },
            ],
        },
        {
            cateNotification: "Thông tin hoạt động",
            items: [
                { title: "Tuyển sinh năm học mới năm 2024", link: "/" },
                { title: "Thông báo về hội thao sinh viên", link: "/" },
                { title: "Lịch tổ chức sự kiện văn nghệ", link: "/" },
                { title: "Hoạt động tình nguyện mùa hè", link: "/" },
                { title: "Tổ chức chương trình giao lưu văn hoá", link: "/" },
                { title: "Tham gia hội thảo hướng nghiệp", link: "/" },
                { title: "Cuộc thi lập trình quốc tế", link: "/" },
                { title: "Hướng dẫn tham gia câu lạc bộ", link: "/" },
                { title: "Hoạt động nâng cao kỹ năng mềm", link: "/" },
                { title: "Chương trình trao đổi sinh viên quốc tế", link: "/" },
            ],
        },
        {
            cateNotification: "Thông tin học phí",
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
            cateNotification: "Thông tin tuyển dụng",
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
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-default">
            <div className="mb-8">
                <h2 className="text-2xl font-bold">Thông tin mới nhất</h2>
                <div className="flex flex-col items-start">
                    <BreadcrumbStudent
                        items={[{ label: "Thông tin mới nhất" }]}
                    />
                </div>
            </div>
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
