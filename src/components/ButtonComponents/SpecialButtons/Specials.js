import React, {useState} from "react";
import {specials} from "../../../data"
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialState, setSpecialState] = useState(specials)
  // STEP 2 - add the imported data to state

  return (
    <div>
      <div className="merged-container special-container">
        {specialState.map((stateValue, index) => {
          return (
            <SpecialButton 
            key={index}
            button={stateValue}
            />
        );
      })}
      </div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials
