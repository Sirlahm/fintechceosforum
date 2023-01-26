const Button = ({ children, classname }) => {
  return (
    <button
      className={` bg-[#2D4F93] text-white py-3 rounded-md  ${classname}`}
    >
      {" "}
      {children}
    </button>
  );
};

export default Button;
