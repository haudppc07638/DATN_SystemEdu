import React from "react";
import LayoutStudent from "../../../Layouts/LayoutStudent";
import RegisterForCourses from "../../../Components/AppStudent/RegisterForCourse/RegisterForCourse";

function RegisterForCourse() {
    return(
        <div>
            {/* RegisterForCourse student */}
            <RegisterForCourses />
        </div>
    );
}

RegisterForCourse.layout = (page) => <LayoutStudent>{page}</LayoutStudent>

export default RegisterForCourse;