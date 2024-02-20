import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ProductBoard from "./components/products/ProductBoard";
import ProductForm from "./components/products/ProductForm";

function App() {
  return (
    <BrowserRouter basename="/QuoteMakerFront">
      <div className="min-h-screen grid grid-cols-6">
        <Sidebar />
        <Routes>
          <Route path="/" element={<ProductBoard />} />
          <Route path="/product" element={<ProductForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
