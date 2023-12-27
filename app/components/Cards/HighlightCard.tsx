import React, { useState } from "react";

interface Props {
  title: string;
  content: Array<string>;
  onAddItem: (txt: string, title: string) => void;
}

const HighlightCard = ({ ...props }: Props) => {
  const { title, content, onAddItem } = props;
  const [state, setState] = useState("");
  const onInputChange = (text: string) => setState(text);

  return (
    <div>
      <div className={`card bg-slate-700  text-primary-content p-3`}>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div>
            {content.map((elt) => (
              <p key={elt}>{elt}</p>
            ))}
          </div>
        </div>
        <div className="card-actions justify-between flex-nowrap">
          <input
            type="text"
            placeholder="Add Item..."
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => onInputChange(e.target.value)}
          />
          <div
            role="button"
            className="btn btn-ghost btn-circle avatar"
            onClick={() => onAddItem(state, title)}
          >
            <svg
              className="w-12 h-12 text-slate-100 cursor-pointer btn btn-ghost btn-circle"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
