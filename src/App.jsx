import "./App.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import { lazy } from "react";
import { Suspense } from "react";
import Loading from "./components/Loading/index";

// Homepage
const Home = lazy(() => import('./Pages/Home'))

//SignIn
const SignIn = lazy(() => import('./Pages/SignInPages'))


//SignIn
const SignUp = lazy(() => import('./Pages/SignUpPage'))

//Trend
const Trend = lazy(() => import('./Pages/Trend'))

//Trend
const Shop = lazy(() => import('./Pages/Shop'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
         <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

            <Route path="/trend" element={<Trend />} />
            <Route path="/shop" element={<Shop />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  );
}

export default App;