import cn from "classnames";

const Select = ({
  name,
  label,
  options,
  className,
  onChange,
  disabled,
  defaultValue,
  ...rest
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
    <div className="form-group" style={{ marginBottom: "10px" }}>
      {label && (
        <label htmlFor="input-field" style={{ color: "#888" }}>
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        {...rest}
        onChange={handleChange}
        className={cn(className)}
        style={disabledStyle}
        disabled={disabled}
      >
        <option value="">Search please</option>
        {options?.map((option) => (
          <option
            key={option.id}
            value={option.id}
            selected={defaultValue == option.id}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
