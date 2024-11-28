import React, { useState, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";
import Breadcrumb from "../../../Components/Breadcrumbs/Breadcrumb";

const Edit = ({ faculties, student }) => {
    const [majors, setMajors] = useState([]);
    const [majorClasses, setMajorClasses] = useState([]);
    const { errors } = usePage().props;
    const [form, setForm] = useState({
        full_name: student.full_name,
        code: student.code,
        email: student.email,
        phone: student.phone,
        faculty_id: student.major?.faculty_id,
        major_id: student.major_id,
        major_class_id: student.major_class_id,
    });

    useEffect(() => {
        if (form.faculty_id) {
            fetch(`/api/majors?faculty_id=${form.faculty_id}`)
                .then((response) => response.json())
                .then((data) => {
                    setMajors(data);
                });
        }
    }, [form.faculty_id]);

    useEffect(() => {
        if (form.major_id) {
            fetch(`/api/majorClasses?major_id=${form.major_id}`)
                .then((response) => response.json())
                .then((data) => {
                    setMajorClasses(data);
                });
        }
    }, [form.major_id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(
            router.post(`/admin/sinh-vien/${student.id}/sua`, {
                ...form,
                _method: "PATCH",
            }),
        );
    };

    const handleChangeValue = (e) => {
        const { name, value, files } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: files ? files[0] : value,
        }));
    };

    const handleCancel = () => {
        setForm({
            full_name: "",
            code: "",
            email: "",
            password: "",
            phone: "",
            image: null,
            faculty_id: "",
            major_id: "",
            major_class_id: "",
        });
    };

    const handleMajorChange = (e) => {
        const majorId = e.target.value;
        setForm((prevForm) => ({ ...prevForm, major_id: majorId }));

        if (majorId) {
            fetch(`/api/majorClasses?major_id=${majorId}`)
                .then((response) => response.json())
                .then((data) => {
                    setMajorClasses(data);
                    setForm((prevForm) => ({
                        ...prevForm,
                        major_class_id: "",
                    }));
                });
        } else {
            setMajorClasses([]);
        }
    };

    const renderError = (field) => {
        return (
            errors?.[field] && (
                <div className="text-red-500 mt-1">{errors[field]}</div>
            )
        );
    };

    const isFacultySoftDeleted = !faculties.find(
        (f) => f.id === form.faculty_id,
    );
    const isMajorSoftDeleted = !majors.find((m) => m.id === form.major_id);
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
        <div className="flex flex-col gap-9">
            {/* <!-- Input Fields --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default">
                {/* Breadcrumb */}
                <div className="mx-6.5 mt-6.5">
                    <Breadcrumb
                        items={[
                            {
                                label: "Quản lý sinh viên",
                                link: "/admin/sinh-vien",
                            },
                            { label: "Sửa sinh viên" },
                        ]}
                    />
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">
                                    Họ và tên
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                    name="full_name"
                                    value={form.full_name}
                                    onChange={handleChangeValue}
                                />
                                {renderError("full_name")}
                            </div>
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">
                                    Số điện thoại
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChangeValue}
                                />
                                {renderError("phone")}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                                    name="email"
                                    placeholder="abc0123@fpt.edu.vn"
                                    value={form.email}
                                    onChange={handleChangeValue}
                                />
                                {renderError("email")}
                            </div>
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">
                                    Mã sinh viên
                                </label>
                                <input
                                    type="text"
                                    name="code"
                                    value={form.code}
                                    onChange={handleChangeValue}
                                    className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary"
                                />
                                {renderError("code")}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="xl:w-1/4 flex xl:justify-center">
                                <img
                                    src={`/storage/avatars/${student.image}`}
                                    alt="avatar"
                                    className="w-22 h-22 border border-gray-300"
                                />
                            </div>
                            <div className="xl:w-3/4">
                                <label className="mb-3 block text-black">
                                    Ảnh
                                </label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={handleChangeValue}
                                    className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary"
                                />
                                {renderError("image")}
                            </div>
                        </div>

                        {/* Other fields (Faculties and major) */}
                        <div className="flex flex-col gap-6 xl:flex-row">
                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">
                                    Khoa
                                </label>
                                <select
                                    name="faculty_id"
                                    value={form.faculty_id}
                                    onChange={handleChangeValue}
                                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary 
                                        ${form.faculty_id ? "text-black" : ""}`}
                                >
                                    {isFacultySoftDeleted && (
                                        <option
                                            className="text-red-500"
                                            disabled
                                        >
                                            Khoa hiện tại đã ngưng hoạt động
                                        </option>
                                    )}
                                    <option value="">
                                        -- Chọn khoa mới --
                                    </option>
                                    {faculties.map((faculty) => (
                                        <option
                                            key={faculty.id}
                                            value={faculty.id}
                                            className="text-body"
                                        >
                                            {faculty.name}
                                        </option>
                                    ))}
                                </select>
                                {renderError("faculty_id")}
                            </div>

                            <div className="xl:w-1/2">
                                <label className="mb-3 block text-black">
                                    Chuyên ngành
                                </label>
                                <select
                                    name="major_id"
                                    value={form.major_id}
                                    onChange={handleMajorChange}
                                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary 
                                        ${form.major_id ? "text-black" : ""}`}
                                >
                                    {isMajorSoftDeleted && (
                                        <option
                                            className="text-red-500"
                                            disabled
                                        >
                                            Chuyên ngành hiện tại đã ngưng hoạt
                                            động
                                        </option>
                                    )}
                                    <option value="">
                                        -- Chọn chuyên ngành mới --
                                    </option>
                                    {majors.map((major) => (
                                        <option
                                            key={major.id}
                                            value={major.id}
                                            className="text-body"
                                        >
                                            {major.name}
                                        </option>
                                    ))}
                                </select>
                                {renderError("major_id")}
                            </div>
                        </div>

                        <div>
                            <label className="mb-3 block text-black">
                                Chọn lớp chuyên ngành
                            </label>
                            <select
                                name="major_class_id"
                                value={form.major_class_id || ""}
                                onChange={handleChangeValue}
                                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary 
                                ${form.major_class_id ? "text-black" : ""}`}
                            >
                                <option value="" disabled className="text-body">
                                    ... Chọn lớp chuyên ngành ...
                                </option>
                                {majorClasses.map((majorClass) => (
                                    <option
                                        key={majorClass.id}
                                        value={majorClass.id}
                                        className="text-body"
                                    >
                                        {majorClass.name}
                                    </option>
                                ))}
                            </select>
                            {renderError("major_class_id")}
                        </div>

                        {/* Submit and Cancel buttons */}
                        <div className="flex gap-2">
                            <button
                                type="submit"
                                className="bg-graydark hover:opacity-80 text-white py-2 px-4 rounded"
                            >
                                Thêm
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                                onClick={handleCancel}
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;
