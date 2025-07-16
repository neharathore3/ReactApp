import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}
function ListGroup(props: Props) {
  props.items.map((item) => <li>{props.items}</li>);

  const [selIndex, setselIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>

      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selIndex === index ? "list-group-item active" : "list-group-item"
            }
            key={item}
            onClick={() => {
              setselIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
