import React from "react";
import Layout from "../../Layouts/Layout";

function ExamSchedule() {
    return (
        <div className="container mx-auto p-16 bg-white rounded-lg">
            <h3 className="text-2xl font-semibold">Đăng ký lịch học</h3>
            <div className="flex mt-4 text-sm">
                <div className="w-full max-w-3xl">
                    <div className="mb-4">
                        <label htmlFor="select-term" className="block text-gray-700 font-medium mb-2">Học kỳ</label>
                        <select className="form-select block w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" id="select-term">
                            <option>Summer 2024</option>
                            <option>Spring 2024</option>
                            <option>Fall 2024</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="select-major" className="block text-gray-700 font-medium mb-2">Ngành học</label>
                            <select className="form-select block w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" id="select-major">
                                <option>Công nghệ thông tin</option>
                                <option>Quản trị kinh doanh</option>
                                <option>Kinh tế</option>
                                <option>Kế toán</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="select-subject" className="block text-gray-700 font-medium mb-2">Môn học</label>
                            <select className="form-select block w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" id="select-subject">
                                <option>Lập trình HTML/CSS</option>
                                <option>JavaScript</option>
                                <option>ReactJS</option>
                                <option>Angular</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="select-date" className="block text-gray-700 font-medium mb-2">Ngày học</label>
                            <input type="date" className="form-input block w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" id="select-date" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="select-time" className="block text-gray-700 font-medium mb-2">Giờ học</label>
                            <input type="time" className="form-input block w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" id="select-time" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Ghi chú</label>
                        <textarea className="form-textarea block w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" id="description" rows="3" placeholder="Nhập ghi chú của bạn..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition duration-200">Đăng ký</button>
                </div>
            </div>
        </div>
    );
}

ExamSchedule.layout = (page) => <Layout>{page}</Layout>;

export default ExamSchedule;
