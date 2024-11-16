'use client';
import React, { useState } from "react";

interface TooltipProps {
  tip: string; // Teks yang akan ditampilkan dalam tooltip
  children: React.ReactNode; // Elemen yang akan memunculkan tooltip
}

const Tooltip: React.FC<TooltipProps> = ({ tip, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className="absolute bottom-12 bg-black border-solid-2 border border-white text-white text-sm px-2 py-1 rounded"
          style={{ whiteSpace: "nowrap" }}
        >
          {tip}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
