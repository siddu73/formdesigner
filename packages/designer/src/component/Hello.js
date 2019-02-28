import React from "react";
import { FormBuilder } from 'react-formio';
const Hello = () => {
  return (
    <div>
      <FormBuilder form={{ display: 'form' }} onChange={(schema) => console.log(schema)} />
    </div>
  )
}
export default Hello;