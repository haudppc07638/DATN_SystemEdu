import React from "react";
import LayoutTeacher from "../../../Layouts/LayoutTeacher";
import MyClasss from "../../../Components/AppTeacher/MyClass/MyClass";

function MyClass() {
    return (
        <div>
            {/* sinh viên lớp của tôi */}
            <MyClasss />

        </div>
    );
}

MyClass.layout = (page) => <LayoutTeacher>{page}</LayoutTeacher>;

export default MyClass;