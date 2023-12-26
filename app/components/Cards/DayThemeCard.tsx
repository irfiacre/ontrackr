import { randomInt } from "crypto";
import React from "react";

interface CardProps {
  themeName: string;
  color: string;
  dayName: string;
}

const DayThemeCard = ({ ...props }: CardProps) => {
  return (
    <div className={`card bg-slate-800  text-primary-content p-3`}>
      <div className="card-body">
        <h2 className="card-title">{props.dayName}</h2>
        <p>{props.themeName}</p>
      </div>
    </div>
  );
};

export default DayThemeCard;
