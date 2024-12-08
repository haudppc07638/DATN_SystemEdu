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
        <div className="container mx-auto p-16 bg-white rounded-lg shadow-default">
            <h2 className="text-2xl font-bold">Điểm danh</h2>
            <div className="flex flex-col items-start mb-2">
                <BreadcrumbStudent items={[{ label: "Điểm danh" }]} />
            </div>
            <div className="flex flex-col mb-2 mt-4">
                <div className="mb-4">
                    <label
                        htmlFor="select"
                        className="block mb-2 font-medium text-gray-700 text-sm"
                    >
                        Thời gian
                    </label>
                    <select
                        className="form-select border border-gray-200 rounded-md p-2 focus:ring focus:ring-blue-300 transition duration-150 w-full text-sm"
                        id="select"
                    >
                        <option>Spring 2024</option>
                        <option>Summer 2024</option>
                        <option>Fall 2024</option>
                        <option>Winter 2024</option>
                    </select>
                </div>
            </div>
            {reportData.reportSubject.map((subject) => (
                <div key={subject.cateSubject} className="mb-8 py-6 text-sm">
                    <h4 className="text-xl font-semibold mb-2">
                        {subject.cateSubject}
                    </h4>
                    <div className="flex justify-end mb-3 mt-4">
                        {["Print", "Copy", "Excel", "CSV", "PDF"].map(
                            (header) => (
                                <div
                                    key={header}
                                    className="px-3 py-2 bg-graydark text-white cursor-pointer text-sm"
                                >
                                    {header}
                                </div>
                            ),
                        )}
                    </div>
                    <table className="table-auto w-full border border-gray-300 rounded-md text-sm">
                        <thead className="bg-gray-200">
                            <tr>
                                {[
                                    "STT",
                                    "Ngày",
                                    "Ca",
                                    "Giảng viên",
                                    "Buổi học",
                                    "Trạng thái điểm danh",
                                    "Ghi chú buổi học",
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
                            {getPaginatedItems(subject.items).map((item) => (
                                <tr key={item.id}>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {item.id}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.date}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {item.shift}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.name}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.session}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <span
                                            className={`${item.status === "Đi học" ? "text-green-500" : "text-red-500"}`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.notes}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between my-4 text-sm text-gray-600 mt-5">
                        <p className="mb-0">
                            Số ngày vắng:{" "}
                            <span className="text-red-500 font-bold">
                                {subject.cateSubject.includes("WEB1022")
                                    ? 1
                                    : 2}
                                /
                                {
                                    new Set(
                                        subject.items.map((item) => item.date),
                                    ).size
                                }
                            </span>{" "}
                            (
                            {(
                                ((subject.cateSubject.includes("WEB1022")
                                    ? 1
                                    : 2) /
                                    new Set(
                                        subject.items.map((item) => item.date),
                                    ).size) *
                                100
                            ).toFixed(1)}
                            % trên tổng số ngày học)
                        </p>
                        <p className="mb-0">
                            Số ngày vắng không phép:{" "}
                            <span className="text-red-500 font-bold">
                                {subject.cateSubject.includes("WEB1022")
                                    ? 1
                                    : 2}
                                /
                                {
                                    new Set(
                                        subject.items.map((item) => item.date),
                                    ).size
                                }
                            </span>{" "}
                            (
                            {(
                                ((subject.cateSubject.includes("WEB1022")
                                    ? 1
                                    : 2) /
                                    new Set(
                                        subject.items.map((item) => item.date),
                                    ).size) *
                                100
                            ).toFixed(1)}
                            % tổng số ngày học để hạ tín chỉ)
                        </p>
                    </div>
                    <div className="flex justify-between items-center mt-5 text-sm">
                        <p className="mb-0 text-gray-700">
                            Đang xem đến mục{" "}
                            <span className="font-semibold">
                                {(currentPage - 1) * itemsPerPage + 1}
                            </span>{" "}
                            đến{" "}
                            <span className="font-semibold">
                                {Math.min(
                                    currentPage * itemsPerPage,
                                    totalItems,
                                )}
                            </span>{" "}
                            trong tổng số{" "}
                            <span className="font-semibold">{totalItems}</span>{" "}
                            mục
                        </p>
                        <nav aria-label="Page navigation example">
                            <ul className="flex items-center space-x-2">
                                <li
                                    className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                                >
                                    <button
                                        className={`page-link w-10 ${currentPage === 1 ? "text-gray-500 cursor-not-allowed" : "text-blue-600"}`}
                                        onClick={() =>
                                            setCurrentPage(currentPage - 1)
                                        }
                                        disabled={currentPage === 1}
                                    >
                                        Trước
                                    </button>
                                </li>
                                {Array.from(
                                    { length: totalPages },
                                    (_, index) => (
                                        <li
                                            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                            key={index}
                                        >
                                            <button
                                                className={`page-link w-10 ${currentPage === index + 1 ? "bg-blue-600 text-white" : "text-blue-600"}`}
                                                onClick={() =>
                                                    setCurrentPage(index + 1)
                                                }
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ),
                                )}
                                <li
                                    className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
                                >
                                    <button
                                        className={`page-link w-10 ${currentPage === totalPages ? "text-gray-500 cursor-not-allowed" : "text-blue-600"}`}
                                        onClick={() =>
                                            setCurrentPage(currentPage + 1)
                                        }
                                        disabled={currentPage === totalPages}
                                    >
                                        Sau
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReportNameClient;
