function ListGroup() {
  let items = ["New York", "San Fransico", "Toyko", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      {items.map((item) => (
        <li className="list-group-item" key={item}>
          {item}
        </li>
      ))}
    </>
  );
}

export default ListGroup;
