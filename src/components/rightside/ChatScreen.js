import React, { useContext } from "react";
import { FiPhone } from "react-icons/fi";
import ContextData from "../../store/context-data";
import classes from "../../styles/ChatScreen.module.css";
import RenderChats from "./RenderChats";

function ChatScreen() {
  const { activeUser } = useContext(ContextData);


  return (
    <div className={classes.chat_wrapper}>
      {activeUser !== "" && <RenderChats />}
      {activeUser === "" && (
        <div className={classes.only_notactive}>
          <span>
            <FiPhone />
          </span>
          <p>Click on chats to see messages</p>
        </div>
      )}
    </div>
  );
}

export default ChatScreen;
