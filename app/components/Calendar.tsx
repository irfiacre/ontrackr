/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";

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

const Calendar = () => {
  const [state, setState] = useState<StateInterface>({
    day: moment(),
    monthWeeks: [[]],
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
            <tr key={`${elt[0]}`}>
              {elt.map((dayElt) => (
                <th key={elt[0]}>{dayElt > 0 ? dayElt : ""}</th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
