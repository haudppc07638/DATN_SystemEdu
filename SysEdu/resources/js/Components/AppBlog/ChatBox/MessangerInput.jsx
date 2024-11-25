import React, { useState } from "react";

function MessangerInput({ onSendMessage }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSendClick = () => {
        if (inputValue.trim() !== "") {
            onSendMessage(inputValue);
            setInputValue("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSendClick();
        }
    };

    return (
        <div className="p-3 bg-white border-t border-gray-200 flex">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                onClick={handleSendClick}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Gửi
            </button>
        </div>
    );
}

export default MessangerInput;
