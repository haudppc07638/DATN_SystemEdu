import React, { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';

// Tạo một Error Boundary
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught in Error Boundary: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1 className="text-red-500 text-center">Đã xảy ra lỗi. Vui lòng thử lại sau.</h1>;
        }

        return this.props.children;
    }
}

const Register = ({ subjects, employees, majors }) => {

    const { data, setData, post, processing, errors } = useForm({
        subject_id: '',
        employee_ids: [],
        major_id: '',
    });

    const [filteredSubjects, setFilteredSubjects] = useState(subjects);
    const [lecturers, setLecturers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.subjectLecturers.storeOrUpdate'));
    };

    const handleMajorChange = (selectedOption) => {
        setData('major_id', selectedOption ? selectedOption.value : '');
        filterSubjects(selectedOption ? selectedOption.value : '');
    };

    const handleSubjectChange = (e) => {
        const selectedValue = e.target.value;
        setData('subject_id', selectedValue);
        if (selectedValue) {
            getLecturersBySubject(selectedValue);
        }
    };

    const getLecturersBySubject = (subjectId) => {
        fetch(`/admin/giang-vien-mon-hoc/giang-vien?subject_id=${subjectId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setLecturers(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    useEffect(() => {
        const $select2 = $('.select2');
        $select2.select2({
            placeholder: "Chọn Giảng Viên",
            allowClear: true
        });

        return () => {
            if ($select2.hasClass('select2-hidden-accessible')) { // Kiểm tra xem Select2 đã được khởi tạo chưa
                $select2.select2('destroy');
            }
        };
    }, [employees]);

    return (
        <ErrorBoundary>
            <main id="main" className="main p-6 bg-gray-100">
                <div className="container mx-auto">
                    <Breadcrumb
                        items={[
                            { label: "Trang Chủ", link: "/admin/dashboard" },
                            { label: "Đăng Ký Giảng Viên Cho Môn Học" },
                        ]}
                    />

                    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-4">Môn Học Và Giảng Viên</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="subject_id" className="form-label block text-gray-700">Môn Học</label>
                                <select
                                    className="form-select mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                                    id="subject_id"
                                    name="subject_id"
                                    value={data.subject_id}
                                    onChange={handleSubjectChange}
                                    required
                                >
                                    <option value="" disabled>Chọn Môn</option>
                                    {filteredSubjects && filteredSubjects.length > 0 ? (
                                        filteredSubjects.map(subject => (
                                            <option key={subject.id} value={subject.id}>
                                                {subject.name}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>Không có môn học</option>
                                    )}
                                </select>
                                {errors.subject_id && <div className="text-red-500 mt-1">{errors.subject_id}</div>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="employee_ids" className="form-label block text-gray-700">Giảng Viên</label>
                                <select
                                    id="employee_ids"
                                    name="employee_ids[]"
                                    multiple
                                    required
                                    className="form-select mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2 select2"
                                    style={{ width: '100%' }}
                                >
                                    {employees && employees.length > 0 ? (
                                        employees.map(employee => (
                                            <option key={employee.id} value={employee.id}>
                                                {employee.full_name} - {employee.code}
                                            </option>
                                        ))
                                    ) : (
                                        <option disabled>Không có giảng viên</option>
                                    )}
                                </select>
                                {errors.employee_ids && <div className="text-red-500 mt-1">{errors.employee_ids}</div>}
                            </div>

                            <button type="submit" className="btn btn-primary w-1/6 bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200" disabled={processing}>
                                Cập nhập
                            </button>
                        </form>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                        <h5 className="card-title text-lg font-semibold mb-4">Danh Sách Môn Học và Giảng Viên</h5>
                        <div className="mb-4">
                            <label htmlFor="major_filter" className="form-label block text-gray-700">Lọc theo chuyên ngành:</label>
                            <select
                                id="major_filter"
                                name="major_filter"
                                className="form-select mt-1 block w-1/4 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 p-2"
                            >
                                <option value="">Môn cơ bản</option>
                                {majors.map(major => (
                                    <option key={major.id} value={major.id}>
                                        {major.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border border-gray-300 p-2">Môn Học</th>
                                    <th className="border border-gray-300 p-2">Giảng Viên</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjects && subjects.length > 0 ? (
                                    subjects.map(subject => (
                                        <tr key={subject.id} className="hover:bg-gray-100">
                                            <td className="border border-gray-300 p-2">{subject.name}</td>
                                            <td className="border border-gray-300 p-2">
                                                {subject.subject_lecturers && subject.subject_lecturers.length > 0 ? (
                                                    subject.subject_lecturers.map((subject_lecturer, index) => {
                                                        // Tìm giảng viên tương ứng từ mảng employees
                                                        const lecturer = employees.find(emp => emp.id === subject_lecturer.employee_id);
                                                        return (
                                                            <span key={subject_lecturer.id}>
                                                                {lecturer ? lecturer.full_name : 'Giảng viên không tìm thấy'}
                                                                {index < subject.subject_lecturers.length - 1 ? ', ' : ''}
                                                            </span>
                                                        );
                                                    })
                                                ) : (
                                                    'Không có giảng viên'
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2" className="text-center border border-gray-300 p-2">Không có môn học</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </ErrorBoundary>
    );
};

export default Register;