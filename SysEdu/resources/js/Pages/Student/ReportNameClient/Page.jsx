import React from "react";
import LayoutStudent from "../../../Layouts/LayoutStudent";
import ReportNameClients from "../../../Components/AppStudent/ReportNameClient/ReportNameClient";

function ReportNameClient() {
    return(
        <div>
            {/* ReportNameClient student */}
            <ReportNameClients />
        </div>
    );
}

ReportNameClient.layout = (page) => <LayoutStudent>{page}</LayoutStudent>

export default ReportNameClient;