import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Dashboard from './pages/Dasboard'
import { io, Socket } from 'socket.io-client'

export const WebSocketContext = createContext(undefined)

export default function App() {

  const [socket, setSocket] = useState<Socket | undefined>(undefined)

  useEffect(() => {
    setSocket(io("http://localhost:9001"))
  }, [])

  useEffect(() => {

    if (!socket) return;

    socket.on("connect", () => {
      console.log("Web Socket Client Connected")
    })
  }, [socket])

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" render={(props) => <Dashboard {...props} socket={socket} />} />
        </Switch>
      </Layout>
    </Router>
  );
}
