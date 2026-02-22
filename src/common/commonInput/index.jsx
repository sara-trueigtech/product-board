"use client";

const Input = ({
  field = {},
  inputType = "text",
  placeholder = "",
  className = "",
}) => {
  return (
    <input
      {...field}
      type={inputType}
      placeholder={placeholder}
      value={field.value ?? ""}
      className={`
        w-full
        px-4
        py-2
        border
        border-gray-300
        rounded-lg
        text-sm
        outline-none
        focus:border-black
        placeholder:text-gray-400
        ${className}
      `}
    />
  );
};

export default Input;