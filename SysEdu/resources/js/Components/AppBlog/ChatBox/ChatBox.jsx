import React, { useState, useEffect, useRef } from "react";
import botchat from "../../../Assets/Images/botchat.png";
import MessangerInput from "./MessangerInput";

function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [waitingForAnswer, setWaitingForAnswer] = useState(true);
    const [options, setOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(true);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messages.length === 0) {
            const questionMessage =
                "Xin chào!!! Bạn cần hỗ trợ điều gì từ tôi?";
            setMessages([`SyseduBot: ${questionMessage}`]);
        }
        setOptions(optionsList);
        setWaitingForAnswer(true);
    }, [messages.length]);

    const optionsList = [
        "Xin chào!!! Tôi muốn nộp hồ sơ tuyển sinh",
        "Địa chỉ liên hệ của trường?",
        "Trường còn nhận hồ sơ không?",
        "Tôi muốn ứng tuyển nhân viên tại trường!",

    ];

    const handleBotReply = (userMessage) => {
        const responses = {
            "xin chào!!! tôi muốn nộp hồ sơ tuyển sinh":
                "Chào bạn! Để nộp hồ sơ tuyển sinh, vui lòng truy cập trang website tuyển sinh hoặc đến văn phòng tuyển sinh Sysedu để được tư vấn hỗ trợ!",
            "địa chỉ liên hệ của trường?":
                "Trường có địa chỉ tại: Toà nhà F, Phường Trường Thạnh, Quận Ninh Kiều, TP. Cần Thơ. Bạn cũng có thể liên hệ hotline 0345456544 hoặc 0345456545 để được hỗ trợ thêm.",
            "trường còn nhận hồ sơ không?":
                "Chúng tôi đang mở tuyển sinh! Vui lòng kiểm tra thêm thông tin trên website của chúng tôi để biết chi tiết.",
            "tôi muốn ứng tuyển nhân viên tại trường!":
                "Hiện tại trường không còn nhận tuyển dụng nữa. Xin lỗi và cảm ơn bạn đã quan tâm!",
            
        };

        const normalizedMessage = userMessage.toLowerCase().trim();
        const reply =
            responses[normalizedMessage] ||
            "Tôi không hiểu. Bạn có thể hỏi lại không?";

        setTimeout(() => {
            setMessages((prev) => [...prev, `SyseduBot: ${reply}`]);
            setWaitingForAnswer(false);
        }, 1500);
    };

    const handleSendMessage = (newMessage) => {
        if (!newMessage.trim()) return;
        setMessages((prev) => [...prev, `Bạn: ${newMessage}`]);

        if (waitingForAnswer) {
            if (optionsList.includes(newMessage)) {
                handleBotReply(newMessage);
            } else {
                setMessages((prev) => [
                    ...prev,
                    `SyseduBot: Chào bạn!!! Bạn hãy chọn câu hỏi bên dưới`,
                ]);
            }
        } else {
            handleBotReply(newMessage);
        }
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="fixed bottom-10 right-10 z-50">
            {!isOpen && (
                <div onClick={() => setIsOpen(true)}>
                    <img src={botchat} alt="botchat" className="w-25 animate-bounce"/>
                </div>
            )}

            {isOpen && (
                <div className="w-full max-w-md mx-auto mt-10 flex flex-col h-[500px] bg-white rounded-lg shadow-md">
                    <div className="bg-blue-600 text-white text-center py-3 font-bold rounded-t-lg relative">
                        Chatbot Sysedu
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-5 text-white text-xl"
                        >
                            &times;
                        </button>
                    </div>

                    <div className="flex flex-col space-y-4 mt-2 px-6 py-2 overflow-y-auto flex-grow max-h-[400px]">
                        {messages.map((message, index) => {
                            const isBotMessage =
                                message.startsWith("SyseduBot");
                            return (
                                <div
                                    key={index}
                                    className={`flex ${
                                        isBotMessage
                                            ? "justify-start"
                                            : "justify-end"
                                    } items-start`}
                                >
                                    <div
                                        className={`px-4 py-2 rounded-lg ${
                                            isBotMessage
                                                ? "bg-green-600"
                                                : "bg-blue-600"
                                        } max-w-[80%]`}
                                    >
                                        <p className="text-white">{message}</p>
                                    </div>
                                </div>
                            );
                        })}
                        <div ref={messagesEndRef} />
                    </div>

                    {waitingForAnswer && (
                        <div className="mt-4 px-4 py-2 bg-gray-200 rounded-md text-left">
                            <div className="flex space-x-4 overflow-x-auto pb-2">
                                {options.map((option, index) => (
                                    <div
                                        key={index}
                                        className="p-2 bg-blue-600 text-white rounded-lg cursor-pointer whitespace-nowrap"
                                        onClick={() =>
                                            handleSendMessage(option)
                                        }
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <MessangerInput onSendMessage={handleSendMessage} />
                </div>
            )}
        </div>
    );
}

export default ChatBox;
