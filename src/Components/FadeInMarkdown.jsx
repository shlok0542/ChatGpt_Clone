import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const FadeInMarkdown = ({ text, delay = 100 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false); // reset fade
    const timeout = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease-in-out",
      }}
      className="text-gray-600 text-[16px] whitespace-pre-wrap mb-4"
    >
      <ReactMarkdown
        children={text}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  );
};

export default FadeInMarkdown;
