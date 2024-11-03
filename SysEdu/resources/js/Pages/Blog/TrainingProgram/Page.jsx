import React from "react";
import LayoutBlog from "../../../Layouts/LayoutBlog";
import HeaderTraining from "../../../Components/AppBlog/TrainingProgram/Header";
import ContentTraining from "../../../Components/AppBlog/TrainingProgram/ContentTraining";

function TrainingProgram() {
    return (
        <div>
            {/* header */}
            <HeaderTraining />

            {/* content-training */}
            <ContentTraining />
        </div>
    );
}

TrainingProgram.layout = (page) => <LayoutBlog>{page}</LayoutBlog>;

export default TrainingProgram;
