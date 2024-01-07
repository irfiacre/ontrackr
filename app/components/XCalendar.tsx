// components/XCalendar.tsx
"use client";
import React, { useState } from "react";
import moment from "moment";

interface Todo {
  id: string;
  text: string;
}

interface Todos {
  [date: string]: Todo[];
}

const XCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [todos, setTodos] = useState<Todos>({});

  const getDaysInMonth = (year: number, month: number): number => {
    return moment(`${year}-${month + 1}`, "YYYY-MM").daysInMonth();
  };

  const getFirstDayOfMonth = (year: number, month: number): number => {
    return moment(`${year}-${month + 1}-01`, "YYYY-MM-DD").day();
  };

  const handleDateClick = (day: moment.Moment) => {
    setSelectedDate(day);
    // You can add your own logic when a date is clicked
  };

  const handleAddTodo = () => {
    const todo = prompt("Enter your to-do:");
    if (todo) {
      const formattedDate = selectedDate.format("YYYY-MM-DD");
      setTodos({
        ...todos,
        [formattedDate]: [
          ...(todos[formattedDate] || []),
          { id: Date.now().toString(), text: todo },
        ],
      });
    }
  };

  const renderXCalendar = (): JSX.Element[] => {
    const year = selectedDate.year();
    const month = selectedDate.month();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days: JSX.Element[] = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = moment(`${year}-${month + 1}-${i}`, "YYYY-MM-DD");
      const formattedDate = currentDate.format("YYYY-MM-DD");

      days.push(
        <div
          key={i}
          onClick={() => handleDateClick(currentDate)}
          className={`cursor-pointer p-2 relative ${
            i === selectedDate.date() ? "bg-blue-500 text-white" : ""
          }`}
        >
          <span>{i}</span>
          {todos[formattedDate] && (
            <ul className="absolute top-8 left-0 bg-white p-2 shadow-md rounded-md">
              {todos[formattedDate].map((todo) => (
                <li key={todo.id}>{todo.text}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    const emptyDays = Array.from({ length: firstDayOfMonth }, (_, index) => (
      <div key={index} className="w-12 h-12"></div>
    ));

    return [...emptyDays, ...days];
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() =>
              setSelectedDate(selectedDate.clone().subtract(1, "month"))
            }
          >
            Previous Month
          </button>
          <div>{`${selectedDate.format("MMMM YYYY")}`}</div>
          <button
            onClick={() =>
              setSelectedDate(selectedDate.clone().add(1, "month"))
            }
          >
            Next Month
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4">
        <div className="w-12 h-12">Sun</div>
        <div className="w-12 h-12">Mon</div>
        <div className="w-12 h-12">Tue</div>
        <div className="w-12 h-12">Wed</div>
        <div className="w-12 h-12">Thu</div>
        <div className="w-12 h-12">Fri</div>
        <div className="w-12 h-12">Sat</div>
        {renderXCalendar()}
      </div>
      <div className="mt-4">
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default XCalendar;
