import { useEffect, useRef } from "react";

import "./CustomCursor.css";

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (event) => {
      if (!cursor) {
        return;
      }

      cursor.style.left =
        `${event.clientX}px`;

      cursor.style.top =
        `${event.clientY}px`;
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
    />
  );
}

export default CustomCursor;