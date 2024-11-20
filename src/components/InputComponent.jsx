import React from "react";

export const InputComponent = ({ label, id, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        // value={value} como o valor é igual e só usa em 1 local pode ser desestruturado com spread no props
        onChange={({ target }) => setValue(target.value)}
        // required={required} como o valor é igual e só usa em 1 local pode ser desestruturado com spread no props
        {...props}
      />
      <p>
        Input value of {label}: {props.value}
      </p>
    </>
  );
};
