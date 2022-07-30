import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";

import "./App.css";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div className="App">
      <div className="row">
        <main role="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
