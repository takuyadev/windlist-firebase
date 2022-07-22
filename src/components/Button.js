function Button({ text, icon }) {
  return (
    <button className="flex justify-center ease-in duration-100 py-2 px-4 rounded-lg bg-red-500 text-white font-bold hover:bg-red-900">
      {icon && icon}
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "Default",
};

export default Button;
