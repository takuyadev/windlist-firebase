function Button({ children, handleOnClick, icon, type, width }) {
  return (
    <button 
      className={`flex justify-center ease-in duration-100 w-${width} py-2 px-4 rounded-md bg-red-500 text-white font-bold hover:bg-red-900`}
      onClick={handleOnClick}
      type={type}
    >
        {icon && icon}
        {children}
    </button>
  );
}

Button.defaultProps = {
  children: "Default",
  type: "button",
  width: "auto"
};

export default Button;
