import React, { useState, useEffect } from "react";
import CccdFront from "../../../Assets/Images/cccd-mattruoc.jpg";
import CccdBack from "../../../Assets/Images/cccd-matsau.jpg";
import DiplomaTHPT from "../../../Assets/Images/bangtotnghiep.jpg";

function BannerSection() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        dob: "",
        gender: "Nam",
        ethnicity: "",
        idNumber: "",
        issuedDate: "",
        issuedPlace: "",
        city: "",
        district: "",
        ward: "",
        phone: "",
        email: "",
        guardianName: "",
        guardianPhone: "",
        campus: "Hà Nội",
        major1: "",
        major2: "",
        gradYear: "2025",
        address: "",
        resultReceiver: "",
        resultMethod: "student",
        idFrontImage: null,
        idBackImage: null,
        diplomaImage: null,
        checkboxStudent: false,
        checkboxParent: false,
        checkboxPermanentAddress: false,
        checkboxOther: false,
    });

    const handleClick = () => {
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Đăng ký thành công!");
        handleClose();
    };

    useEffect(() => {
        if (isModalVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalVisible]);

    return (
        <div className="container mx-auto py-16">
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-600 text-white p-6 rounded-lg">
                    <p>
                        Trường Sysedu thông báo tuyển sinh theo phương thức xét
                        tuyển Tốt Nghiệp THPT. Thời gian đào tạo 3 năm (7 học
                        kỳ). Sinh viên ra trường sẽ nhận bằng Cao đẳng chính
                        quy.
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
                    <p className="mt-4">Thời gian: Tháng 01/2025</p>
                    <p className="mt-4">
                        Hotline phòng tư vấn tuyển sinh: 034 5456 544
                    </p>
                </div>
            </div>

            <div className="mt-10 px-6 md:px-16 bg-gray-100 p-6 rounded-lg text-center">
                <h2 className="text-3xl font-bold text-blue-600">
                    Bạn đã sẵn sàng cho kì học đầu tiên tại trường Cao đẳng
                    Sysedu !!!
                </h2>
                <button
                    className="text-2xl font-bold text-white bg-red-600 p-4 mt-6 inline-block transform transition-transform duration-200 hover:scale-105 hover:text-white hover:bg-blue-600 rounded-lg"
                    onClick={handleClick}
                >
                    NỘP HỒ SƠ ONLINE
                </button>
            </div>

            {isModalVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="container bg-whiter p-8 shadow-lg w-full max-h-[82vh] overflow-y-auto relative mt-16 scrollbar-hide">
                        <h3 className="text-3xl font-bold text-blue-600 text-center mb-6 mt-8">
                            ĐĂNG KÍ NỘP HỒ SƠ
                        </h3>
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-5 rounded-full text-4xl text-blue-600 hover:text-red-600"
                        >
                            &times;
                        </button>
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white p-6 shadow-md rounded-lg space-y-6"
                        >
                            {/* Thông tin thứ nhất */}
                            <section>
                                <h3 className="text-xl text-blue-600 font-semibold mb-4 flex items-center">
                                    <span className="mr-2 text-blue-600">
                                        ■
                                    </span>
                                    <span className="flex items-center">
                                        THÔNG TIN THÍ SINH
                                    </span>
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
                                    <div className="w-full col-span-1">
                                        <label className="block mb-1 font-bold text-sm text-black">
                                            Họ và tên
                                        </label>
                                        <input
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 placeholder-gray-700"
                                            type="text"
                                            placeholder="Họ và tên"
                                            name="fullName"
                                            required
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <label className="block mb-1 font-bold text-sm text-black">
                                            Ngày sinh
                                        </label>
                                        <input
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 placeholder-gray-700"
                                            type="date"
                                            name="dob"
                                            required
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <label className="block mb-1 font-bold text-sm text-black">
                                            Giới tính
                                        </label>
                                        <select
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 placeholder-gray-700"
                                            name="gender"
                                        >
                                            <option value="">
                                                Chọn giới tính
                                            </option>
                                            <option value="Nam">Nam</option>
                                            <option value="Nữ">Nữ</option>
                                        </select>
                                    </div>
                                    <div className="w-full col-span-1">
                                        <label className="block mb-1 font-bold text-sm text-black">
                                            Dân tộc
                                        </label>
                                        <input
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 placeholder-gray-700"
                                            type="text"
                                            placeholder="Dân tộc"
                                            name="ethnicity"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                    <div className="w-full col-span-1">
                                        <label className="block mb-1 font-bold text-sm text-black">
                                            Số CCCD/Chứng minh nhân dân
                                        </label>
                                        <input
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 placeholder-gray-700"
                                            type="text"
                                            placeholder="Số CCCD/Chứng minh nhân dân"
                                            name="idNumber"
                                            required
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <label className="block mb-1 font-bold text-sm text-black">
                                            Ngày cấp
                                        </label>
                                        <input
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 placeholder-gray-700"
                                            type="date"
                                            name="issueDate"
                                            required
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <label className="block mb-1 font-bold text-sm text-black">
                                            Nơi cấp
                                        </label>
                                        <input
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 placeholder-gray-700"
                                            type="text"
                                            placeholder="Nơi cấp"
                                            name="issuePlace"
                                            required
                                        />
                                    </div>
                                </div>

                                <h5 className="text-sm text-black font-bold mt-8">
                                    Địa chỉ thường trú (Điền đầy đủ như trong
                                    CMND/CCCD)
                                </h5>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
                                    <div className="w-full col-span-1">
                                        <select
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                            name="province"
                                        >
                                            <option value="Chọn tỉnh/thành phố">
                                                Chọn tỉnh/thành phố
                                            </option>
                                            <option value="Vĩnh Long">
                                                Vĩnh Long
                                            </option>
                                        </select>
                                    </div>
                                    <div className="w-full col-span-1">
                                        <select
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                            name="district"
                                        >
                                            <option value="Chọn Quận/Huyện">
                                                Chọn Quận/Huyện
                                            </option>
                                            <option value="Long Hồ">
                                                Long Hồ
                                            </option>
                                        </select>
                                    </div>
                                    <div className="w-full col-span-1">
                                        <select
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                            name="ward"
                                        >
                                            <option value="Chọn Xã/Phường/Thị Trấn">
                                                Chọn Xã/Phường/Thị Trấn
                                            </option>
                                            <option value="Đồng Phú">
                                                Đồng Phú
                                            </option>
                                        </select>
                                    </div>
                                    <div className="w-full col-span-1">
                                        <input
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 placeholder-gray-700"
                                            type="text"
                                            placeholder="Số nhà, đường, ngõ, ấp"
                                            name="addressDetail"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                                    <div className="w-full col-span-1">
                                        <label className="block mb-1 font-bold text-sm text-black">
                                            Số điện thoại thí sinh
                                        </label>
                                        <input
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 placeholder-gray-700"
                                            type="text"
                                            placeholder="0123456789"
                                            name="phoneNumber"
                                            required
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <label className="block mb-1 font-bold text-sm text-black">
                                            Email thí sinh
                                        </label>
                                        <input
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 placeholder-gray-700"
                                            type="email"
                                            placeholder="nghiatnpc07595@gmail.com"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <label className="block mb-1 font-bold text-sm text-black">
                                            Họ tên phụ huynh/người giám hộ
                                        </label>
                                        <input
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 placeholder-gray-700"
                                            type="text"
                                            placeholder="Họ và tên"
                                            name="guardianName"
                                            required
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <label className="block mb-1 font-bold text-sm text-black">
                                            Số điện thoại phụ huynh
                                        </label>
                                        <input
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200 placeholder-gray-700"
                                            type="text"
                                            placeholder="0123456789"
                                            name="guardianPhone"
                                            required
                                        />
                                    </div>
                                </div>
                            </section>
                            {/* Thông tin thứ 2 */}
                            <section>
                                <h3 className="text-xl text-blue-600 font-semibold mb-4 flex items-center mt-16">
                                    <span className="mr-2 text-blue-600">
                                        ■
                                    </span>
                                    THÔNG TIN ĐĂNG KÝ TRƯỜNG CAO ĐẲNG SYSEDU CỦA
                                    THÍ SINH
                                </h3>
                                <div className="w-full col-span-1">
                                    <label
                                        className="block mb-1 font-bold text-sm text-black"
                                        htmlFor="province"
                                    >
                                        Cơ sở nhập học
                                    </label>
                                    <select
                                        className="w-1/2 border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                        id="province"
                                        name="province"
                                    >
                                        <option value="Cần Thơ">Cần Thơ</option>
                                        <option value="Vĩnh Long">
                                            Vĩnh Long
                                        </option>
                                    </select>
                                </div>

                                <label className="block mb-1 font-bold text-sm text-black mt-4">
                                    Nguyện vọng thứ nhất
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
                                    <div className="w-full col-span-1">
                                        <select
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                            name="province1"
                                        >
                                            <option value="Chọn tỉnh/thành phố">
                                                Ngành
                                            </option>
                                            <option value="Vĩnh Long">
                                                Công nghệ thông tin
                                            </option>
                                        </select>
                                    </div>
                                    <div className="w-full col-span-1">
                                        <select
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                            name="district1"
                                        >
                                            <option value="Chọn Quận/Huyện">
                                                Phương thức dự tuyển
                                            </option>
                                            <option value="Long Hồ">
                                                Điểm học bạ
                                            </option>
                                            <option value="Long Hồ">
                                                Điểm thi THPT quốc gia
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <label className="block mb-1 font-bold text-sm text-black mt-4">
                                    Nguyện vọng thứ hai
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
                                    <div className="w-full col-span-1">
                                        <select
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                            name="province1"
                                        >
                                            <option value="Chọn tỉnh/thành phố">
                                                Ngành
                                            </option>
                                            <option value="Vĩnh Long">
                                                Công nghệ thông tin
                                            </option>
                                        </select>
                                    </div>
                                    <div className="w-full col-span-1">
                                        <select
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                            name="district1"
                                        >
                                            <option value="Chọn Quận/Huyện">
                                                Phương thức dự tuyển
                                            </option>
                                            <option value="Long Hồ">
                                                Điểm học bạ
                                            </option>
                                            <option value="Long Hồ">
                                                Điểm thi THPT quốc gia
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <label className="block mb-1 font-bold text-sm text-black mt-4">
                                    Nơi tốt nghiệp
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                                    <div className="w-full col-span-1">
                                        <select
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                            name="district1"
                                        >
                                            <option value="Chọn Quận/Huyện">
                                                Chọn Tỉnh/Thành phố
                                            </option>
                                            <option value="Long Hồ">
                                                Long Hồ
                                            </option>
                                        </select>
                                    </div>
                                    <div className="w-full col-span-1">
                                        <select
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                            name="district1"
                                        >
                                            <option value="Chọn Quận/Huyện">
                                                Chọn Quận/Huyện
                                            </option>
                                            <option value="Long Hồ">
                                                Long Hồ
                                            </option>
                                        </select>
                                    </div>
                                    <div className="w-full col-span-1">
                                        <select
                                            className="w-full border p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                            name="ward1"
                                        >
                                            <option value="Chọn Xã/Phường/Thị Trấn">
                                                Chọn Xã/Phường/Thị Trấn
                                            </option>
                                            <option value="Đồng Phú">
                                                Đồng Phú
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </section>
                            {/* Thông tin thứ 3 */}
                            <section>
                                <h3 className="text-xl text-blue-600 font-semibold mb-4 flex items-center mt-16">
                                    <span className="mr-2 text-blue-600">
                                        ■
                                    </span>
                                    THÔNG TIN NHẬN GIẤY BÁO KẾT QUẢ
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label
                                            htmlFor="receiver"
                                            className="block mb-1 font-bold text-sm text-black"
                                        >
                                            Người nhận
                                        </label>
                                        <div className="space-y-4 mt-4">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="checkboxStudent"
                                                    name="checkboxStudent"
                                                    className="mr-3 w-3 h-3"
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    htmlFor="checkboxStudent"
                                                    className="font-medium"
                                                >
                                                    Thí sinh
                                                </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="checkboxParent"
                                                    name="checkboxParent"
                                                    className="mr-3 w-3 h-3"
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    htmlFor="checkboxParent"
                                                    className="font-medium"
                                                >
                                                    Phụ huynh/người giám hộ
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="receiverAddress"
                                            className="block mb-1 font-bold text-sm text-black"
                                        >
                                            Địa chỉ nhận
                                        </label>
                                        <div className="space-y-4 mt-4">
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="checkboxPermanentAddress"
                                                    name="checkboxPermanentAddress"
                                                    className="mr-3 w-3 h-3"
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    htmlFor="checkboxPermanentAddress"
                                                    className="font-medium"
                                                >
                                                    Địa chỉ thường trú
                                                </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="checkboxOther"
                                                    name="checkboxOther"
                                                    className="mr-3 w-3 h-3"
                                                    onChange={
                                                        handleCheckboxChange
                                                    }
                                                />
                                                <label
                                                    htmlFor="checkboxOther"
                                                    className="font-medium"
                                                >
                                                    Khác
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Thông tin thứ 4 */}
                            <section>
                                <h3 className="text-xl text-blue-600 font-semibold mb-4 flex items-center mt-16">
                                    <span className="mr-2 text-blue-600">
                                        ■
                                    </span>
                                    TẢI LÊN GIẤY TỜ XÁC THỰC HỒ SƠ ĐĂNG KÝ HỌC
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="idFrontImage"
                                            className="block mb-1 font-bold text-sm text-black flex items-center"
                                        >
                                            Ảnh CMND/CCCD mặt trước
                                            <span className="text-gray-400 opacity-70 ml-1">
                                                (bắt buộc)
                                            </span>
                                        </label>

                                        <img
                                            src={CccdFront}
                                            alt="ID Front"
                                            className="w-full h-50 mb-2 object-cover rounded-md border opacity-50"
                                        />
                                        <input
                                            type="file"
                                            id="idFrontImage"
                                            name="idFrontImage"
                                            onChange={handleChange}
                                            className="mb-2"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="idFrontImage"
                                            className="block mb-1 font-bold text-sm text-black"
                                        >
                                            Ảnh CMND/CCCD mặt sau
                                            <span className="text-gray-400 opacity-70 ml-1">
                                                (bắt buộc)
                                            </span>
                                        </label>

                                        <img
                                            src={CccdBack}
                                            alt="ID Back"
                                            className="w-full h-50 mb-2 object-cover rounded-md border opacity-50"
                                        />
                                        <input
                                            type="file"
                                            id="idBackImage"
                                            name="idBackImage"
                                            onChange={handleChange}
                                            className="mb-2"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            htmlFor="idFrontImage"
                                            className="block mb-1 font-bold text-sm text-black"
                                        >
                                            Bản sao Bằng tốt nghiệp THPT công
                                            chứng
                                            <span className="text-gray-400 opacity-70 ml-1">
                                                (bắt buộc)
                                            </span>
                                        </label>

                                        <img
                                            src={DiplomaTHPT}
                                            alt="Diploma"
                                            className="w-full h-50 mb-2 object-cover rounded-md border opacity-50"
                                        />
                                        <input
                                            type="file"
                                            id="diplomaImage"
                                            name="diplomaImage"
                                            onChange={handleChange}
                                            className="mb-2"
                                        />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex items-start mb-4">
                                        <input
                                            id="confirmCheck1"
                                            type="checkbox"
                                            className="w-3 h-3 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="confirmCheck1"
                                            className="ml-2 text-sm text-gray-700"
                                        >
                                            Tôi xin cam đoan những lời khai của
                                            tôi trên phiếu đăng ký này là đúng
                                            sự thật.
                                        </label>
                                    </div>
                                    <div className="flex items-start mb-4">
                                        <input
                                            id="confirmCheck2"
                                            type="checkbox"
                                            className="w-3 h-3 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="confirmCheck2"
                                            className="ml-2 text-sm text-gray-700"
                                        >
                                            Tôi đã đọc kỹ và cam kết tuân thủ
                                            Quy định tài chính của nhà trường.
                                        </label>
                                    </div>
                                </div>
                            </section>
                            {/* Gửi đi */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-md"
                            >
                                Gửi hồ sơ đăng ký
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BannerSection;
