const TextField = ({
  id,
  value,
  onChange,
  label,
  placeholder = "placeholder",
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="w-55 rounded border-gray-600"
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
