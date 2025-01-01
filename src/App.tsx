import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginView } from "./pages/login/loginView";

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginView />} />
    </Routes>
  );
}

export default App;
