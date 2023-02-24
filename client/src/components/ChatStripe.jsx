import React from "react";
import classNames from "classnames";
import botImg from "../../assets/bot.svg";
import userImg from "../../assets/user.svg";

function ChatStripe({ user, message, uniqueId }) {
  const wrapperClass = classNames("wrapper", {
    ai: user !== "human" ? botImg : "",
  });

  return (
    <>
      <div className={wrapperClass} key={uniqueId}>
        <div className="chat">
          <div className="profile">
            <img src={user === "human" ? userImg : botImg} />
          </div>
          <div className="message" id={uniqueId}>
            {message}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatStripe;
