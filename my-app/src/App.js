import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="row">
        <main role="main">
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/" element={<Login />}></Route>
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
