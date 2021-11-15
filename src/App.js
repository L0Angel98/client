import { useEffect, useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { getFetch, postFetch } from "./utils/requests";

function App() {
  const [dataSend, setDataSend] = useState({
    title: "",
    body: "",
    author: "",
  });
  const [notes, setNotes] = useState([]);

  const fetchData = async () => {
    try {
      getFetch(`/posts`).then(resp => {console.log(resp); setNotes([...resp.data])});
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataSend({ ...dataSend, [name]: value });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      await postFetch(`/posts`,dataSend).then(resp =>console.log(resp));
    } catch (error) {
      console.log(error);
    }

    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <form className="formContainer" onSubmit={handleSend}>
        <div>Enviar Información a base de datos</div>
        <label>
          Titulo
          <input
            type="text"
            name="title"
            value={dataSend.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Contenido
          <input
            type="text"
            name="body"
            value={dataSend.body}
            onChange={handleChange}
          />
        </label>
        <label>
          Autor
          <input
            type="text"
            name="author"
            value={dataSend.author}
            onChange={handleChange}
          />
        </label>
        <button type="submit" value="Submit">
          Enviar
        </button>
      </form>
      <div>
        {
          notes.map(note => (<div className="savedNotes" key={note._id}>
            <div>{note.title}</div>
            <div>{note.body}</div>
            <div>{note.author}</div>
          </div>))
        }
      </div>
    </div>
  );
}

export default App;
