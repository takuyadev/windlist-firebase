function TextField
  ({ id, type, handleOnChange, placeholder, label }) {

  return (
      <div className="w-full">
        { label && <label className="text-gray-500" htmlFor={id}> {label} </label> }
        <input
            className="bg-gray-200 placeholder:text-gray-500 w-full py-2 px-4 rounded-lg"
            onChange={handleOnChange}
            placeholder={placeholder} 
            type={type}
            id={id} 
        />
      </div>
    );

}

TextField.defaultProps = {
  placeholder: "Default placeholder...",
  type: "text",
  handleOnChange: (e) => console.log(e.target.value),
};

export default TextField;
