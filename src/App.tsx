import { Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginView } from "./pages/login/loginView";
import { SignUpView } from "./pages/signUp/signUpView";
import { MainLayout } from "./layout/mainLayOut";
import HomeLayOut from "./pages/home/homeLayOut";
import { pageEnums } from "./pages/enums/pageEnums";
import { SingleCountryView } from "./pages/singleCountryView";
import SingleBlog from "./pages/singleBlog";
import { ProfileView } from "./pages/profileInfo";
import { ProtectedRoute } from "./routes/ProtectedRoutes";
import { AddBlog } from "./pages/addBlog";
import PayPage from "./pages/pay";
import useCreateProfileOnLogin from "./hooks/useCreateProfile";
import Cart from "./pages/cart";
import { lazy, Suspense } from "react";
import { Loading } from "./pages/isLoading";
const AboutUsView = lazy(() => import("./pages/aboutUs"));
const BlogsView = lazy(() => import("./pages/blogs"));
const FlightsView = lazy(() => import("./pages/flights/flightsView"));
const HotelsView = lazy(() => import("./pages/hotels"));
const ServiceView = lazy(() => import("./pages/services/serviceView"));

function App() {
  useCreateProfileOnLogin();
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={pageEnums.HOME} element={<HomeLayOut />} />
        <Route path={pageEnums.LOGIN} element={<LoginView />} />
        <Route path={pageEnums.SIGNUP} element={<SignUpView />} />
        <Route element={<ProtectedRoute />}>
          <Route path={pageEnums.ADDBLOG} element={<AddBlog />} />

          <Route
            path={pageEnums.SERVICES}
            element={
              <Suspense fallback={<Loading />}>
                <ServiceView />
              </Suspense>
            }
          />
          <Route
            path={pageEnums.BLOGS}
            element={
              <Suspense fallback={<Loading />}>
                <BlogsView />
              </Suspense>
            }
          />

          <Route
            path={pageEnums.ABOUT}
            element={
              <Suspense fallback={<Loading />}>
                <AboutUsView />
              </Suspense>
            }
          />

          <Route
            path={pageEnums.FLIGHTS}
            element={
              <Suspense fallback={<Loading />}>
                <FlightsView />
              </Suspense>
            }
          />

          <Route
            path={pageEnums.HOTELS}
            element={
              <Suspense fallback={<Loading />}>
                <HotelsView />
              </Suspense>
            }
          />

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
