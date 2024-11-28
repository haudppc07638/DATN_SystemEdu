import React from "react";
import LayoutTeacher from "../../../Layouts/LayoutTeacher";
import HomeTeacher from "../../../Components/AppTeacher/Home/Home";

function Home() {
    return (
        <div>
            {/* home teacher */}
            <HomeTeacher />

        </div>
    );
}

Home.layout = (page) => <LayoutTeacher>{page}</LayoutTeacher>;

export default Home;
