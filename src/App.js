import {BrowserRouter as Router,Switch,Route,Link,Routes} from "react-router-dom";
import SignUp from "./components/SignUp"
import Login from "./components/Login"


function App() {
 
  return (
    <div className="App">
      <Router>
          <Link to="/login">Login Page</Link>
          <br></br>
          <Link to="/signup">SignUp Page</Link>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
      </Router>
{/* 
          <Login></Login>
          <SignUp></SignUp> */}
    </div>
  );
}

export default App;
