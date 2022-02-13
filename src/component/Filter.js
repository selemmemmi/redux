import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <div className="filter">
      <button className="filterBtn" onClick={() => setFilter("all")}>
        ALL
      </button>
      <button className="filterBtn" onClick={() => setFilter("done")}>
        DONE
      </button>
      <button className="filterBtn" onClick={() => setFilter("undone")}>
        UNDONE
      </button>
    </div>
  );
};

export default Filter;
