import React from "react";
import { Input } from 'semantic-ui-react'

const InputFields = ({ onChangeHandler }) => {
  return (
    <>
    <Input>
      <input onChange={onChangeHandler} name="distance" id="distance" placeholder="Distance in metres"></input>
    </Input>

      <select onChange={onChangeHandler} name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>

    <Input>
      <input onChange={onChangeHandler} name="age" id="age" placeholder="Age"></input>
    </Input>
    </>
  );
};

export default InputFields;