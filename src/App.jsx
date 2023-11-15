import Jobcard from "./components/Jobcard.jsx";
import Filterbar from "./components/Filterbar.jsx";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(undefined);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch("./src/assets/data/data.json")
      .then((data) => data.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  const addFilter = (filters) => {
    setFilters((list) => [filters, ...list]);
  };

  const removeFilter = (filters) => {
    setFilters((list) => list.filter((item) => item != filters));
  };

  return (
    <>
      {filters.length != 0 && <Filterbar />}
      {data == undefined ? (
        <h2>Loading jobs</h2>
      ) : (
        data
          .filter((listing) => {
            const items = [
              listing.role,
              listing.level,
              ...listing.tools,
              ...listing.languages,
            ];
            return filters.every((el) => items.includes(el));
          })
          .map((el) => <Jobcard data={el} key={el.id} addFilter={addFilter} />)
      )}
    </>
  );
}

export default App;
