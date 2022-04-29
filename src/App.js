import { useState } from "react";
import "./App.css";
import BabyNamesData from "./babyNamesData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import NamesContainer from "./Namescontainer";
import SexFilterButtons from "./Sexfilter";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [sexFilter, setSexFilter] = useState("all");
  const sortedNamesAndFilteredBabyNames = [...BabyNamesData]
    .sort(function (a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    })
    .filter((nameObject) => {
      const searchInputIsInNameObject = nameObject.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      const favoritesIds = favorites.map((nameObjectFave) => nameObjectFave.id);
      const isSelectedAsFave = favoritesIds.includes(nameObject.id);
      const sexMatchesSelectedSex =
        sexFilter === "all" || nameObject.sex === sexFilter;
      return (
        searchInputIsInNameObject && !isSelectedAsFave && sexMatchesSelectedSex
      );
    });

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const handleAddNameToFave = (clickedName) => {
    if (!favorites.includes(clickedName))
      setFavorites([...favorites, clickedName]);
  };
  const handleRemoveNameToFave = (clickedName) => {
    if (!favorites.includes(clickedName));
    setFavorites(
      favorites.filter((nameObjectFave) => nameObjectFave.id !== clickedName.id)
    );
  };
  const handleSortBySex = (e) => {
    setSexFilter(e.target.value);
  };

  return (
    <div className="container">
      <h1>Baby Names</h1>
      <Search handleSearchInput={handleSearchInput} searchInput={searchInput} />
      <SexFilterButtons
        sexFilter={sexFilter}
        handleSortBySex={handleSortBySex}
      />
      <NamesContainer
        names={sortedNamesAndFilteredBabyNames}
        handleClick={handleAddNameToFave}
      />
      <h4 style = {{paddingLeft:"28px"}}>Favorite Names:</h4>
      <NamesContainer
        names={favorites.filter((nameObject) => {
          const filteredFaves = nameObject.name.toLowerCase().includes(searchInput.toLowerCase())
          const sexMatchesSelectedSex =
            sexFilter === "all" || nameObject.sex === sexFilter;
          return filteredFaves && sexMatchesSelectedSex;
        }
        )}
        handleClick={handleRemoveNameToFave}
      />
    </div>
  );
}

export default App;
