import React, { useEffect, useState } from "react";
import BreadcrumbStudent from "../../Breadcrumbs/BreadcrumbStudent";

const reportData = {
    reportSubject: [
        {
            cateSubject: "Lập trình Web (WEB1022) - WD18306",
            items: [
                {
                    id: 1,
                    date: "Thứ Ba 27/08/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC07",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 2,
                    date: "Thứ Năm 29/08/2024",
                    shift: "Ca 2",
                    name: "Trần Nhân Nghĩa",
                    code: "PC08",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 3,
                    date: "Thứ Bảy 31/08/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC09",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 4,
                    date: "Thứ Ba 02/08/2024",
                    shift: "Ca 2",
                    name: "Trần Nhân Nghĩa",
                    code: "PC10",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 5,
                    date: "Thứ Năm 04/08/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC11",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 6,
                    date: "Thứ Bảy 06/09/2024",
                    shift: "Ca 2",
                    name: "Trần Nhân Nghĩa",
                    code: "PC12",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 7,
                    date: "Thứ Ba 08/09/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC13",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "Không lý do",
                },
                {
                    id: 8,
                    date: "Thứ Năm 10/09/2024",
                    shift: "Ca 2",
                    name: "Trần Nhân Nghĩa",
                    code: "PC14",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 9,
                    date: "Thứ Bảy 12/09/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC15",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 10,
                    date: "Thứ Ba 14/09/2024",
                    shift: "Ca 2",
                    name: "Trần Nhân Nghĩa",
                    code: "PC16",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 11,
                    date: "Thứ Năm 16/09/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC17",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "",
                },
                {
                    id: 12,
                    date: "Thứ Bảy 18/09/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC17",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "",
                },
                {
                    id: 13,
                    date: "Thứ Ba 20/09/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC17",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "Có lý do",
                },
            ],
        },
        {
            cateSubject: "Lập trình ReactJS (RE1022) - WD18306",
            items: [
                {
                    id: 1,
                    date: "Thứ Ba 26/08/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC07",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 2,
                    date: "Thứ Năm 28/08/2024",
                    shift: "Ca 2",
                    name: "Trần Nhân Nghĩa",
                    code: "PC08",
                    session: "Thực hành",
                    status: "Vắng",
                    notes: "Có lý do",
                },
                {
                    id: 3,
                    date: "Thứ Bảy 30/08/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC09",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 4,
                    date: "Thứ Ba 01/08/2024",
                    shift: "Ca 2",
                    name: "Trần Nhân Nghĩa",
                    code: "PC10",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 5,
                    date: "Thứ Năm 03/08/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC11",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 6,
                    date: "Thứ Bảy 05/09/2024",
                    shift: "Ca 2",
                    name: "Trần Nhân Nghĩa",
                    code: "PC12",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 7,
                    date: "Thứ Ba 07/09/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC13",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "Không lý do",
                },
                {
                    id: 8,
                    date: "Thứ Năm 09/09/2024",
                    shift: "Ca 2",
                    name: "Trần Nhân Nghĩa",
                    code: "PC14",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 9,
                    date: "Thứ Bảy 11/09/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC15",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 10,
                    date: "Thứ Ba 13/09/2024",
                    shift: "Ca 2",
                    name: "Trần Nhân Nghĩa",
                    code: "PC16",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 11,
                    date: "Thứ Năm 15/09/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC17",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "",
                },
                {
                    id: 12,
                    date: "Thứ Bảy 17/09/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC17",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "",
                },
                {
                    id: 13,
                    date: "Thứ Ba 19/09/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC17",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "Có lý do",
                },
            ],
        },
    ],
};

