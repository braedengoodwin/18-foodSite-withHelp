import React from "react";

/// the ...props lets us get all the other props we need like type, onClick, etc. It turns it into an obj
export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly ? `text-button ` : "button";
  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
