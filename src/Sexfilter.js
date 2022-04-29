import React from "react";
const SexFilterButtons = ({sexFilter, handleSortBySex}) => {
    return (
      <div className="radio-container"
      >
        <div>
          <input
            checked={sexFilter === "all"}
            type="radio"
            id="all"
            name="sex"
            value="all"
            onChange={handleSortBySex}
          ></input>
          <label
            htmlFor="all"
            style={{ color: sexFilter === "all" ? "orange" : "grey" }}
          >
            All Names
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="m"
            name="sex"
            value="m"
            onChange={handleSortBySex}
          ></input>
          <label
            htmlFor="m"
            style={{ color: sexFilter === "m" ? "orange" : "grey" }}
          >
            Boys
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="f"
            name="sex"
            value="f"
            onChange={handleSortBySex}
          ></input>
          <label
            htmlFor="f"
            style={{ color: sexFilter === "f" ? "orange" : "grey" }}
          >
            Girls
          </label>
        </div>
      </div>
    );
}

export default SexFilterButtons;