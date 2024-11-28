import React from "react";
import LayoutStudent from "../../../Layouts/LayoutStudent";
import HomeStudent from "../../../Components/AppStudent/Home/Home"

function Home() {
    return(
        <div>
            {/* Home student */}
            <HomeStudent />
        </div>
    );
}

Home.layout = (page) => <LayoutStudent>{page}</LayoutStudent>

export default Home;