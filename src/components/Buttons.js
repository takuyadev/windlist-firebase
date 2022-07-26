//Adjust any base classes by modifying this const variable
const baseButtonClass = "flex justify-center gap-2 ease-in duration-100 py-2 px-4 rounded-md text-white border-font-bold"

//Primary Button
export function PrimaryButton(
  { children, width, handleOnClick, icon, type }) {
  return (
    <button
      className={`${baseButtonClass} w-${width}text-white bg-red-500 hover:bg-red-900`}
      onClick={handleOnClick}
      type={type}
    >
      {icon && icon}
      {children}
    </button>
  );
}

PrimaryButton.defaultProps = {
  children: "Default",
  type: "button",
  width: "auto",
};


// Secondary Button
export function SecondaryButton(
  { children, width, handleOnClick, icon, type }) {
  return (
    <button
      className={`${baseButtonClass} w-${width} bg-gray-200 text-gray-900 hover:text-white hover:bg-gray-400`}
      onClick={handleOnClick}
      type={type}
    >
      {icon && icon}
      {children}
    </button>
  );
}

SecondaryButton.defaultProps = {
  children: "Default",
  type: "button",
  width: "auto",
};


