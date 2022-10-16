import React from 'react';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by Name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);
