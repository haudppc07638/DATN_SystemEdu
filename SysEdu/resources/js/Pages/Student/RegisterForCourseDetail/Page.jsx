import React from "react";
import LayoutStudent from "../../../Layouts/LayoutStudent";
import RegisterForCourseDetails from "../../../Components/AppStudent/RegisterForCourseDetail/RegisterForCourseDetail";

function RegisterForCourseDetail() {
    return(
        <div>
            {/* RegisterForCourse student */}
            <RegisterForCourseDetails />
        </div>
    );
}

RegisterForCourseDetail.layout = (page) => <LayoutStudent>{page}</LayoutStudent>

export default RegisterForCourseDetail;