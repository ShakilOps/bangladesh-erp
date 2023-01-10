import cn from "classnames";
import React from "react";

const InputField = ({
  value,
  label,
  placeholder,
  type,
  onChange,
  className,
  disabled,
  name,
}) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    onChange(value, name);
  };
  const disabledStyle = {
    boxShadow: disabled
      ? "0 0 0px 1000px #d2d2d2 inset"
      : "0 0 0px 1000px #fff inset",
  };

  return (
    <div
      className="form-group"
      style={{ marginRight: "12px", marginBottom: "10px" }}
    >
      {label && (
        <label htmlFor="input-field" style={{ color: "#888" }}>
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        className={cn("form-control", className)}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        style={disabledStyle}
        name={name}
      />
    </div>
  );
};

export default InputField;
