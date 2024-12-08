import React, { useState, useEffect } from "react";
import BreadcrumbStudent from "../../Breadcrumbs/BreadcrumbStudent";

const walletData = [
    {
        id: 1,
        name: "Lập trình Web",
        idName: "LP218306",
        semester: "Summer 2024",
        credits: 3,
        creditPrice: 850000,
        amount: 2550000,
    },
    {
        id: 2,
        name: "Cơ sở dữ liệu",
        idName: "LP218306",
        semester: "Summer 2024",
        credits: 3,
        creditPrice: 850000,
        amount: 3400000,
    },
    {
        id: 3,
        name: "ReactJS Framework",
        idName: "RE18306",
        semester: "Summer 2024",
        credits: 3,
        creditPrice: 850000,
        amount: 3400000,
    },
    {
        id: 4,
        name: "Anglar Framework",
        idName: "AN18306",
        semester: "Summer 2024",
        credits: 3,
        creditPrice: 850000,
        amount: 3400000,
    },
    {
        id: 5,
        name: "Dự án ứng dụng web",
        idName: "DA18302",
        semester: "Summer 2024",
        credits: 3,
        creditPrice: 850000,
        amount: 3400000,
    },
    {
        id: 6,
        name: "Dự án ứng dụng di động",
        idName: "DA18304",
        semester: "Summer 2024",
        credits: 3,
        creditPrice: 850000,
        amount: 3400000,
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
            <h2 className="text-2xl font-bold">Thanh toán học phí</h2>
            <div className="flex flex-col items-start mb-2">
                <BreadcrumbStudent items={[{ label: "Thanh toán học phí" }]} />
            </div>
            <table className="table-auto w-full border border-gray-300 rounded-md text-sm mt-4">
                <thead className="bg-gray-200">
                    <tr>
                        {[
                            "STT",
                            "Tên môn học",
                            "Mã môn học",
                            "Học kỳ",
                            "Số tín chỉ",
                            "Đơn giá/tín chỉ",
                            "Thành tiền",
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
                                {wallet.idName}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-sm">
                                {wallet.semester}
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
                        </tr>
                    ))}
                </tbody>
                <tfoot className="bg-gray-100">
                    <tr>
                        <td
                            colSpan="4"
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
                    </tr>
                </tfoot>
            </table>

            <div className="flex justify-end mt-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-200">
                    Thanh toán tất cả ({formatCurrency(totalAmount)})
                </button>
            </div>
        </div>
    );
}

export default Wallet;
