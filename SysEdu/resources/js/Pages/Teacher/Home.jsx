import React from "react";
import LayoutTeacher from "../../Layouts/LayoutTeacher";
import { Link } from "@inertiajs/react";

const notificationData = {
    notification: [
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
        }
    ],
};

function Home() {
    return (
        <div className="container mx-auto p-16 bg-white rounded-lg">
            <h3 className="text-2xl font-semibold">Thông tin mới nhất</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {notificationData.notification.map(
                    (cateNotification, index) => (
                        <div key={index} className="p-4 h-full">
                            <h5 className="text-red-600 text-xl font-bold">
                                {cateNotification.cateNotification}
                            </h5>
                            <div className="max-h-90 overflow-y-auto mt-4 px-2 text-[15px]">
                                <ul className="list-none space-y-2">
                                    {cateNotification.items.map(
                                        (item, index) => (
                                            <li
                                                key={index}
                                                className="last:border-b-0 pb-2"
                                            >
                                                <Link
                                                    href={item.link}
                                                    className="text-blue-600 hover:text-red-600 block transition-colors duration-200"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}

Home.layout = (page) => <LayoutTeacher>{page}</LayoutTeacher>;

export default Home;
