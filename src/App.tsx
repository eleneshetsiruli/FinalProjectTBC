import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginView } from "./pages/login/loginView";
import { SignUpView } from "./pages/signUp/signUpView";
import { MainLayout } from "./layout/mainLayOut";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="login" element={<LoginView />} />
        <Route path="signUp" element={<SignUpView />} />
      </Route>
    </Routes>
  );
}

export default App;
