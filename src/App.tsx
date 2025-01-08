import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginView } from "./pages/login/loginView";
import { SignUpView } from "./pages/signUp/signUpView";
import { MainLayout } from "./layout/mainLayOut";
import HomeLayOut from "./pages/home/homeLayOut";
import { pageEnums } from "./pages/enums/pageEnums";
import { ServiceView } from "./pages/services/serviceView";
import { SingleCountryView } from "./pages/singleCountryView";
import { BlogsView } from "./pages/blogs";
import { AboutUsView } from "./pages/aboutUs";
import { FlightsView } from "./pages/flights/flightsView";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={pageEnums.HOME} element={<HomeLayOut />} />
        <Route path={pageEnums.LOGIN} element={<LoginView />} />
        <Route path={pageEnums.SIGNUP} element={<SignUpView />} />
        <Route path={pageEnums.SERVICES} element={<ServiceView />} />
        <Route path={pageEnums.BLOGS} element={<BlogsView />} />
        <Route path={pageEnums.ABOUT} element={<AboutUsView />} />
        <Route path={pageEnums.FLIGHTS} element={<FlightsView />} />

        <Route path=":id" element={<SingleCountryView />} />
      </Route>
    </Routes>
  );
}

export default App;
