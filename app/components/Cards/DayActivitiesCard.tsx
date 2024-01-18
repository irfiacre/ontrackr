import { generateRandomString } from "@/app/helpers/helperMethods";
import React, { useState } from "react";

interface Props {
  title: string;
  content: Array<string>;
}

const HighlightCard = ({ ...props }: Props) => {
  const { title, content } = props;

  return (
    <div>
      <div className={`card bg-slate-700  text-primary-content p-3`}>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            {content.map((elt) => (
              <p key={generateRandomString("content")}>{elt}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
