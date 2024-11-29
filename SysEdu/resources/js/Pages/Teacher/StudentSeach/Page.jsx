import React from "react";
import LayoutTeacher from "../../../Layouts/LayoutTeacher";
import StudentSeachs from "../../../Components/AppTeacher/StudentSeach/StudentSeach";

function StudentSeach() {
    return (
        <div>
            {/* tìm kiếm sinh viên */}
            <StudentSeachs />

        </div>
    );
}

StudentSeach.layout = (page) => <LayoutTeacher>{page}</LayoutTeacher>;

export default StudentSeach;