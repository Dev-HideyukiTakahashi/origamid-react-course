import React from "react";

export const RadioComponent = ({ options, value, setValue }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
          />
          {option}
        </label>
      ))}
      <p>Radio value: {value} </p>
    </>
  );
};
