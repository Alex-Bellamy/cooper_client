import React from "react";
import { Input } from 'semantic-ui-react'

const InputFields = ({ onChangeHandler }) => {
  return (
    <>
    <Input>
      <input onChange={onChangeHandler} name="distance" id="distance" placeholder="Distance in metres"></input>
    </Input>

    <Input>
      <input onChange={onChangeHandler} name="age" id="age" placeholder="Age"></input>
    </Input> <br/>

    <select onChange={onChangeHandler} name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select> <br/> <br/>

    </>
  );
};

export default InputFields;