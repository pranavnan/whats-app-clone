import React from "react";

const ContextData = React.createContext({
  activeUser: "",
  setActiveUsers: (username) => {},
  sentMessage: (message) => {},
  givenMessageData: [],
  personDatas: [],
});

export default ContextData;
