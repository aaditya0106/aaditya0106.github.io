import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, onClick}) {
  // If onClick is provided and no href, use button instead of anchor
  if (onClick && !href) {
    return (
      <div className={className}>
        <button className="main-button" onClick={onClick} type="button">
          {text}
        </button>
      </div>
    );
  }
  
  return (
    <div className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"} onClick={onClick}>
        {text}
      </a>
    </div>
  );
}
