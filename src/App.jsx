import { useState, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Global/Theme";
import GlobalStyle from "./Global/GlobalStyle";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/SignUp";
function App() {
  const [count, setCount] = useState(0);
  return (
      <div className="App">
        <Login />
        <SignUp />
      </div>
  );
}

export default App;
