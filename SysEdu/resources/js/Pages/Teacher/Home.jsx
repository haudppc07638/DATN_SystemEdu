import React from "react";
import Secondry from "../../Layouts/Secondry"
function Home (){
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Hệ Thống SysEdu Teacher</h1>
            <p className="mt-4 text-gray-600"></p>
        </div>
    );
}

Home.layout = page => <Secondry>{page}</Secondry>;

export default Home;