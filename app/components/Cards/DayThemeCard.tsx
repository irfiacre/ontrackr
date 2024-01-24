import { randomInt } from "crypto";
import React from "react";

interface CardProps {
  themeName: string;
  color: string;
  dayName: string;
}

const DayThemeCard = ({ ...props }: CardProps) => {
  const { themeName, dayName } = props;
  return (
    <div className={`card bg-primary-dark-2 text-primary-content p-3`}>
      <div className="card-body text-white">
        {/* <input
          type="text"
          name="xxxx"
          id="xxx"
          className="bg-primary-dark-2 "
          value={dayName}
        /> */}
        <h2 className="card-title">{dayName}</h2>
        <p>{themeName}</p>
      </div>
    </div>
  );
};

export default DayThemeCard;
