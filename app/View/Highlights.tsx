"use client";
import React, { useState } from "react";
import HighlightCard from "../components/Cards/HighlightCard";

interface StateInterface {
  objectives: { title: string; content: Array<string> };
  actions: { title: string; content: Array<string> };
  deadlines: { title: string; content: Array<string> };
}

const Highlights = () => {
  const [state, setState] = useState<StateInterface>({
    objectives: {
      title: "Weekly objectives",
      content: [],
    },
    actions: {
      title: "To do Items",
      content: [],
    },
    deadlines: {
      title: "Deadlines",
      content: [],
    },
  });
  const onAddItem = (txt: string, title: string) => {
    if (title.includes("objectives")) {
      setState((prevState) => ({
        ...prevState,
        objectives: {
          ...prevState.objectives,
          content: prevState.objectives.content.push(txt),
        },
      }));
    }
  };
  return (
    <div>
      <h1>Highlights</h1>
      <div className="flex gap-5 flex-wrap">
        <HighlightCard
          title={state.objectives.title}
          content={state.objectives.content}
          onAddItem={onAddItem}
        />
        <HighlightCard
          title={state.actions.title}
          content={state.actions.content}
          onAddItem={onAddItem}
        />
        <HighlightCard
          title={state.deadlines.title}
          content={state.deadlines.content}
          onAddItem={onAddItem}
        />
      </div>
    </div>
  );
};

export default Highlights;
