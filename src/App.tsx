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
import SingleBlog from "./pages/singleBlog";
import { HotelsView } from "./pages/hotels";
import { ProfileView } from "./pages/profileInfo";
import { ProtectedRoute } from "./routes/ProtectedRoutes";
import { AddBlog } from "./pages/addBlog";
import PayPage from "./pages/pay";
import useCreateProfileOnLogin from "./hooks/useCreateProfile";
import Cart from "./pages/cart";

function App() {
  useCreateProfileOnLogin();
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={pageEnums.HOME} element={<HomeLayOut />} />
        <Route path={pageEnums.LOGIN} element={<LoginView />} />
        <Route path={pageEnums.SIGNUP} element={<SignUpView />} />
        <Route element={<ProtectedRoute />}>
          <Route path={pageEnums.SERVICES} element={<ServiceView />} />
          <Route path={pageEnums.ADDBLOG} element={<AddBlog />} />
          <Route path={pageEnums.BLOGS} element={<BlogsView />} />
          <Route path={pageEnums.ABOUT} element={<AboutUsView />} />
          <Route path={pageEnums.FLIGHTS} element={<FlightsView />} />
          <Route path={pageEnums.HOTELS} element={<HotelsView />} />
          <Route path={pageEnums.PROFILE} element={<ProfileView />} />
          <Route path={pageEnums.PAY} element={<PayPage />} />
          <Route path={pageEnums.CART} element={<Cart />} />
          <Route path={pageEnums.bLOGID} element={<SingleBlog />} />
          <Route path={pageEnums.ID} element={<SingleCountryView />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
