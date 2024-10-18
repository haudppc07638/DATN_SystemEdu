import React, { useState } from "react";
import Layout from "../../Layouts/Layout";

const reportData = {
    reportSubject: [
        {
            cateSubject: "Lập trình Web",
            items: [
                {
                    id: 1,
                    date: "27/08/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC07",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 2,
                    date: "28/08/2024",
                    shift: "Ca 2",
                    name: "Nguyễn Văn A",
                    code: "PC08",
                    session: "Thực hành",
                    status: "Vắng",
                    notes: "Có lý do",
                },
                {
                    id: 3,
                    date: "29/08/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn B",
                    code: "PC09",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 4,
                    date: "30/08/2024",
                    shift: "Ca 2",
                    name: "Nguyễn Văn C",
                    code: "PC10",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 5,
                    date: "31/08/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn D",
                    code: "PC11",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 6,
                    date: "01/09/2024",
                    shift: "Ca 2",
                    name: "Nguyễn Văn E",
                    code: "PC12",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 7,
                    date: "02/09/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn F",
                    code: "PC13",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "Không lý do",
                },
                {
                    id: 8,
                    date: "03/09/2024",
                    shift: "Ca 2",
                    name: "Nguyễn Văn G",
                    code: "PC14",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 9,
                    date: "04/09/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn H",
                    code: "PC15",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 10,
                    date: "05/09/2024",
                    shift: "Ca 2",
                    name: "Nguyễn Văn I",
                    code: "PC16",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 11,
                    date: "06/09/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn J",
                    code: "PC17",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "",
                },
                {
                    id: 12,
                    date: "06/09/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn X",
                    code: "PC17",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "",
                },
                {
                    id: 13,
                    date: "06/09/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn Y",
                    code: "PC17",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "Có lý do",
                },
            ],
        },
        {
            cateSubject: "Lập trình ReactJS",
            items: [
                {
                    id: 1,
                    date: "27/08/2024",
                    shift: "Ca 1",
                    name: "Trần Nhân Nghĩa",
                    code: "PC07",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 2,
                    date: "28/08/2024",
                    shift: "Ca 2",
                    name: "Nguyễn Văn A",
                    code: "PC08",
                    session: "Thực hành",
                    status: "Vắng",
                    notes: "Có lý do",
                },
                {
                    id: 3,
                    date: "29/08/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn B",
                    code: "PC09",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 4,
                    date: "30/08/2024",
                    shift: "Ca 2",
                    name: "Nguyễn Văn C",
                    code: "PC10",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 5,
                    date: "31/08/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn D",
                    code: "PC11",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 6,
                    date: "01/09/2024",
                    shift: "Ca 2",
                    name: "Nguyễn Văn E",
                    code: "PC12",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 7,
                    date: "02/09/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn F",
                    code: "PC13",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "Không lý do",
                },
                {
                    id: 8,
                    date: "03/09/2024",
                    shift: "Ca 2",
                    name: "Nguyễn Văn G",
                    code: "PC14",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 9,
                    date: "04/09/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn H",
                    code: "PC15",
                    session: "Lý thuyết",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 10,
                    date: "05/09/2024",
                    shift: "Ca 2",
                    name: "Nguyễn Văn I",
                    code: "PC16",
                    session: "Thực hành",
                    status: "Đi học",
                    notes: "",
                },
                {
                    id: 11,
                    date: "06/09/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn J",
                    code: "PC17",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "",
                },
                {
                    id: 12,
                    date: "06/09/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn X",
                    code: "PC17",
                    session: "Lý thuyết",
                    status: "Vắng",
                    notes: "",
                },
                {
                    id: 13,
                    date: "06/09/2024",
                    shift: "Ca 1",
                    name: "Nguyễn Văn Y",
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

    return (
        <div className="container mx-auto p-16 bg-white rounded-lg">
            <h3 className="text-2xl font-semibold">Điểm danh</h3>
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
                                    "Người điểm danh",
                                    "Mã số",
                                    "Buổi học",
                                    "Trạng thái điểm danh",
                                    "Ghi chú buổi học",
                                ].map((header) => (
                                    <th
                                        key={header}
                                        className="border border-gray-300 px-4 py-2 font-semibold text-left"
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
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.shift}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.name}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.code}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.session}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.status}
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
                            Vắng:{" "}
                            <span className="text-red-500 font-bold">0/20</span>{" "}
                            (0% trên tổng số buổi điểm danh)
                        </p>
                        <p className="mb-0">
                            Vắng:{" "}
                            <span className="text-red-500 font-bold">0/20</span>{" "}
                            (0% tổng số buổi học để hạ tín chỉ)
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
                        {/* <div className="flex items-center">
                            <span className="mr-2">Xem</span>
                            <select
                                className="form-select border border-gray-200 rounded-md p-2 focus:ring focus:ring-blue-300 transition duration-150 text-sm"
                                value={itemsPerPage}
                                readOnly
                            >
                                <option>10</option>
                                <option>20</option>
                                <option>50</option>
                            </select>
                            <span className="ml-2">mục</span>
                        </div> */}
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

ReportNameClient.layout = (page) => <Layout>{page}</Layout>;

export default ReportNameClient;
