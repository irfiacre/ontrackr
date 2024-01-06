"use client";
import React, { useState } from "react";

interface StateInterface {
  title: string;
  description: string;
  dueDate: string;
}

const AddActivityModel = ({
  ...props
}: {
  onAddTask: (state: StateInterface) => void;
}) => {
  const [state, setState] = useState<StateInterface>({
    title: "",
    description: "",
    dueDate: "",
  });

  const { onAddTask } = props;

  const onInputChange = (type: string = "title", value: string) => {
    setState(
      (prevState: StateInterface): StateInterface => ({
        ...prevState,
        [type]: value,
      })
    );
  };

  return (
    <div
      aria-hidden="true"
      className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-primary-dark-0 bg-opacity-60"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
            <input
              type="text"
              name="task"
              value={state.title}
              onChange={(e) => onInputChange("title", e.target.value)}
              className="focus:outline-0 bg-white w-full"
              placeholder="Add Title..."
            />
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div>
            <textarea
              id="message"
              rows={5}
              value={state.description}
              onChange={(e) => onInputChange("description", e.target.value)}
              className="focus:outline-0 w-full text-sm text-gray-500 bg-white border-none p-4"
              placeholder="Add Description(Optional)..."
            ></textarea>
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b w-12/12 justify-between">
            <div>
              <span className="text-gray-400 p-2 text-sm">Add due date</span>
              <div className="relative max-w-sm">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  datepicker-autohide="true"
                  type="date"
                  value={state.dueDate}
                  onChange={(e) => onInputChange("dueDate", e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 hover:bg-primary-dark-0 hover:text-white cursor-pointer"
                  placeholder="Add due date"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => onAddTask(state)}
              className="ease-in duration-300 float-right text-white bg-primary-1 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center hover:bg-primary-dark-0 "
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddActivityModel;
