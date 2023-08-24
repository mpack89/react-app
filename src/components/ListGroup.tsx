function ListGroup() {
  let items = ["New York", "San Fransico", "Toyko", "London", "Paris"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
}

export default ListGroup;
