import "./App.css";
import Form from "./components/Form";
import ChatContainer from "./components/ChatContainer";
import axios from "axios";
import { useState } from "react";
import generateUniqueId from "./helpers/generateUniqueId";

function App() {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setChatLog((prev) => [
      ...prev,
      { id: generateUniqueId(), user: "human", message: input },
    ]);
    setInput("");

    axios
      .post("http://localhost:5000/", {
        prompt: input,
      })
      .then((res) => {
        setChatLog((prev) => [
          ...prev,
          {
            id: generateUniqueId(),
            user: "bot",
            message: res.data.data.trim(),
          },
        ]);
      });
  }

  return (
    <>
      <ChatContainer chatLog={chatLog} />
      <Form
        handleSubmit={handleSubmit}
        onChange={(e) => setInput(e.target.value)}
        input={input}
      />
    </>
  );
}

export default App;
