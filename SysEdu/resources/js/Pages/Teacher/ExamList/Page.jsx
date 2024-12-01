import React from "react";
import LayoutTeacher from "../../../Layouts/LayoutTeacher";
import ExamLists from "../../../Components/AppTeacher/ExamList/ExamList";

function ExamList() {
    return (
        <div>
            {/* ExamList teacher */}
            <ExamLists />

        </div>
    );
}

ExamList.layout = (page) => <LayoutTeacher>{page}</LayoutTeacher>;

export default ExamList;