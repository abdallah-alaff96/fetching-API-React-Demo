import Checkbox from "@mui/material/Checkbox";
import { useState, useCallback } from "react";

const App = () => {
  const [brandInput, setBrandInput] = useState("");
  const arr = ["alaa", "abd", "nur", "sawsan", "ali", "salwa"];
  const checkedArr = [];

  const changeInputHandler = (e) => {
    setBrandInput(e.target.value);
  };
  const checkHandler = (e) => {
    checkedArr.push(e.target.value);
    console.log(e.target?.checked);
  };

  const filteredArr = arr.filter(
    useCallback(
      (brand) => {
        if (brandInput === "") {
          return brand;
        } else if (brand.toLowerCase().includes(brandInput.toLowerCase())) {
          return brand;
        }
      },
      [brandInput]
    )
  );

  const checkboxWithLabel = filteredArr.map((brand) => {
    return (
      <div className="brands-types__type" key={brand}>
        <Checkbox
          // type="checkbox"
          className="checkbox"
          sx={{ "& .MuiSvgIcon-root": { fontSize: "3.1rem" } }}
          value={brand}
          onChange={checkHandler}
          inputProps={{ "aria-label": "controlled" }}
        />
        <label className="type-title">{brand}</label>
      </div>
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={changeInputHandler}
      />
      {checkboxWithLabel}
    </div>
  );
};
export default App;
