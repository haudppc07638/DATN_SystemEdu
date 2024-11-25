import React from "react";
import LayoutBlog from "../../../Layouts/LayoutBlog";
import ContentIntroduction from "../../../Components/AppBlog/GeneralIntroduction/ContentIntroduction";
import HeaderIntroduction from "../../../Components/AppBlog/GeneralIntroduction/HearderIntroduction";
import CommentSection from "../../../Components/AppBlog/Admissions/CommentSection";

function GeneralIntroduction() {
    return (
        <div>
            {/* header */}
            <HeaderIntroduction />

            {/* content-introduct */}
            <ContentIntroduction />

            {/* comment-introduction */}
            <CommentSection />
        </div>
    )
}

GeneralIntroduction.layout = (page) => <LayoutBlog>{page}</LayoutBlog>;

export default GeneralIntroduction;
