import React from "react";
import LayoutTeacher from "../../../Layouts/LayoutTeacher";
import TeachingSchedules from "../../../Components/AppTeacher/TeachingSchedule/TeachingSchedule";

function TeachingSchedule() {
    return (
        <div>
            {/* Lịch dạy sinh viên */}
            <TeachingSchedules />

        </div>
    );
}

TeachingSchedule.layout = (page) => <LayoutTeacher>{page}</LayoutTeacher>;

export default TeachingSchedule;