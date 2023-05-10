import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/Login/SignUp";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Profile from "./components/pages/Profile/Profile";
function App() {
  return (
    <div className="App">
      <Login />
      <SignUp />
      <Dashboard />
      <Profile />
    </div>
  );
}

export default App;
