import React, { useState, useEffect } from "react";
import BreadcrumbStudent from "../../Breadcrumbs/BreadcrumbStudent";

const walletData = [
    {
        id: 1,
        name: "Lập trình Web",
        time: "2024-10-14 09:30",
        credits: 3,
        creditPrice: 850000,
        amount: 2550000,
        paymentdeadline: "2024-10-30",
        status: "Chưa thanh toán",
    },
    {
        id: 2,
        name: "Cơ sở dữ liệu",
        time: "2024-10-13 15:00",
        credits: 4,
        creditPrice: 850000,
        amount: 3400000,
        paymentdeadline: "2024-10-25",
        status: "Chưa thanh toán",
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

    // Tính tổng số tín chỉ và tổng tiền
    const totalCredits = walletData.reduce(
        (sum, item) => sum + item.credits,
        0,
    );
    const totalAmount = walletData.reduce((sum, item) => sum + item.amount, 0);

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

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(amount);
    };

    return (
        <div className="container mx-auto p-16 bg-white rounded-lg shadow-default">
            <BreadcrumbStudent items={[{ label: "Thanh toán học phí" }]} />

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

            <table className="table-auto w-full border border-gray-300 rounded-md text-sm">
                <thead className="bg-gray-200">
                    <tr>
                        {[
                            "STT",
                            "Tên môn học",
                            "Thời gian",
                            "Số tín chỉ",
                            "Đơn giá/tín chỉ",
                            "Thành tiền",
                            "Hạn thanh toán",
                            "Trạng thái",
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
                            <td className="border border-gray-300 px-4 py-2 text-sm text-center">
                                {wallet.credits}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm text-center">
                                {formatCurrency(wallet.creditPrice)}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm text-center">
                                {formatCurrency(wallet.amount)}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                {wallet.paymentdeadline}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full">
                                    {wallet.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className="bg-gray-100">
                    <tr>
                        <td
                            colSpan="3"
                            className="border border-gray-300 px-4 py-3 font-semibold text-center"
                        >
                            Tổng cộng:
                        </td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-center">
                            {totalCredits}
                        </td>
                        <td className="border border-gray-300 px-4 py-3"></td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-center">
                            {formatCurrency(totalAmount)}
                        </td>
                        <td
                            colSpan="2"
                            className="border border-gray-300 px-4 py-3"
                        ></td>
                    </tr>
                </tfoot>
            </table>

            <div className="flex justify-end mt-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-200">
                    Thanh toán tất cả ({formatCurrency(totalAmount)})
                </button>
            </div>

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
