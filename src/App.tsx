import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginView } from "./pages/login/loginView";
import { SignUpView } from "./pages/signUp/signUpView";

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginView />} />
      <Route path="signUp" element={<SignUpView />} />
    </Routes>
  );
}

export default App;
