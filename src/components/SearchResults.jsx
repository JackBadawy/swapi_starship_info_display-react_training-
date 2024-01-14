import { useState } from "react";
import { useEffect } from "react";

const SearchResults = () => {
  const [testBool, setTestBool] = useState(false);
  return (
    <div>
      {testBool && <h1>hi</h1>}
      <button
        onClick={() => {
          setTestBool(true);
        }}
      >
        B
      </button>
    </div>
  );
};

export default SearchResults;
