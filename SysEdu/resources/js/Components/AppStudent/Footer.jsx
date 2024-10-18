import React from "react";
import logo from "../../Assets/Images/logo.png";

function Footer() {
    return (
        <footer className="bg-whiter border-t-[1px] p-8 px-16 mt-5">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img src={logo} alt="Sysedu Logo" className="w-20" />
                        <div>
                            <h5 className="text-blue-600 font-bold mb-1">
                                University Sysedu
                            </h5>
                            <p className="text-sm">
                                <i className="fa fa-map" aria-hidden="true"></i>{" "}
                                Toà nhà F, Phường Trường Thạnh, Quận Ninh Kiều,
                                TP. Cần Thơ
                            </p>
                        </div>
                    </div>
                    <div className="text-left mx-4">
                        <h6 className="font-bold mb-2">Thông tin liên hệ</h6>
                        <p className="text-sm">
                            <i className="fas fa-phone" aria-hidden="true"></i>{" "}
                            Số điện thoại liên hệ giải đáp ý kiến sinh viên:
                            0338433630
                        </p>
                        <p className="text-sm">
                            <i
                                className="fas fa-envelope"
                                aria-hidden="true"
                            ></i>{" "}
                            Địa chỉ email các phòng ban:
                        </p>
                        <ul className="pl-5 list-disc space-y-1 text-sm">
                            <li>
                                Phòng dịch vụ sinh viên:{" "}
                                <a
                                    href="mailto:dvsys@sys.edu.vn"
                                    className="text-blue-600 hover:underline"
                                >
                                    dvsys@sys.edu.vn
                                </a>
                            </li>
                            <li>
                                Phòng Tổ chức và Quản lý đào tạo:
                                <ul className="pl-5 list-disc">
                                    <li>
                                        Đào tạo:{" "}
                                        <a
                                            href="mailto:daotao@sys.edu.vn"
                                            className="text-blue-600 hover:underline"
                                        >
                                            daotao@sys.edu.vn
                                        </a>
                                    </li>
                                    <li>
                                        Khảo thí:{" "}
                                        <a
                                            href="mailto:khaothi@sys.edu.vn"
                                            className="text-blue-600 hover:underline"
                                        >
                                            khaothi@sys.edu.vn
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Phòng hành chính:{" "}
                                <a
                                    href="mailto:hanhchinh@sys.edu.vn"
                                    className="text-blue-600 hover:underline"
                                >
                                    hanhchinh@sys.edu.vn
                                </a>
                            </li>
                            <li>
                                Phòng quan hệ doanh nghiệp:{" "}
                                <a
                                    href="mailto:qhdn@sys.edu.vn"
                                    className="text-blue-600 hover:underline"
                                >
                                    qhdn@sys.edu.vn
                                </a>
                            </li>
                        </ul>
                        <p className="text-sm">
                            Ý kiến đóng góp chung gửi về:{" "}
                            <a
                                href="mailto:ykien@fpt.edu.vn"
                                className="text-blue-600 hover:underline"
                            >
                                ykien@fpt.edu.vn
                            </a>{" "}
                            hoặc email{" "}
                            <a
                                href="mailto:sys@sys.edu.vn"
                                className="text-blue-600 hover:underline"
                            >
                                sys@sys.edu.vn
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
