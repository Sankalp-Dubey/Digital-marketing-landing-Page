"use client";
import React from "react";
import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

function ChatBot() {
  const tawkMessengerRef = useRef();
  const onLoad = () => {
    console.log("onLoad works!");
  };

  return (
    <div className="tawk-to-chatbot">
      {/* <button onClick={handleMinimize}> Minimize the Chat </button> */}

      <TawkMessengerReact
        propertyId="6516d070e6bed319d00425b1"
        widgetId="1hbghseln"
        ref={tawkMessengerRef}
        onLoad={onLoad}
      />
    </div>
  );
}

export default ChatBot;
