import Checkbox from "@mui/material/Checkbox";
import { useState, useCallback } from "react";

const App = () => {
  const arr = ["alaa", "abd", "nur", "sawsan", "ali", "salwa"];
  const [brandInput, setBrandInput] = useState("");

  const changeInputHandler = (e) => {
    setBrandInput(e.target.value);
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

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={changeInputHandler}
      />
      {filteredArr.map((brand, key) => {
        return (
          <div className="brands-types__type" key={key}>
            <Checkbox
              className="checkbox"
              sx={{ "& .MuiSvgIcon-root": { fontSize: "3.1rem" } }}
              //   value={company.name}
              //   onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            <label className="type-title">{brand}</label>
          </div>
        );
      })}
    </div>
  );
};
export default App;
