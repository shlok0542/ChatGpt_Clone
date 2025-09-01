import React, { useEffect, useState } from "react";
import "../Components/Style.css";
import { Plus, Settings2, Mic, ArrowUp } from "lucide-react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import FadeInMarkdown from "./FadeInMarkdown";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import logo from '../assets/loading.gif'

// start from here

const ChatInput = () => {


  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [conversation, setConversation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Get API URL from environment variables (Vite style)
  const API_URL = import.meta.env.VITE_API_URL;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const handleSendButton = async () => {
    if (!query.trim()) return;
    setConversation(true);
    setIsLoading(true);
    const newMessage = {
      text: query,
      sender: "user",
    };

    // Add user message immediately
    setMessages(prevMessages => [...prevMessages, newMessage]);
    
    try {
      const botResponse = await generateResponse(query);
      const botReply = {
        text: botResponse,
        sender: "bot",
      };
      
      setMessages(prevMessages => [...prevMessages, botReply]);
    } catch (error) {
      const errorReply = {
        text: "error! , Please try again.",
        sender: "bot",
      };
      setMessages(prevMessages => [...prevMessages, errorReply]);
    }
    setQuery("");
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendButton();
    }
  };

  // Api integration with Gemini

  async function generateResponse(query) {
    const url = `${API_URL}?key=${API_KEY}`;
    
    const data = {
      contents: [
        {
          parts: [
            {
              text: query,
            },
          ],
        },
      ],
    };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const result = await res.json();
      const output = result.candidates[0].content.parts[0].text;
      return output;
      
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      throw error;
    }
  }
  // End of API integration
  
  const [voiceText, setVoiceText] = useState("");
  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

    const HandleMicHandler= () => {
    setQuery("");
    if (!browserSupportsSpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    if (listening) {
      SpeechRecognition.stopListening();
      setQuery(transcript);
      resetTranscript();
    } else {
      SpeechRecognition.startListening({ continuous:false, language: 'en-IN' }); // use 'hi-IN' for Hindi
    }
};
 // Auto-save transcript when listening stops
  useEffect(() => {
    if (!listening && transcript) {
      setQuery(transcript);
      resetTranscript();
    }
  }, [listening]);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        {conversation ? (
          <div className="max-h-[80%]  overflow-y-auto text-[17px] w-[90%]">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`rounded-2xl ${
                  message.sender === "user" 
                    ? "  bg-gray-100 px-3 py-1  m-2 text-left max-w-[85%] justify-self-end " 
                    : "text-left max-w-[90%] "
                }`}
              >
                  {message.sender === "user" ? `${message.text}` : <FadeInMarkdown 
                    text={message.text} 
                    delay={80} />}
               
              </div>
            ))}
            {isLoading && (
              <div className="text-left w-10 mb-4 h-10">
               <img src={logo} alt="loading" />
              </div>
            )}
          </div>
        ) : (
          <div className="flex overflow-hidden">
            <div className="flex flex-col items-center justify-center p-4">
              <h2 className="md:text-4xl font-sans mb-4 text-2xl text-center">
                How can I Help You?
              </h2>
            </div>
          </div>
        )}

        <div className="flex flex-col md:p-6 p-4 bg-white rounded-2xl shadow-md w-[95%] border border-gray-300 sticky bottom-4">
          <div>
            <textarea
              rows={2}
              wrap="soft"
              type="text"
              placeholder="Ask anything"
              className="outline-none border-none pl-2 text-xl resize-none w-full"
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              value={query}
              disabled={isLoading}
            /> 
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <button type="button">
                <Plus 
                  size={40} 
                  strokeWidth={1} 
                  className="hover:cursor-pointer hover:bg-gray-100 p-2 rounded-full"
                />
              </button>
              <button 
                type="button"
                className="flex items-center hover:cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
              >
                <Settings2 size={25} strokeWidth={1} /> Tools
              </button>
            </div>
            
            <div className="flex gap-2 items-center">
              <button type="button" onClick={HandleMicHandler}  >
                <Mic 
                  size={40} 
                  strokeWidth={1} 
                  className="hover:cursor-pointer hover:bg-gray-100 p-2 rounded-full"
                />
              </button>
              <button type="button" className="p-2 rounded-full">
                {query ? (
                  <ArrowUp 
                    size={30} 
                    className={`hover:cursor-pointer bg-black text-white p-2 rounded-full hover:scale-105 font-extrabold ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={handleSendButton}
                  />
                ) : (
                  <img
                    width="20"
                    height="50"
                    src="https://img.icons8.com/ios/50/audio-wave--v1.png"
                    alt="audio-wave--v1"
                    className="hover:cursor-pointer"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatInput;