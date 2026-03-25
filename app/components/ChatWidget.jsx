"use client";

import { useEffect, useRef, useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I am Sorora assistant. How can I help you with your project today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: trimmed }),
      });

      const data = await res.json();

      const botMessage = {
        role: "bot",
        text: data.reply || "Thanks for your message. Please try again in a moment.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "I am having trouble connecting right now. Please try again shortly.",
        },
      ]);
    }

    setLoading(false);
  };

  const onInputKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-9999">
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] rounded-[28px] border border-white/40 bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.22)] overflow-hidden mb-3">
          <div className="h-16 px-4 border-b border-gray-200/70 bg-linear-to-r from-[#E20D6E] to-[#b30c58] flex items-center justify-between">
            <div>
              <p className="text-white text-[15px] font-semibold leading-none">Sorora Assistant</p>
              <p className="text-white/85 text-xs mt-1">Online now</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="h-[calc(100%-8.5rem)] overflow-y-auto p-4 flex flex-col gap-3 bg-[#fafafa]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "self-end bg-[#E20D6E] text-white rounded-br-md"
                    : "self-start bg-white text-gray-700 border border-gray-200 rounded-bl-md"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="self-start bg-white border border-gray-200 text-gray-500 px-4 py-2 rounded-2xl rounded-bl-md text-sm">
                Thinking...
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="h-[72px] border-t border-gray-200/80 bg-white px-3 py-3 flex items-center gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder="Write your message..."
              rows={1}
              className="flex-1 h-11 resize-none rounded-xl border border-gray-200 px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E20D6E]/20 focus:border-[#E20D6E]"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="h-11 min-w-11 px-4 rounded-xl bg-[#E20D6E] hover:bg-[#c40b5e] disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Hide chat" : "Open chat"}
        className="ml-auto flex items-center gap-2 h-14 px-5 rounded-full bg-[#E20D6E] hover:bg-[#c40b5e] text-white shadow-[0_12px_30px_rgba(226,13,110,0.35)] transition-all"
      >
        <span className="text-xl leading-none">💬</span>
        <span className="text-sm font-semibold">{isOpen ? "Close Chat" : "Chat With Us"}</span>
      </button>
    </div>
  );
}