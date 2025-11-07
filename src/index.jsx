import React, { useState } from "react";
import { createRoot } from "react-dom/client";

// 简单悬浮框组件
function FloatingBox() {
  const [count, setCount] = useState(0);

  const style = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "200px",
    padding: "15px",
    backgroundColor: "#4caf50",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    cursor: "pointer",
    zIndex: 9999,
    userSelect: "none",
  };

  return (
    <div style={style} onClick={() => setCount(count + 1)}>
      Hello React Userscript 🚀<br />
      Clicks: {count}
    </div>
  );
}

// 创建挂载点
const container = document.createElement("div");
document.body.appendChild(container);

// 渲染组件
createRoot(container).render(<FloatingBox />);
