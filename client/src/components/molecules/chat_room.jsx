import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Textarea } from "@nextui-org/react";
import Image from "next/image";

const ChatBubble = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl p-4 rounded-lg shadow overflow-auto ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{message}</ReactMarkdown>
      </div>
    </div>
  );
};

const TypingIndicator = () => (
  <div className="flex items-center space-x-1 my-2">
    <span className="loading loading-dots loading-md"></span>
  </div>
);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Asking = () => {
  const [messages, setMessages] = useState([
    {
      text: "Welcome to the Health Chat! I'm here to help you with any questions about health, medical records, and more. How can I assist you today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Save the current input before clearing it
    const userMessage = input;
    setInput("");

    // Add user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, isUser: true },
    ]);

    // Show typing indicator
    setIsTyping(true);

    // Fetch AI response
    const aiResponse = await getAIResponse(userMessage);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: aiResponse, isUser: false },
    ]);

    // Hide typing indicator
    setIsTyping(false);
  };

  const getAIResponse = async (userInput) => {
    try {
      const result = await model.generateContent(userInput);
      const response = await result.response;

      return response.text();
    } catch (error) {
      return "Sorry, there was an error with the AI response.";
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col relative">
      <div className="flex-1 overflow-auto p-4 mb-8">
        {messages.map((msg, index) => (
          <ChatBubble key={index} message={msg.text} isUser={msg.isUser} />
        ))}
        {isTyping && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white w-full mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 p-4 border-t max-w-7xl mx-auto w-full"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your question here..."
            required
          />
          {/* <Textarea
            variant="flat"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          /> */}
          <button type="submit">
            <Image
              src="/icons/send.png"
              width={40}
              height={40}
              alt="send icon"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Asking;
