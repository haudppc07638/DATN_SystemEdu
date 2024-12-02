import React from "react";
import LayoutTeacher from "../../../Layouts/LayoutTeacher";
import MyClassDetails from "../../../Components/AppTeacher/MyClass/MyClassDetail";

function MyClassDetail() {
    return (
        <div>
            {/* Chi tiết sinh viên lớp của tôi*/}
            <MyClassDetails />

        </div>
    );
}

MyClassDetail.layout = (page) => <LayoutTeacher>{page}</LayoutTeacher>;

export default MyClassDetail;