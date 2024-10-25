import React from "react";
import BannerTop from "../../../Components/AppBlog/Home/BannerTop";
import Introduce from "../../../Components/AppBlog/Home/Introduce";
import LayoutBlog from "../../../Layouts/LayoutBlog";
import Partners from "../../../Components/AppBlog/Home/Partners";
import Content from "../../../Components/AppBlog/Home/Content";
import BlogHome from "../../../Components/AppBlog/Home/BlogHome";
import BannerBottom from "../../../Components/AppBlog/Home/BannerBottom";

function Home() {
    return (
        <div>
            {/* background */}
            <BannerTop />

            {/* introduct */}
            <Introduce />

            {/* content */}
            <Content />

            {/* blog home */}
            <BlogHome />

            {/* partners */}
            <Partners />

            {/* backgrond bottom */}
            <BannerBottom />
        </div>
    );
}

Home.layout = (page) => <LayoutBlog>{page}</LayoutBlog>;

export default Home;
