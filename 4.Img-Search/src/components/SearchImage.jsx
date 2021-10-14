import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
// import axios from "axios"

import "./Searchimage.css";

function SearchImage() {
  const [invalue, setInValue] = useState("");
  // https://source.unsplash.com/weekly?water

  const [result, setResult] = useState("");

  const [src, setSrc] = useState("https://source.unsplash.com/1000x600/?nature");

  const handleClick = () => {
    console.log(invalue);
    setResult(invalue);
  };

  useEffect(() => {
    // console.log(src);
    setSrc(`https://source.unsplash.com/1000x600/?${result}`);

  }, [result]);

  return (
    <div className="serchsection">
      <div className="flexpart">
        <TextField
          id="standard-basic"
          label="Search Here"
          fullWidth
          value={invalue}
          onChange={(e) => setInValue(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Search
        </Button>
      </div>
      <div className="downimage">
        {result? result :"Random Image"}
     <div className="image" >
          <img src={src} alt="..."/>

     </div>
    
      </div>
    </div>
  );
}

export default SearchImage;
