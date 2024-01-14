import { useState } from "react";
import { useEffect } from "react";
import { fetchStarShipData } from "../apiCalls";
import { shipArray } from "../apiCalls";
import styles from "./Form.module.css";

const Form = () => {
  /*if (shipArray) {
    console.log("Ship array", shipArray);
  } */

  const [searchString, setSearchString] = useState("");
  const [searchTerm, setSearchTerm] = useState(searchString);
  const [loading, setLoading] = useState(true);
  const [starships, setStarships] = useState([]);
  let dataToRender = [...starships];
  let cardCount = 1;
  const handleChange = () => {
    setSearchString(event.target.value);
    console.log(searchString);
  };

  const handleClick = () => {
    setSearchTerm(searchString);
    console.log(searchTerm, "search term");
    //lets try initializing filter here
    //im thinmking we just call setStarships with a filtered array
  };

  if (searchTerm) {
    dataToRender = dataToRender.filter((ship) =>
      ship.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  useEffect(() => {
    fetchStarShipData().then((results) => {
      setLoading(false);
      setStarships(results);
    });
  }, []);

  return (
    <>
      <div id="div">
        <input
          type="text"
          id="searchBar"
          name="searchBar"
          onChange={handleChange}
          value={searchString}
        />
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </div>
      <div>
        {loading && <p>Loading</p>}
        {dataToRender &&
          dataToRender.map((ship) => (
            <div key={cardCount} className={cardCount % 2 ? "odd" : "even"}>
              {(cardCount = cardCount + 1)}
              <p>{ship.name}</p>
              <p>Length: {ship.length}</p>
              <p>Manufacturer: {ship.manufacturer}</p>
              <p>Class: {ship.starship_class}</p>
              <p>passengers: {ship.passengers}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Form;
