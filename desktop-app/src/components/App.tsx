import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { io } from 'socket.io-client'
import "./style.css";

function App() {

  const [response, setResponse] = useState("")

  useEffect(() => {
    const socket = io("http://0.0.0.0:9001")
    socket.emit("message")
  }, [])

  return (
    <div>
      <h3>Hello From Electron App</h3>
      <h4>Electron: {process.versions.electron}</h4>
      <h4>Chrome: {process.versions.chrome}</h4>
      <h4>Node: {process.versions.node}</h4>
    </div>
  );
}

export default hot(App);
