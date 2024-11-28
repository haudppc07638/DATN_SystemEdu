import React from "react";
import LayoutStudent from "../../../Layouts/LayoutStudent";
import WalletStudents from "../../../Components/AppStudent/WalletStudent/Wallet";

function WalletStudent() {
    return(
        <div>
            {/* WalletStudent student */}
            <WalletStudents />
        </div>
    );
}

WalletStudent.layout = (page) => <LayoutStudent>{page}</LayoutStudent>

export default WalletStudent;