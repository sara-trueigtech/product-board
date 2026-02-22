"use client";

const Select = ({
  field = {},
  options = [],
  className = "",
}) => {
  return (
    <select
      {...field}
      className={`
        w-full
        px-4
        py-2
        border
        border-gray-300
        rounded-lg
        text-sm
        bg-white
        outline-none
        focus:border-black
        ${className}
      `}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;