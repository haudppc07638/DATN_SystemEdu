import React from "react";
import LayoutTeacher from "../../../Layouts/LayoutTeacher";
import Attendances from "../../../Components/AppTeacher/Attendance/Attendance";

function Attendance() {
    return (
        <div>
            {/* attendances teacher */}
            <Attendances />

        </div>
    );
}

Attendance.layout = (page) => <LayoutTeacher>{page}</LayoutTeacher>;

export default Attendance;
