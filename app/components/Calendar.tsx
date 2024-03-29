/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { generateRandomString } from "../helpers/helperMethods";

const getDaysInMonth = (year: number, month: number): number => {
  return moment(`${year}-${month + 1}`, "YYYY-MM").daysInMonth();
};

const getFirstDayOfMonth = (year: number, month: number): number => {
  return moment(`${year}-${month + 1}-01`, "YYYY-MM-DD").day();
};

interface StateInterface {
  day: any;
  monthWeeks: Array<Array<number>>;
}

interface TaskInterface {
  day: any;
  task: string;
}

const Calendar = () => {
  const [state, setState] = useState<StateInterface>({
    day: moment(),
    monthWeeks: [[]],
  });
  const [addedToDoState, setAddedToDoState] = useState<TaskInterface>({
    day: 1,
    task: "",
  });

  const year = state.day.year();
  const month = state.day.month();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  const weeksInMonth = Math.ceil(daysInMonth / 7);

  useEffect(() => {
    let currentDay = 0;

    for (let i = 0; i < weeksInMonth; i++) {
      const tempWeek: Array<number> = [];

      for (let j = 1; j <= 7; j++) {
        if (i === 0 && j < firstDayOfMonth && currentDay < daysInMonth) {
          tempWeek.push(0);
        } else if (currentDay < daysInMonth) {
          currentDay = currentDay + 1;
          tempWeek.push(currentDay);
        } else {
          tempWeek.push(0);
        }
      }
      if (state.monthWeeks.length <= weeksInMonth) {
        setState(
          (prevState: StateInterface): StateInterface => ({
            ...prevState,
            monthWeeks: [...prevState.monthWeeks, tempWeek],
          })
        );
      }
    }
  }, [month, year]);

  const onInputChange = (day: number, text: string) =>
    setAddedToDoState(
      (prevState: TaskInterface): TaskInterface => ({
        ...prevState,
        day: day,
        task: prevState.task.concat(text),
      })
    );
  const onAddItem = () => console.log("======", addedToDoState);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {state.monthWeeks.slice(0, weeksInMonth + 1).map((elt) => (
            <tr key={generateRandomString("tr")}>
              {elt.map((dayElt) => (
                <th key={generateRandomString("day")} className="h-10">
                  <span>{dayElt > 0 ? dayElt : ""}</span>
                  <div>
                    <div>
                      <h1 className="underline">Action List</h1>
                      <div>xxxxxxxx</div>
                    </div>

                    <div className="flex hover:w-60 h-28  cursor-pointer opacity-0 hover:opacity-100">
                      <input
                        type="text"
                        placeholder="Add Item..."
                        className="input input-bordered w-full text-primary-dark-2 font-normal"
                        onChange={(e) => onInputChange(dayElt, e.target.value)}
                        value={addedToDoState.task}
                      />
                      <div
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                        onClick={() => onAddItem()}
                      >
                        <svg
                          className="w-6 h-6 text-primary-1 cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
