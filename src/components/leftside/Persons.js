import React, { useContext, useState } from "react";
import RenderPerson from "./RenderPerson";
import classes from "../../styles/Persons.module.css";
import ContextData from "../../store/context-data";

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

function Persons(props) {
  const { personDatas, givenMessageData } = useContext(ContextData);

  return (
    <div className={classes.person_wrapper}>
      {props.searchInput.trim() !== "" && (
        <ul>
          {personDatas
            .filter((curr) =>
              curr.name
                .toLowerCase()
                .includes(props.searchInput.trim().toLowerCase())
            )
            .map((curr) => {
              let idx = 0;
              if (curr.id === "anuj" || curr.id === "varun") {
                idx = curr.id === "anuj" ? 1 : 0;
              }

              if (curr.id === "john" || curr.id === "sarah") {
                idx = curr.id === "john" ? 2 : 3;
              }
              return (
                <RenderPerson
                  key={personDatas[idx].id}
                  data={personDatas[idx]}
                  messageData={
                    givenMessageData[
                      curr.id === "anuj" || curr.id === "varun" ? 0 : 1
                    ]
                  }
                  username={personDatas[idx].id}
                />
              );
            })}
        </ul>
      )}
      {props.searchInput.trim() === "" && (
        <ul>
          <RenderPerson
            key={personDatas[0].id}
            data={personDatas[0]}
            messageData={givenMessageData[0]}
            username={personDatas[0].id}
          />
          <RenderPerson
            key={personDatas[1].id}
            username={personDatas[1].id}
            data={personDatas[1]}
            messageData={givenMessageData[0]}
          />
          <RenderPerson
            key={personDatas[2].id}
            username={personDatas[2].id}
            data={personDatas[2]}
            messageData={givenMessageData[1]}
          />
          <RenderPerson
            key={personDatas[3].id}
            username={personDatas[3].id}
            data={personDatas[3]}
            messageData={givenMessageData[1]}
          />
        </ul>
      )}
    </div>
  );
}

export default Persons;
