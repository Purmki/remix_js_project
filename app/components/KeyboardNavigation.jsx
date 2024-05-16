import React, { useEffect, useState } from 'react';

const KeyboardNavigation = ({ children }) => {
  const [focusableElements, setFocusableElements] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(':focusable'));
    setFocusableElements(elements);

    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex((prevIndex) => (prevIndex - 1 + elements.length) % elements.length);
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex((prevIndex) => (prevIndex + 1) % elements.length);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [focusableElements]);

  useEffect(() => {
    if (focusableElements.length > 0) {
      focusableElements[focusedIndex].focus();
    }
  }, [focusedIndex, focusableElements]);

  return React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      onFocus: () => setFocusedIndex(index),
      className: child.props.className + (index === focusedIndex ? ' bg-yellow-200' : ''), // Add Tailwind CSS class to highlight the focused element
      onClick: () => setFocusedIndex(index), // Change focused index when the button is clicked
    })
  );
};

export default KeyboardNavigation;
