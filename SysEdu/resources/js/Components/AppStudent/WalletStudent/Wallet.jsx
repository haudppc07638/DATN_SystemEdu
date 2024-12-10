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
        <div className="container mx-auto p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Thanh toán học phí</h2>
                <div className="flex flex-col items-start">
                    <BreadcrumbStudent items={[{ label: "Thanh toán học phí" }]} />
                </div>
            </div>

            <div className="bg-white shadow-md overflow-hidden mb-8">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-500 to-blue-600">
                                <td className="py-3 px-4 text-white font-semibold text-sm text-center">STT</td>
                                <td className="py-3 px-4 text-white font-semibold text-sm text-center">Tên môn học</td>
                                <td className="py-3 px-4 text-white font-semibold text-sm text-center">Mã môn học</td>
                                <td className="px-3 py-4 text-white font-semibold text-sm text-center">Học kỳ</td>
                                <td className="px-3 py-4 text-white font-semibold text-sm text-center">Số tín chỉ</td>
                                <td className="px-3 py-4 text-white font-semibold text-sm text-center">Đơn giá/tín chỉ</td>
                                <td className="px-3 py-4 text-white font-semibold text-sm text-center">Thành tiền</td>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {currentWallets.map((wallet, index) => (
                                <tr
                                    key={wallet.id}
                                    className="hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <td className="px-6 py-4 text-center text-sm text-gray-600">
                                        {startIndex + index + 1}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                                        {wallet.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
                                        {wallet.idName}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
                                        {wallet.semester}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
                                        {wallet.credits}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 text-center">
                                        {formatCurrency(wallet.creditPrice)}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-gray-800 text-center">
                                        {formatCurrency(wallet.amount)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="bg-gray-50 font-semibold">
                                <td
                                    colSpan="4"
                                    className="px-6 py-4 text-right text-gray-700"
                                >
                                    TỔNG CỘNG:
                                </td>
                                <td className="px-6 py-4 text-center text-gray-700">
                                    {totalCredits}
                                </td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4 text-center text-red-400 font-bold">
                                    {formatCurrency(totalAmount)}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition duration-200">
                    Thanh toán tất cả ({formatCurrency(totalAmount)})
                </button>
            </div>
        </div>
    );
}

export default Wallet;
