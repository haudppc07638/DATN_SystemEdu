import React from "react";
import LayoutTeacher from "../../../Layouts/LayoutTeacher";
import ExamDetails from "../../../Components/AppTeacher/ExamList/ExamDetail";

function ExamDetail() {
    return (
        <div>
            {/* ExamDetail teacher */}
            <ExamDetails />

        </div>
    );
}

ExamDetail.layout = (page) => <LayoutTeacher>{page}</LayoutTeacher>;

export default ExamDetail;