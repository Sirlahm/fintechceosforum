const Input = ({ label, placeholder, id, type }) => {
  return (
    <div className="flex flex-col">
      <label className=" text-xl font-normal label" htmlFor={id}>
        {label}
      </label>
      <input
        className=" border-2 px-4 py-3 text-base border-black rounded-md outline-none"
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
