import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Navbar from "./components/pages/Navbar";
import LoginForm from "./components/pages/LoginForm";
import RegisterForm from './components/pages/RegisterForm';
import Profile from './components/pages/Profile';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<About />}/>
            <Route path="Register" element={<RegisterForm />}/>
            <Route path="Login" element={<LoginForm />}/>
            <Route path="Profile" element={<Profile />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
