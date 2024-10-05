import React, { useRef, useEffect } from 'react';

const ClickOutside = ({ children, onClick }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default ClickOutside;