"use client";
import React, { useState } from "react";
import DayActivitiesCard from "../components/Cards/DayActivitiesCard";
import { generateRandomString } from "../helpers/helperMethods";

// interface StateInterface {
//    { title: string; content: Array<string> },
// }

const DayActivities = () => {
  const [state, setState] = useState(
    // <StateInterface>
    [
      {
        title: "Cool Monday",
        content: [
          "Test Action 1",
          "Test Action 2",
          "Test Action 3",
          "Test Action 4",
          "Test Action 5",
          "Test Action 6",
        ],
      },
      {
        title: "Motivated Tuesday",
        content: [
          "Test Action 1",
          "Test Action 2",
          "Test Action 3",
          "Test Action 4",
          "Test Action 5",
          "Test Action 6",
        ],
      },
      {
        title: "Creative Friday",
        content: [
          "Test Action 1",
          "Test Action 2",
          "Test Action 3",
          "Test Action 4",
          "Test Action 5",
          "Test Action 6",
        ],
      },
    ]
  );

  return (
    <div className="flex gap-5 flex-wrap">
      {state.map((elt) => (
        <div key={generateRandomString("dayActivity")}>
          <DayActivitiesCard title={elt.title} content={elt.content} />
        </div>
      ))}
    </div>
  );
};

export default DayActivities;
