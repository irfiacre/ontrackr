import moment from "moment";
import React from "react";

interface Props {
  title: string;
  description: string;
  dueDate: string;
}

const ActivityComponent = ({ ...props }: Props) => {
  const { title, description, dueDate } = props;
  return (
    <div>
      <div className="flex items-center content-center">
        <div
          style={{
            padding: "0 5%",
          }}
        >
          <input
            id="link-radio"
            disabled={moment(dueDate).isBefore(moment(), "day")}
            type="radio"
            value=""
            className="w-4 h-4 text-primary-3 bg-gray-100 border-gray-300 focus:ring-primary-3 focus:ring-2 outline-none cursor-pointer"
          />
        </div>
        <div>
          <h1 className="text-primary-dark-1 break-words">{title}</h1>
          <p className="text-gray-500 break-words">{description}</p>
          <span
            className={`text-sm py-4 w-full flex ${
              moment(dueDate).isSame(moment(), "day")
                ? "text-primary-1 font-normal"
                : "text-gray-400"
            }`}
          >
            {moment(dueDate).isSame(moment(), "day")
              ? "Today"
              : moment(dueDate).format("LL")}
          </span>
        </div>
      </div>
      <hr className="h-px my-8 bg-primary-0" />
    </div>
  );
};

export default ActivityComponent;
