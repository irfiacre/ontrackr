"use client";
import React, { useState } from "react";
import AddActivityModel from "./AddActivityModel";

interface TaskInfo {
  title: string;
  description: string;
  dueDate: string;
}

const AddActivity = () => {
  const [modelVisible, setModelVisible] = useState<boolean>(true);

  const changeModelView = (cond: boolean) => setModelVisible(cond);

  const onAddTask = (taskInfo: TaskInfo) => {
    changeModelView(false);
    console.log("---->", taskInfo);
  };

  return (
    <div>
      <div
        className="flex items-center content-center cursor-pointer"
        onClick={() => changeModelView(true)}
      >
        <div
          className="text-primary-3"
          style={{
            padding: "0 5%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <p className="text-gray-400">Add Task</p>
        </div>
      </div>

      <AddActivityModel onAddTask={onAddTask} />
    </div>
  );
};

export default AddActivity;
