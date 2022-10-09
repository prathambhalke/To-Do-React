import "./styles.css";
import Note from "./Components/notes.png";
import { useState } from "react";
export default function App() {
  const [input, setinput] = useState("");
  const [list, setlist] = useState([]);

  const btnhandler = () => {
    if (!input) {
    } else {
      setlist([...list, input]);
      setinput("");
    }
  };

  const delitem = (index1) => {
    console.log(index1);
    const updatedarray = list.filter((element, index) => {
      console.log(index);
      return index !== index1;
    });
    setlist(updatedarray);
  };

  const Vanish = () => {
    setlist([]);
  };

  return (
    <div className="App">
      <img className="Notes-img" src={Note} />

      <h3>Add your list here...</h3>

      <div className="input-div">
        <input
          type="text"
          placeholder="✍🏻 Add Items..."
          className="Input"
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
          }}
        />
        <i
          className="fa-solid fa-plus add-btn"
          title="Add item"
          onClick={btnhandler}
        ></i>
      </div>

      <div className="Show-Items">
        {list.map((item, index) => {
          return (
            <div className="Each-Item" key={index}>
              <h3>{item}</h3>
              <i
                className="fa-solid fa-trash"
                onClick={() => delitem(index)}
              ></i>
            </div>
          );
        })}
      </div>
      <button className="remove-Btn" onClick={Vanish}>
        Remove All
      </button>
    </div>
  );
}
