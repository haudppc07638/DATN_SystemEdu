import React from 'react';

const FacultySelect = ({ selectedFaculty, setSelectedFaculty, faculties, errors }) => {
    return (
        <div className="relative z-20 bg-transparent dark:bg-form-input">
            <select
                value={selectedFaculty}
                onChange={(e) => setSelectedFaculty(e.target.value)}
                className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                    selectedFaculty ? 'text-black dark:text-white' : ''
                }`}
            >
                <option value="" disabled className="text-body dark:text-bodydark">
                    Chọn khoa
                </option>
                {faculties.map((faculty) => (
                    <option key={faculty.id} value={faculty.id} className="text-body dark:text-bodydark">
                        {faculty.name}
                    </option>
                ))}
            </select>
            {errors?.faculty_id && <div className="text-red-500 mt-1">{errors.faculty_id}</div>}
        </div>
    );
};

export default FacultySelect;