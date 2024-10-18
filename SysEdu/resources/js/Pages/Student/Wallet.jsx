import React, { useState } from "react";
import Layout from "../../Layouts/Layout";

const walletData = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        time: "2024-10-14 09:30",
        Fee: "500,000 VND",
        amount: "5,000,000 VND",
        paymentdeadline: "2024-10-30",
        status: "Chưa thanh toán",
        qrcode: "https://example.com/qrcode1",
        act: "Thanh toán",
    },
    {
        id: 2,
        name: "Trần Thị B",
        time: "2024-10-13 15:00",
        Fee: "300,000 VND",
        amount: "3,200,000 VND",
        paymentdeadline: "2024-10-25",
        status: "Đã thanh toán",
        qrcode: "https://example.com/qrcode2",
        act: "Xem chi tiết",
    },
    {
        id: 3,
        name: "Lê Văn C",
        time: "2024-10-12 12:45",
        Fee: "450,000 VND",
        amount: "4,000,000 VND",
        paymentdeadline: "2024-10-28",
        status: "Chưa thanh toán",
        qrcode: "https://example.com/qrcode3",
        act: "Thanh toán",
    },
    {
        id: 4,
        name: "Phạm Minh D",
        time: "2024-10-11 08:20",
        Fee: "400,000 VND",
        amount: "2,700,000 VND",
        paymentdeadline: "2024-10-26",
        status: "Chưa thanh toán",
        qrcode: "https://example.com/qrcode4",
        act: "Thanh toán",
    },
    {
        id: 5,
        name: "Đỗ Thu E",
        time: "2024-10-10 16:50",
        Fee: "600,000 VND",
        amount: "6,500,000 VND",
        paymentdeadline: "2024-10-22",
        status: "Đã thanh toán",
        qrcode: "https://example.com/qrcode5",
        act: "Xem chi tiết",
    },
    {
        id: 6,
        name: "Ngô Hữu F",
        time: "2024-10-09 10:15",
        Fee: "350,000 VND",
        amount: "3,000,000 VND",
        paymentdeadline: "2024-10-27",
        status: "Chưa thanh toán",
        qrcode: "https://example.com/qrcode6",
        act: "Thanh toán",
    },
    {
        id: 7,
        name: "Võ Thị G",
        time: "2024-10-08 14:40",
        Fee: "500,000 VND",
        amount: "5,500,000 VND",
        paymentdeadline: "2024-10-29",
        status: "Đã thanh toán",
        qrcode: "https://example.com/qrcode7",
        act: "Xem chi tiết",
    },
    {
        id: 8,
        name: "Nguyễn Văn H",
        time: "2024-10-07 11:05",
        Fee: "250,000 VND",
        amount: "2,200,000 VND",
        paymentdeadline: "2024-10-23",
        status: "Chưa thanh toán",
        qrcode: "https://example.com/qrcode8",
        act: "Thanh toán",
    },
    {
        id: 9,
        name: "Lê Thị I",
        time: "2024-10-06 13:30",
        Fee: "450,000 VND",
        amount: "4,800,000 VND",
        paymentdeadline: "2024-10-24",
        status: "Chưa thanh toán",
        qrcode: "https://example.com/qrcode9",
        act: "Thanh toán",
    },
    {
        id: 10,
        name: "Trần Minh K",
        time: "2024-10-05 09:50",
        Fee: "550,000 VND",
        amount: "6,200,000 VND",
        paymentdeadline: "2024-10-21",
        status: "Đã thanh toán",
        qrcode: "https://example.com/qrcode10",
        act: "Xem chi tiết",
    },
    {
        id: 10,
        name: "Trần Minh K",
        time: "2024-10-05 09:50",
        Fee: "550,000 VND",
        amount: "6,200,000 VND",
        paymentdeadline: "2024-10-21",
        status: "Đã thanh toán",
        qrcode: "https://example.com/qrcode10",
        act: "Xem chi tiết",
    },
];

function Wallet() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentWallets = walletData.slice(
        startIndex,
        startIndex + itemsPerPage,
    );
    const totalPages = Math.ceil(walletData.length / itemsPerPage);

    return (
        <div className="container mx-auto p-16 bg-white rounded-lg">
            <h3 className="text-2xl font-semibold">Ví sinh viên</h3>
            <div className="flex flex-col mb-6 mt-4">
                <div className="mb-4">
                    <label
                        htmlFor="select"
                        className="block mb-2 font-medium text-gray-700 text-sm"
                    >
                        Học kỳ
                    </label>
                    <select
                        className="form-select border border-gray-200 rounded-md p-2 focus:ring focus:ring-blue-300 transition duration-150 w-full text-sm"
                        id="select"
                    >
                        <option>Summer 2024</option>
                        <option>Fall 2025</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-end mb-3 mt-5">
                {["Print", "Copy", "Excel", "CSV", "PDF"].map((header) => (
                    <div
                        key={header}
                        className="px-3 py-2 bg-graydark text-white cursor-pointer text-sm"
                    >
                        {header}
                    </div>
                ))}
            </div>
            <table className="table-auto w-full border border-gray-300 rounded-md text-sm">
                <thead className="bg-gray-200">
                    <tr>
                        {[
                            "STT",
                            "Tên",
                            "Thời gian",
                            "Phí dịch vụ",
                            "Số tiền cần đóng",
                            "Hạn thanh toán",
                            "Trạng thái",
                            "QR code",
                            "Hành động"
                        ].map((header) => (
                            <th
                                key={header}
                                className="border border-gray-300 px-4 py-2 font-semibold text-left text-sm"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentWallets.map((wallet, index) => (
                        <tr
                            key={wallet.id}
                            className="border-b border-gray-300"
                        >
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                {startIndex + index + 1}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                {wallet.name}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                {wallet.time}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                {wallet.Fee}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                {wallet.amount}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                {wallet.paymentdeadline}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                {wallet.status}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                <a href={wallet.qrcode}>QR code</a>
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                {wallet.act}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center space-x-2 mt-4">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i + 1}
                        className={`px-4 py-2 rounded ${currentPage === i + 1 ? "bg-blue-700" : "bg-blue-500"} text-white hover:bg-blue-400 text-sm`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

Wallet.layout = (page) => <Layout>{page}</Layout>;

export default Wallet;
