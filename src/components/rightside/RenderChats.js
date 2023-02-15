import React, { useContext, useRef } from "react";
import ContextData from "../../store/context-data";
import classes from "../../styles/RenderChats.module.css";
import { AiOutlineSend } from "react-icons/ai";

function RenderChats() {
  const { activeUser, givenMessageData, personDatas, sentMessage } =
    useContext(ContextData);

  const sentMessageRef = useRef();

  let activeUserIndex = activeUser === "john" || activeUser === "sarah" ? 1 : 0;

  const acticeUserData = personDatas.find((curr) => curr.id === activeUser);

  function sendMessageHandler() {
    if (sentMessageRef.current.value.trim() === "") {
      return;
    }
    sentMessage({ message: sentMessageRef.current.value, from: activeUser });

    sentMessageRef.current.value = "";
  }

  return (
    <>
      <header className={classes.heading}>
        <img src={acticeUserData.img} alt="User Image" />
        <div className={classes.active_user_name}>{acticeUserData.name}</div>
      </header>
      <div className={classes["message-wrapper"]}>
        {givenMessageData[activeUserIndex].messages.map((curr) => {
          return (
            <div
              className={`${
                activeUser === curr.from
                  ? classes.active_message
                  : classes.only_message
              } ${classes.designing}`}
              key={Math.random()}
            >
              {curr.message}
            </div>
          );
        })}
      </div>
      <div className={classes.chat_wrapper}>
        <div className={classes.input_icon_wrapper}>
          <input
            ref={sentMessageRef}
            type="text"
            placeholder="Type a Message"
          />
          <AiOutlineSend onClick={sendMessageHandler} />
        </div>
      </div>
    </>
  );
}

export default RenderChats;
