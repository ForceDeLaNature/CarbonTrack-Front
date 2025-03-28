import React from "react";
import styles from "./input.module.scss";

type Props = {
  type?: string;
  inputType: string;
  label: string;
  name: string;
  options?: string[];
  errorMessage?: string;
  value?: string;
  handleChangeFunction?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const Input = ({
  inputType,
  label,
  name,
  options,
  errorMessage,
  value,
  type,
  handleChangeFunction,
}: Props) => {
  return (
    console.log(options),
    <div className={styles.auth_form_field}>
      <label htmlFor={name}>{label} :</label>
      {inputType === "input" ? (
        <input
          type={type} // On garde "text" par défaut pour un input classique
          id={name}
          name={name}
          value={value}
          onChange={handleChangeFunction}
        />
      ) : (
        <select
          id={name}
          name={name}
          value={value}
          onChange={handleChangeFunction}
        >
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
