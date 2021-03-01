import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Filter({ value, onInputChange }) {
  const id = uuidv4();
  return (
    <div>
      <label>Find contact by name</label>
      <input
        id={id}
        type="text"
        name="filter"
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
}
