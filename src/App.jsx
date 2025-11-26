import "./App.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import { lazy } from "react";
import { Suspense } from "react";
import Loading from "./components/Loading";

// Homepage
const Home = lazy(() => import('./Pages/Home'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/detail/:id" element={<BlogDetail />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  );
}

export default App;