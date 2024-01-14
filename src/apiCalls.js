export let shipArray;
export const fetchStarShipData = async () => {
  const fetchedData = await fetch("https://swapi.dev/api/starships/");
  const readyData = await fetchedData.json();
  /* console.log(readyData); */
  shipArray = readyData.results;
  console.log(shipArray[0]);

  return shipArray;
};
