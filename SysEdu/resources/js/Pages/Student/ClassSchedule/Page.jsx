import React from "react";
import LayoutStudent from "../../../Layouts/LayoutStudent";
import ClassSchedules from "../../../Components/AppStudent/ClassSchedule/ClassSchedule";

function ClassSchedule() {
    return(
        <div>
            {/* ClassSchedule student */}
            <ClassSchedules />
        </div>
    );
}

ClassSchedule.layout = (page) => <LayoutStudent>{page}</LayoutStudent>

export default ClassSchedule;