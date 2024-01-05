import React from "react";

interface Props {
  title: string;
  description: string;
}

const ActivityComponent = ({ ...props }: Props) => {
  const { title, description } = props;
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
            type="radio"
            value=""
            className="w-4 h-4 text-primary-3 bg-gray-100 border-gray-300 focus:ring-primary-3 focus:ring-2 outline-none cursor-pointer"
          />
        </div>
        <div>
          <h1 className="text-primary-dark-1">{title}</h1>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
      <hr className="h-px my-8 bg-primary-0" />
    </div>
  );
};

export default ActivityComponent;
