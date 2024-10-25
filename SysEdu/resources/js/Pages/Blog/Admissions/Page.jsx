import React from "react";
import LayoutBlog from "../../../Layouts/LayoutBlog";
import BannerTop from "../../../Components/AppBlog/Admissions/BannerTop";
import Content from "../../../Components/AppBlog/Home/Content";
import Header from "../../../Components/AppBlog/Admissions/Header";
import Introduce from "../../../Components/AppBlog/Home/Introduce";
import BannerSection from "../../../Components/AppBlog/Admissions/BannerSection";
import BannerContent from "../../../Components/AppBlog/Admissions/BannerContent";
import AdmissionImfo from "../../../Components/AppBlog/Admissions/AdmissionsImfo";
import RegisterImfo from "../../../Components/AppBlog/Admissions/RegisterImfo";
import Partners from "../../../Components/AppBlog/Home/Partners";

function Admissions() {
    return (
        <div>
            {/* header */}
            <Header />

            {/* banner top */}
            <BannerTop />

            {/* introduct */}
            <Introduce />

            {/* banner-section */}
            <BannerSection />

            {/* banner-content */}
            <BannerContent />

            {/* content */}
            <Content />

            {/* admissions imfo */}
            <AdmissionImfo />

            {/* register imfo */}
            <RegisterImfo />
        </div>
    );
}

Admissions.layout = (page) => <LayoutBlog>{page}</LayoutBlog>;

export default Admissions;
