import { useState } from "react";
import "./App.css";
import BabyNamesData from "./babyNamesData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const search = (searchVal) => {
    setSearchTerm(searchVal);
  };
  return (
    <div>
      <Search search={search} />
      <div className="container">
        <ul className="row row-cols-10">
          {BabyNamesData.filter((name) =>
            name.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((babyName) => (
            <li
              className={
                babyName.sex === "m"
                  ? "col backgroundGreen"
                  : "col backgroundOrange"
              }
              key={babyName.id}
            >
              {babyName.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
