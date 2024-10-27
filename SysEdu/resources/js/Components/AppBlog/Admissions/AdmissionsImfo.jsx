import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";

function AdmissionInfo() {
    return (
        <div className="bg-gray-200 p-10">
            <div className="text-center mb-6">
                <h1 className="text-blue-600 text-2xl font-bold uppercase">
                    Trường Cao đẳng SysEdu Tuyển Sinh Năm 2025
                </h1>
                <h2 className="text-black text-3xl font-bold mt-4">
                    Tuyển sinh khóa K17
                </h2>
            </div>

            <div className="container mx-auto py-4 px-4">
                <div className="flex space-x-4 bg-gray-100 p-4 rounded-lg">
                    <Link
                        to="section1"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="cursor-pointer p-6 font-bold text-black hover:text-white hover:bg-blue-600"
                    >
                        Thời gian
                    </Link>
                    <Link
                        to="section2"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="cursor-pointer p-6 font-bold text-black hover:text-white hover:bg-blue-600"
                    >
                        Chuyên ngành
                    </Link>
                    <Link
                        to="section3"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="cursor-pointer p-6 font-bold text-black hover:text-white hover:bg-blue-600"
                    >
                        Hồ sơ nhập học
                    </Link>
                    <Link
                        to="section4"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="cursor-pointer p-6 font-bold text-black hover:text-white hover:bg-blue-600"
                    >
                        Học phí
                    </Link>
                    <Link
                        to="section5"
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="cursor-pointer p-6 font-bold text-black hover:text-white hover:bg-blue-600"
                    >
                        Thông tin chuyển khoản
                    </Link>
                </div>

                <div className="mt-4">
                    <div className="sroll">
                        <Element
                            name="section1"
                            className="p-4 bg-white rounded-lg shadow-md"
                        >
                            <h2 className="text-lg font-bold text-blue-600">
                                Thời gian đào tạo
                            </h2>
                            <p>
                                Chương trình đào tạo có thời gian học tập là 3
                                năm, chia thành 7 học kỳ.<br></br> Sinh viên sẽ
                                được trang bị kiến thức và kỹ năng chuyên sâu,
                                kết hợp giữa lý thuyết và thực hành để sẵn sàng
                                cho các yêu cầu của ngành nghề sau khi tốt
                                nghiệp.
                            </p>
                        </Element>

                        <Element
                            name="section2"
                            className="mt-6 p-4 bg-white rounded-lg shadow-md"
                        >
                            <h2 className="text-lg font-bold text-blue-600">
                                Chuyên ngành đào tạo
                            </h2>
                            <p>
                                Các chuyên ngành đào tạo đa dạng, được thiết kế
                                đáp ứng nhu cầu của thị trường và xu hướng nghề
                                nghiệp hiện đại.<br></br> Thông tin cụ thể về
                                từng chuyên ngành sẽ giúp sinh viên định hướng
                                được lĩnh vực mình yêu thích và có tiềm năng
                                phát triển.
                            </p>
                        </Element>

                        <Element
                            name="section3"
                            className="mt-6 p-4 bg-white rounded-lg shadow-md"
                        >
                            <h2 className="text-lg font-bold text-blue-600">
                                Hồ sơ nhập học
                            </h2>
                            <ul className="list-disc pl-5">
                                <li>Đơn đăng ký nhập học</li>
                                <li>
                                    Bản sao giấy khai sinh hoặc chứng minh nhân
                                    dân (có công chứng)
                                </li>
                                <li>
                                    Bằng tốt nghiệp hoặc giấy chứng nhận tốt
                                    nghiệp (bản sao có công chứng)
                                </li>
                                <li>
                                    Bản sao học bạ THPT hoặc bảng điểm học kỳ
                                    cuối cùng (có công chứng)
                                </li>
                                <li>Ảnh chân dung (3x4)</li>
                                <li>
                                    Các giấy tờ liên quan khác nếu có yêu cầu từ
                                    nhà trường
                                </li>
                            </ul>
                        </Element>

                        <Element
                            name="section4"
                            className="mt-6 p-4 bg-white rounded-lg shadow-md"
                        >
                            <h2 className="text-lg font-bold text-blue-600">
                                Học phí
                            </h2>
                            <p>
                                Chi phí học tập được cập nhật cho từng khóa học
                                và có thể thay đổi tùy theo chuyên ngành.
                                <br></br> Thông tin chi tiết về mức học phí, các
                                khoản đóng góp sẽ được cung cấp cụ thể, hỗ trợ
                                sinh viên và phụ huynh dễ dàng nắm bắt và chuẩn
                                bị.
                            </p>
                        </Element>

                        <Element
                            name="section5"
                            className="mt-6 p-4 bg-white rounded-lg shadow-md"
                        >
                            <h2 className="text-lg font-bold text-blue-600">
                                Thông tin chuyển khoản
                            </h2>
                            <ul className="list-disc pl-5">
                                <li>Tên tài khoản: [Cao đẳng SYSEDU]</li>
                                <li>Số tài khoản: [222222222222]</li>
                                <li>Ngân hàng: [ACB]</li>
                                <li>
                                    Nội dung chuyển khoản: "Họ tên - Mã sinh
                                    viên - Học phí kỳ [X]"
                                </li>
                            </ul>
                        </Element>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdmissionInfo;
