// import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const App = () => {
  const arr = ["alaa", "abd", "nur", "sawsan", "ali", "salwa"];
  const [brandInput, setBrandInput] = useState("");

  const changeInputHandler = (e) => {
    setBrandInput(e.target.value);
  };

  const filteredArr = arr.filter((brand) => {
    if (brandInput == "") {
      return brand;
    } else if (brand.toLowerCase().includes(brandInput.toLowerCase())) {
      return brand;
    }
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={changeInputHandler}
      />
      {filteredArr.map((brand, key) => {
        return (
          <div key={key}>
            <p>{brand}</p>
          </div>
        );
      })}
    </div>
  );
};
export default App;

// const el = arr.map(el, (index) => {
//   return (
//     <div className="brands-types__type" key={index}>
//       <Checkbox
//         className="checkbox"
//         sx={{ "& .MuiSvgIcon-root": { fontSize: "3.1rem" } }}
//         //   value={company.name}
//         //   onChange={handleChange}
//         inputProps={{ "aria-label": "controlled" }}
//       />
//       <div className="type-title">{el} </div>
//     </div>
//   );
// });
