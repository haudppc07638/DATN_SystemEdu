import React from "react";
import HeaderBlog from "../Components/AppBlog/Header";
import FooterBlog from "../Components/AppBlog/Footer";

function LayoutBlog({children}) {
    return (
        <div className="flex bg-whiter">
            <div className="flex-grow">
                <HeaderBlog />
                <main>{children}</main>
                <FooterBlog />
            </div>
        </div>
    );
}

export default LayoutBlog;