function ReportNameClient() {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const getPaginatedItems = (items) => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return items.slice(indexOfFirstItem, indexOfLastItem);
    };

    const totalItems = reportData.reportSubject.flatMap(
        (subject) => subject.items,
    ).length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

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
        <div className="container mx-auto p-8 bg-white rounded-xl shadow-lg">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                    Điểm danh
                </h2>
                <div className="flex flex-col items-start">
                    <BreadcrumbStudent items={[{ label: "Điểm danh" }]} />
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-1/4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Thời gian
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Spring 2024</option>
                            <option>Summer 2024</option>
                            <option>Fall 2024</option>
                            <option>Winter 2024</option>
                        </select>
                    </div>
                </div>
            </div>

            {reportData.reportSubject.map((subject) => (
                <div key={subject.cateSubject} className="mb-8">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 border-b-2 border-white text-white p-4 rounded-t-lg">
                        <h4 className="text-lg font-semibold">
                            {subject.cateSubject}
                        </h4>
                    </div>

                    <div className="bg-white shadow overflow-x-auto rounded-b-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                                    <th className="py-3 px-4 text-center text-sm font-medium">
                                        STT
                                    </th>
                                    <th className="py-3 px-4 text-center text-sm font-medium">
                                        Ngày
                                    </th>
                                    <th className="py-3 px-4 text-center text-sm font-medium">
                                        Ca
                                    </th>
                                    <th className="py-3 px-4 text-center text-sm font-medium">
                                        Giảng viên
                                    </th>
                                    <th className="py-3 px-4 text-center text-sm font-medium">
                                        Buổi học
                                    </th>
                                    <th className="py-3 px-4 text-center text-sm font-medium">
                                        Trạng thái điểm danh
                                    </th>
                                    <th className="py-3 px-4 text-center text-sm font-medium">
                                        Ghi chú buổi học
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {getPaginatedItems(subject.items).map(
                                    (item) => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.id}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {item.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {item.shift}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {item.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {item.session}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <span
                                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                        item.status === "Đi học"
                                                            ? "bg-green-100 text-green-800"
                                                            : "bg-red-100 text-red-800"
                                                    }`}
                                                >
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.notes}
                                            </td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 sm:px-6">
                        <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-700">
                                <span>Số ngày vắng: </span>
                                <span className="font-medium text-red-600">
                                    {subject.cateSubject.includes("WEB1022")
                                        ? 1
                                        : 2}
                                    /
                                    {
                                        new Set(
                                            subject.items.map(
                                                (item) => item.date,
                                            ),
                                        ).size
                                    }
                                </span>
                                <span className="ml-2">
                                    (
                                    {(
                                        ((subject.cateSubject.includes(
                                            "WEB1022",
                                        )
                                            ? 1
                                            : 2) /
                                            new Set(
                                                subject.items.map(
                                                    (item) => item.date,
                                                ),
                                            ).size) *
                                        100
                                    ).toFixed(1)}
                                    % trên tổng số ngày học)
                                </span>
                            </div>
                            <div className="text-sm text-gray-700">
                                <span>Số ngày vắng không phép: </span>
                                <span className="font-medium text-red-600">
                                    {subject.cateSubject.includes("WEB1022")
                                        ? 1
                                        : 2}
                                    /
                                    {
                                        new Set(
                                            subject.items.map(
                                                (item) => item.date,
                                            ),
                                        ).size
                                    }
                                </span>
                                <span className="ml-2">
                                    (
                                    {(
                                        ((subject.cateSubject.includes(
                                            "WEB1022",
                                        )
                                            ? 1
                                            : 2) /
                                            new Set(
                                                subject.items.map(
                                                    (item) => item.date,
                                                ),
                                            ).size) *
                                        100
                                    ).toFixed(1)}
                                    % tổng số ngày học để hạ tín chỉ)
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                            Đang xem {(currentPage - 1) * itemsPerPage + 1} đến{" "}
                            {Math.min(currentPage * itemsPerPage, totalItems)}{" "}
                            trong tổng số {totalItems} mục
                        </div>
                        <div className="flex justify-center">
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                {Array.from(
                                    { length: totalPages },
                                    (_, i) => i + 1,
                                ).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                                            currentPage === page
                                                ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                                                : "text-gray-500 hover:bg-gray-50"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReportNameClient;
