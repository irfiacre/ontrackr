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
      setState(
        (prevState: StateInterface): StateInterface => ({
          ...prevState,
          objectives: {
            ...prevState.objectives,
            content: [...prevState.objectives.content, txt],
          },
        })
      );
    }
    if (title.includes("do")) {
      setState(
        (prevState: StateInterface): StateInterface => ({
          ...prevState,
          actions: {
            ...prevState.actions,
            content: [...prevState.actions.content, txt],
          },
        })
      );
    }
    if (title.includes("Deadlines")) {
      setState(
        (prevState: StateInterface): StateInterface => ({
          ...prevState,
          deadlines: {
            ...prevState.deadlines,
            content: [...prevState.deadlines.content, txt],
          },
        })
      );
    }
  };
  return (
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
  );
};

export default Highlights;
