import React from "react";
import Calendar from "../components/Calendar";
import XCalendar from "../components/XCalendar";

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
  const onAddTask = (taskInfo: TaskInfo) => {
    console.log("======", taskInfo);
  };
  return (
    <main>
      <div className="text-primary-dark-1">
        <h1 className="text-xl font-bold p-2 text-primary-dark-1">
          My Calendar
        </h1>
        <div className="p-2">
          <Calendar />
        </div>
        {/* <XCalendar /> */}
      </div>
    </main>
  );
};

export default Today;
