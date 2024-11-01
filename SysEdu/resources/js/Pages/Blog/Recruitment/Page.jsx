import React from "react";
import LayoutBlog from "../../../Layouts/LayoutBlog";
import HeaderRecruitment from "../../../Components/AppBlog/Recruitment/Header";
import RecruitmentCard from "../../../Components/AppBlog/Recruitment/RecruitmentCard";
import JobContent from "../../../Components/AppBlog/Recruitment/JobContent";

function Recruitment() {
    return (
        <div>
            {/* header-recruitment */}
            <HeaderRecruitment />

            {/* recruitment-card */}
            <RecruitmentCard />

            {/* job-content */}
            <JobContent />
        </div>
    );
}

Recruitment.layout = (page) => <LayoutBlog>{page}</LayoutBlog>;

export default Recruitment;
