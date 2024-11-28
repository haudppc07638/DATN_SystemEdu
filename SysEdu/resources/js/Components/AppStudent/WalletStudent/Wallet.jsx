import React, { useState, useEffect } from "react";

const walletData = [
    {
        id: 1,
        name: "Lập trình Web",
        time: "2024-10-14 09:30",
        Fee: "50,000 VND",
        amount: "5,000,000 VND",
        paymentdeadline: "2024-10-30",
        status: "Chưa thanh toán",
        qrcode: "https://example.com/qrcode1",
        act: "Thanh toán",
    },
    {
        id: 2,
        name: "Front-End Framework 2",
        time: "2024-10-13 15:00",
        Fee: "30,000 VND",
        amount: "3,200,000 VND",
        paymentdeadline: "2024-10-25",
        status: "Đã thanh toán",
        qrcode: "https://example.com/qrcode2",
        act: "Xem chi tiết",
    },
];

function Wallet() {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentWallets = walletData.slice(
        startIndex,
        startIndex + itemsPerPage,
    );
    const totalPages = Math.ceil(walletData.length / itemsPerPage);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed border-t-blue-500 border-b-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Ví sinh viên</h3>
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
            <div className="flex justify-end mb-3 mt-4">
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
                            "Hành động",
                        ].map((header) => (
                            <th
                                key={header}
                                className="border border-gray-300 px-4 py-4 font-semibold text-center text-sm"
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
                            <td className="border border-gray-300 px-4 py-2 text-sm text-center">
                                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
                                    {wallet.act}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center space-x-2 mt-4">
                {totalPages > 1 &&
                    [...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            className={`px-4 py-2 rounded-md text-sm ${
                                currentPage === i + 1
                                    ? "bg-blue-700"
                                    : "bg-blue-500 hover:bg-blue-400"
                            } text-white`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
            </div>
        </div>
    );
}

export default Wallet;
