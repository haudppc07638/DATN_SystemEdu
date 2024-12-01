import React from "react";
import LayoutTeacher from "../../../Layouts/LayoutTeacher";
import AttendanceDetails from "../../../Components/AppTeacher/Attendance/AttendenceDetail";

function AttendanceDetail() {
    return (
        <div>
            {/* attendance-details teacher */}
            <AttendanceDetails />

        </div>
    );
}

AttendanceDetail.layout = (page) => <LayoutTeacher>{page}</LayoutTeacher>;

export default AttendanceDetail;