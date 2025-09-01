import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // You can pick any theme from highlight.js

const JsMarkdownViewer = () => {
  const markdown = `
# JavaScript Overview

JavaScript is a versatile and widely-used **programming language** that primarily adds interactivity and dynamic content to websites. Think of it as the *magic* that brings web pages to life.

## 🔑 Key Characteristics

- **High-Level**: JavaScript abstracts away many of the complexities of low-level machine code.
- **Interpreted**: Code is executed without compiling.
- **Dynamically Typed**
- **Object-Oriented**
- **Multi-Paradigm**
- **Cross-Platform**
- **Event-Driven**

\`\`\`js
// Example of JS code
const greet = (name) => {
  console.log("Hello, " + name);
};
greet("Shlok");
\`\`\`

## 🎯 Primary Uses

1. Front-End Web Development
2. Back-End with Node.js
3. Mobile Apps (React Native)
4. Desktop Apps (Electron)
5. Game Development
6. IoT

## ✅ Why JavaScript?

- Ubiquitous and runs everywhere.
- Supports full-stack development.
- Huge community & ecosystem.
- Continuously evolving (ES6+).

**In summary:** JavaScript powers the web. Master it to build modern apps with interactivity, scalability, and performance.
`;

  return (
    <div className="markdown-body">
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      />
    </div>
  );
};

export default JsMarkdownViewer;
