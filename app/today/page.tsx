"use client";
import React, { useState } from "react";
import ActivityComponent from "../components/Activity/ActivityComponent";
import moment from "moment";
import AddActivity from "../components/Activity/AddTask";
import { generateRandomString } from "../helpers/helperMethods";

interface StateInterface {
  result: Array<{
    title: string;
    description: string;
    dueDate: string;
  }>;
}

interface TaskInfo {
  title: string;
  description: string;
  dueDate: string;
}

const Today = () => {
  const [state, setState] = useState<StateInterface>({
    result: [
      {
        title: "Korem ipsum dolor sit amet consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae qntium nemo autem.",
        dueDate: `${moment()}`,
      },
      {
        title: "Porem ipsum dolor sit amet consectetur adipisicing elit.",
        description: "",
        dueDate: `${moment()}`,
      },
      {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.eaque rerum! Provident similique accusantium nemo autem.",
        dueDate: `${moment()}`,
      },
    ],
  });
  const onAddTask = (taskInfo: TaskInfo) => {
    console.log("======", taskInfo);

    setState(
      (prevState: StateInterface): StateInterface => ({
        ...prevState,
        result: [...prevState.result, taskInfo],
      })
    );
  };
  return (
    <main>
      <div>
        <div className="text-primary-dark-1 flex justify-between">
          <h1 className="text-xl font-bold px-2 py-1 text-primary-dark-1">
            {moment().format("LLLL")} (Today)
          </h1>

          <div className="cursor-pointer btn btn-ghost hover:bg-primary-0 hover:bg-opacity-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
              />
            </svg>
          </div>
        </div>

        <div>
          {state.result.map((elt) => (
            <div key={generateRandomString("title")}>
              <ActivityComponent
                title={elt.title}
                description={elt.description}
                dueDate={elt.dueDate}
              />
            </div>
          ))}
        </div>
        <div>
          <AddActivity onAddTaskInfo={onAddTask} />
        </div>
      </div>
    </main>
  );
};

export default Today;
