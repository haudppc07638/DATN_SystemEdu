import React, { useState, useEffect } from "react";
import { Link, useForm, router, usePage } from "@inertiajs/react";
import Breadcrumb from "../../../Components/Breadcrumbs/Breadcrumb";
import dayjs from "dayjs";

const Show = ({ faculties }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [majors, setMajors] = useState([]);
    const [majorClasses, setMajorClasses] = useState([]);

    const [idToDelete, setIdToDelete] = useState(null);
    const [form, setForm] = useState({
        faculty_id: "",
        major_id: "",
        subject_id: "",
    });

    const handleDeleteClick = (id) => {
        setIdToDelete(id);
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setIdToDelete(null);
    };

    const confirmDelete = () => {
        router.delete(`lop-chuyen-nganh/${idToDelete}`);
        handleClosePopup();
    };

    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            Swal.fire({
                title: "Thành công!",
                text: flash.success,
                icon: "success",
                confirmButtonText: "OK",
            });
        }
        if (flash.error) {
            Swal.fire({
                title: "Lỗi!",
                text: flash.error,
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    }, [flash]);

    const handleFacultyChange = (e) => {
        const facultyId = e.target.value;
        setForm((prevForm) => ({ ...prevForm, faculty_id: facultyId }));

        if (facultyId) {
            fetch(`/api/majors?faculty_id=${facultyId}`)
                .then((response) => response.json())
                .then((data) => {
                    setMajors(data);
                    setForm((prevForm) => ({ ...prevForm, major_id: "" }));
                });
        } else {
            setMajors([]);
        }
    };

    const handleMajorChange = (e) => {
        const majorId = e.target.value;
        setForm((prevForm) => ({ ...prevForm, major_id: majorId }));

        if (majorId) {
            fetch(`/api/majorClasses?major_id=${majorId}`)
                .then((response) => response.json())
                .then((data) => {
                    setMajorClasses(data);
                });
        }
    };

    const handleFilterChange = (e) => {
        setData({
            ...data,
            majors: e.target.value,
        });
    };

    const handleSearchChange = (e) => {
        setData("search", e.target.value);
    };

    const formatDate = (date) => {
        return dayjs(date).format("MM/YYYY");
    };

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-16 h-16 border-4 border-dashed border-t-blue-600 border-b-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h2 className="text-2xl font-bold">Danh sách lớp môn</h2>
            <div className="flex flex-col items-start mb-2">
                <Breadcrumb items={[{ label: "Danh sách lớp môn" }]} />
            </div>
            {/* <div className="flex flex-col justify-between md:flex-row gap-5 mb-4">
                <select
                    name="major"
                    value={data.major}
                    onChange={handleFilterChange}
                    className="px-4 py-1 rounded-md border-2 border-gray-700 text-gray-600 text-sm bg-white"
                >
                    <option value="">Tất cả Khoa</option>
                    <option value="CNTT">Công Nghệ Thông Tin</option>
                    <option value="KinhTe">Kinh Tế</option>
                    <option value="NgoaiNgu">Ngoại Ngữ</option>
                    <option value="KyThuat">Kỹ Thuật</option>
                </select>

                <form
                    onSubmit={handleSearchSubmit}
                    className="flex items-center gap-5"
                >
                    <div className="flex px-4 rounded-md border-2 border-gray-700 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            value={data.search}
                            onChange={handleSearchChange}
                            className="w-full outline-none bg-transparent text-gray-600 text-sm"
                        />
                        <button type="submit" className="p-2">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <Link
                        href="/admin/chuyen-nganh/them"
                        className="bg-graydark hover:opacity-80 text-white font-bold py-2 px-4 rounded text-center"
                    >
                        Thêm
                    </Link>
                </form>
            </div> */}
            {form.major_id && (
                <div className="flex justify-end mb-6">
                    <Link
                        href={`/admin/lop-chuyen-nganh/${form.major_id}/them`}
                        className="bg-graydark hover:opacity-80 text-white font-bold py-2 px-4 rounded text-center"
                    >
                        Thêm
                    </Link>
                </div>
            )}

            {/* Table */}
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-2 text-left dark:bg-meta-4">
                            <th className="min-w-[10px] text-sm py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                                STT
                            </th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">
                                Tên lớp 
                            </th>
                            <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                                Mã lớp 
                            </th>
                            <th className="min-w-[60px] py-4 px-4 font-medium text-black dark:text-white">
                                Số lượng
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Lớp chuyên ngành
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Giảng viên
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Tình trạng
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Ngày đăng ký
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Ngày bắt đầu
                            </th>
                            <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                                Ngày kết thúc
                            </th>
                            <th className="py-4 px-4 font-medium text-black dark:text-white">
                                Tác vụ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(majorClasses) &&
                        majorClasses.length > 0 ? (
                            majorClasses.map((majorClass, index) => (
                                <tr key={majorClasses.id}>
                                    <td className="border-b border-[#eee] py-4 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                        <h5 className="font-medium text-black dark:text-white">
                                            {index + 1}
                                        </h5>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">
                                            {majorClass.training_system}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">
                                            {majorClass.name}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">
                                            {majorClass.quantity}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">
                                            {majorClass.major.name}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">
                                            {majorClass.employee.full_name}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <span
                                            className={`cursor-pointer ${majorClass.status === 0 ? "text-green-500" : "text-red-500"}`}
                                            onClick={
                                                majorClass.status === 0
                                                    ? () =>
                                                          handleEndClass(
                                                              majorClass,
                                                          )
                                                    : null
                                            }
                                        >
                                            {majorClass.status === 0
                                                ? "Đang học"
                                                : "Đã kết thúc"}
                                        </span>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <p className="text-black dark:text-white">
                                            {formatDate(majorClass.created_at)}
                                        </p>
                                    </td>
                                    <td className="border-b border-[#eee] py-4 px-4 dark:border-strokedark">
                                        <div className="flex items-center space-x-3.5">
                                            {majorClass.status === 0 && (
                                                <Link
                                                    href={`/admin/lop-chuyen-nganh/${majorClass.major_id}/${majorClass.id}/sua`}
                                                    className="hover:text-primary"
                                                >
                                                    <i
                                                        className="fa-regular fa-pen-to-square text-xl"
                                                        title="Chỉnh sửa"
                                                    ></i>
                                                </Link>
                                            )}
                                            <button
                                                className="hover:text-primary"
                                                onClick={() =>
                                                    handleDeleteClick(
                                                        majorClass.id,
                                                    )
                                                }
                                            >
                                                <i
                                                    className="fa-regular fa-trash-can text-xl"
                                                    title="Xóa"
                                                ></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="9"
                                    className="border-b border-[#eee] py-4 px-4 dark:border-strokedark text-center"
                                >
                                    Không có dữ liệu
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="my-6">
                {/* <Pagination link={departments.links} onPageChange={handlePageChange} /> */}
            </div>

            {/* Popup */}
            {showPopup && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <div className="bg-white p-6 rounded shadow-lg z-60 relative">
                        <h2 className="text-xl font-semibold mb-4">Cảnh báo</h2>
                        <p>Bạn có chắc chắn muốn xóa mục này không?</p>
                        <div className="mt-4 flex justify-end">
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
                                onClick={handleClosePopup}
                            >
                                Hủy
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={confirmDelete}
                            >
                                Xóa
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Show;
