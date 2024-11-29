
import { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import("./pages/Home"));
const EditProductPage = lazy(()=> import("./pages/EditProductPage"))

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/edit/:id" element={<EditProductPage/>} />
       </Routes>
    </>
  )
}

export default App
