export function setTextField(e, setState, field) {
  setState(prevState => ({
    ...prevState,
    [field]: e.target.value
  }));
}
