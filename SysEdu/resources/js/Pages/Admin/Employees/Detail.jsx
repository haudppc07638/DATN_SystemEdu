import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

const Detail = ({ employee, subjects, nameSubject, employeeSubjects }) => {
    const [showSubjectForm, setShowSubjectForm] = useState(false);
    const [selectedSubjects, setSelectedSubjects] = useState(employeeSubjects);

    const handleSubjectChange = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedSubjects(value);
    };

    const handleEditClick = () => {
        setShowSubjectForm(!showSubjectForm);
    };

    return (
        <main id="main" className="main p-6 bg-gray-100">
            <div className="container mx-auto">
                {/* Breadcrumb */}
                <Breadcrumb
                    items={[
                        { label: "Trang Chủ", link: "/admin/dashboard" },
                        { label: "Quản lý nhân sự", link: "/admin/nhan-su" },
                        { label: "Chi tiết nhân sự" },
                    ]}
                />

                <h1 className="text-3xl font-bold mb-4">Chi tiết nhân sự: {employee.full_name}</h1>

                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 text-center bg-gray-200 p-4 rounded-lg">
                            <img src={employee.image ? `/storage/avatars/${employee.image}` : '/assets/images/default-avatar1.jpg'}
                                 alt="Avatar" className="img-fluid rounded-full w-48 h-48 mx-auto" />
                        </div>
                        <div className="md:w-2/3 p-4">
                            <h3 className="text-xl font-semibold text-center mb-2">Thông tin cá nhân</h3>
                            <div className="space-y-2">
                                <p className="text-lg"><strong>Email:</strong> {employee.email}</p>
                                <p className="text-lg"><strong>Số điện thoại:</strong> {employee.phone}</p>
                                <p className="text-lg"><strong>Chức vụ:</strong> {employee.position}</p>
                                <p className="text-lg"><strong>Khoa:</strong> {employee.department?.name}</p>
                                <p className="text-lg"><strong>Chuyên ngành:</strong> {employee.major?.name}</p>
                                <p className="text-lg"><strong>Ngày sinh:</strong> {employee.date_of_birth}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <div className="bg-green-500 text-white p-4 rounded-t-lg">
                        <h6 className="mb-0">Thông tin chi tiết</h6>
                    </div>
                    <div className="p-4">
                        <div className="mb-4">
                            <p className="text-lg"><strong>Môn dạy:</strong>
                                <span id="selected-subjects" className="font-medium"> 
                                    {nameSubject.join(' | ')}
                                </span>
                            </p>
                            <button onClick={handleEditClick} className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Chỉnh sửa</button>
                            {showSubjectForm && (
                                <form action={`/admin/nhan-su/${employee.id}/updateSubjects`} method="POST" className="mt-4">
                                    <select name="subjects[]" multiple onChange={handleSubjectChange} className="form-select border rounded-md p-2 w-full">
                                        {subjects.map(subject => (
                                            <option key={subject.id} value={subject.id} selected={selectedSubjects.includes(subject.id)}>
                                                {subject.name}
                                            </option>
                                        ))}
                                    </select>
                                    <button type="submit" className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Lưu</button>
                                </form>
                            )}
                        </div>
                        <div className="mb-4">
                            <p className="text-lg"><strong>Trình độ học vấn:</strong> {employee.educational_level}</p>
                            <p className="text-lg"><strong>Quốc tịch:</strong> {employee.nation}</p>
                            <p className="text-lg"><strong>Số CMND/CCCD:</strong> {employee.identity_card}</p>
                            <p className="text-lg"><strong>Ngày cấp:</strong> {employee.card_issuance_date}</p>
                            <p className="text-lg"><strong>Nơi cấp:</strong> {employee.card_location}</p>
                            <p className="text-lg"><strong>Địa chỉ:</strong> {employee.house_number}, {employee.commune_level}, {employee.district}, {employee.provice_city}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Detail;