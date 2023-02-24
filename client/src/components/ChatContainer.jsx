import React from "react";
import ChatStripe from "./ChatStripe";

function ChatContainer({ chatLog }) {
  const allMessages = chatLog.map((chat) => {
    return (
      <ChatStripe
        key={chat.id}
        uniqueId={chat.id}
        message={chat.message}
        user={chat.user}
      />
    );
  });

  return <div id="chat_container">{allMessages}</div>;
}

export default ChatContainer;
