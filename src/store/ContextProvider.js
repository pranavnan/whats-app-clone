import React, { useEffect, useState } from "react";
import ContextData from "./context-data";
import { personData } from "./dummy-persons";
import messageData from "./dummy-persons";

function ContextProvider(props) {
  const [activeUser, setActiveUser] = useState("");
  const [personDatas, setPersonDatas] = useState(personData);
  // const [givenMessageData, setGivenMessage] = useState(messageData);
  const [givenMessageData, setGivenMessage] = useState(
    JSON.parse(localStorage.getItem("msgdata")) || messageData
  );

  function setActiveUsers(username) {
    setActiveUser(username);
  }

  function sentMessage(msg) {
    if (activeUser === "varun" || activeUser === "anuj") {
      const newMessageData = structuredClone(givenMessageData[0].messages);
      newMessageData.push(msg);

      setGivenMessage([{ messages: newMessageData }, givenMessageData[1]]);
      localStorage.setItem(
        "msgdata",
        JSON.stringify([{ messages: newMessageData }, givenMessageData[1]])
      );
    } else {
      const newMessageData = structuredClone(givenMessageData[1].messages);
      newMessageData.push(msg);

      setGivenMessage([givenMessageData[0], { messages: newMessageData }]);

      localStorage.setItem(
        "msgdata",
        JSON.stringify([givenMessageData[0], { messages: newMessageData }])
      );
    }
  }

  // useEffect(() => {
  //   localStorage.setItem("msgdata", JSON.stringify(givenMessageData));
  //   console.log("store the latest data", givenMessageData);
  // }, [givenMessageData]);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("msgdata");

    if (dataFromLocalStorage) {
      setGivenMessage(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  return (
    <ContextData.Provider
      value={{
        activeUser,
        setActiveUsers,
        personDatas,
        givenMessageData,
        sentMessage,
      }}
    >
      {props.children}
    </ContextData.Provider>
  );
}

export default ContextProvider;
