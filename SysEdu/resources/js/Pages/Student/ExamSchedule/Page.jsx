import React from "react";
import LayoutStudent from "../../../Layouts/LayoutStudent";
import ExamSchedules from "../../../Components/AppStudent/ExamSchedule/ExamSchedule";

function ExamSchedule() {
    return(
        <div>
            {/* ExamSchedule student */}
            <ExamSchedules />
            
        </div>
    );
}

ExamSchedules.layout = (page) => <LayoutStudent>{page}</LayoutStudent>

export default ExamSchedule;