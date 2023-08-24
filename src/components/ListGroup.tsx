function ListGroup() {
  const items = ["New York", "San Fransico", "Toyko", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
}

export default ListGroup;
