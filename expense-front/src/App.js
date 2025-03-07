import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import LoginPage from "./Components/LoginComponent/LoginPage";
import RegisterUser from "./Components/LoginComponent/RegisterUser";
import AdminMenu from "./Components/LoginComponent/AdminMenu";
import CustomerMenu from "./Components/LoginComponent/CustomerMenu";
import CategoryAddition from "./Components/CategoryComponent/CategoryAddition";
import CategoryList from "./Components/CategoryComponent/CategoryList"; // Adjust the path if necessary
import CategoryUpdate from "./Components/CategoryComponent/CategoryUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/RegisterUser" element={<RegisterUser />} />
          <Route path="/AdminMenu" element={<AdminMenu />} />
          <Route path="/CustomerMenu" element={<CustomerMenu />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/category-add" element={<CategoryAddition />} />
          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/update-category/:id" element={<CategoryUpdate />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
