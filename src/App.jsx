import { lazy } from "react"
import Banner from "./components/Banner"
const Home = lazy(()  => import('./Pages/Home'))

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
     <Routes>
    <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />   
              <Banner/>
              </Route>
     </Routes>
           </Suspense>
           </BrowserRouter>

    );
  
}

export default App
