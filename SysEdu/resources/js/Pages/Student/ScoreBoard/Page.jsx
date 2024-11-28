import React from "react";
import LayoutStudent from "../../../Layouts/LayoutStudent";
import ScoreBoards from "../../../Components/AppStudent/ScoreBoard/ScoreBoard";

function ScoreBoard() {
    return(
        <div>
            {/* ScoreBoard student */}
            <ScoreBoards />

        </div>
    );
}

ScoreBoard.layout = (page) => <LayoutStudent>{page}</LayoutStudent>

export default ScoreBoard;