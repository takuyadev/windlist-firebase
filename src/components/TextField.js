function TextField({ handleOnChange, placeholder }) {
  return (
        <input
            className="border-gray-300 border w-full py-2 px-4 rounded-lg"
            placeholder={placeholder} 
            onChange={handleOnChange} 
        />
    );
}

TextField.defaultProps = {
  placeholder: "Default placeholder...",
  handleOnChange: (e) => console.log(e.target.value),
};

export default TextField;
