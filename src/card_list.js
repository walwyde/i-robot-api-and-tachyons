import React from "react";
import Card from "./card";

const Cardlist =({robotData}) => {
  console.log('Data: ', robotData)
  const robotArray = robotData.map((user, idx) => {
    return (
      < Card
        key={idx}
        name={robotData[idx].name}
        email={robotData[idx].email}
        id={robotData[idx].id}
      />
    )
  })

  return (<div>{robotArray}</div>);
}

export default Cardlist;
