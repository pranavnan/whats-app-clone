import React, { useContext, useEffect, useState } from "react";
import ContextData from "../../store/context-data";
import classes from "../../styles/RenderedPerson.module.css";

function RenderPerson({ data, messageData, username }) {
  const [cnt, setCnt] = useState(0);

  const { activeUser, setActiveUsers, givenMessageData } =
    useContext(ContextData);

  function clickHandler() {
    setActiveUsers(username);
  }

  useEffect(() => {
    const msgCount = messageData.messages.reduce((acc, curr) => {
      if (curr.from !== username) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setCnt(msgCount);
  }, [givenMessageData]);

  return (
    <div
      onClick={clickHandler}
      className={`${classes["person-wrapper"]} ${
        activeUser === username ? classes["active-user"] : ""
      }`}
    >
      <img src={data.img} alt="" />
      <p>{data.name}</p>
      <span className={activeUser === username ? classes["active_span"] : ""}>
        {cnt}
      </span>
    </div>
  );
}

export default RenderPerson;
/*
{
    id: "varun",
    name: "Varun Ahuja",
    img: varun,
    msgCount: "",
  },
*/

/*
varun
anuj
john
sarah
*/
