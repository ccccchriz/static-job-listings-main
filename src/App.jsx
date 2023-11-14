import Header from "./components/Header.jsx";
import Jobcard from "./components/Jobcard.jsx";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch("./src/assets/data/data.json")
      .then((data) => data.json())
      .then((json) => setData(json))
      .catch((er) => console.log(er));
  }, []);

  return (
    <>
      <Header />
      {data == undefined ? (
        <h2>Loading jobs</h2>
      ) : (
        data.map((el) => <Jobcard data={el} />)
      )}
    </>
  );
}

export default App;
