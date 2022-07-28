function ListItem({ data, handleDelete }) {
  return (
    <li className="flex justify-between p-4 font-bold rounded-lg border-2 border-gray-200">
      <p>{data.note}</p>
      <p onClick={handleDelete}>delete</p>
    </li>
  );
}

ListItem.defaultProps = {
  text: "default",
  handleDelete: () => {}
};

export default ListItem;
