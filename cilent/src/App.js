import './App.css';
import About from "./components/About";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <RegisterForm />
      <LoginForm />
    </div>
  );
}

export default App;
