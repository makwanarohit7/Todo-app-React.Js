import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const button_focus = useRef();

  useEffect(() => {
    button_focus.current.focus();
  }, []);

  function handleRemove(index) {
    const newList = [...list];
    newList.splice(index, 1);
    //index SHow the number and 1 shows the element which we have number to delete
    setList(newList);
  }

  function handeCompleteClick(index) {
    const newList = [...list];
    newList[index].complete = !newList[index].complete;
    setList(newList);
    // console.log(newList[index].complete);
  }

  function handlename(event) {
    setName(event.target.value);
  }
  function handleAddButton() {
    button_focus.current.focus();
    if (name.trim().length !== 0) {
      const newList = [...list];
      newList.push({ name, complete: false });
      setList(newList);
    }
    setName("");
  }

  const listItems = list.map((list, index) => (
    <ul className="ul">
      <li className="li " key={index}>
        <span
          className="span"
          style={{
            textDecoration: list.complete ? "line-through" : "",
            color: list.complete ? "red" : "",
          }}
        >
          {list.name}
        </span>
        <button
          className="completeButton"
          onClick={() => handeCompleteClick(index)}
        >
          Complete
        </button>
        <button className="removeButton" onClick={() => handleRemove(index)}>
          Remove
        </button>
      </li>
    </ul>
  ));

  return (
    <div className="main">
      <div className="indiv">
        <input
          className="input"
          value={name}
          ref={button_focus}
          type="text"
          onChange={handlename}
        />
        <button
          className="add"
          disabled={name.trim().length === 0}
          type="submit"
          onClick={handleAddButton}
        >
          Add
        </button>
        <div id="todo">{listItems}</div>
      </div>
    </div>
  );
}

export default App;
