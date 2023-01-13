import { Routes, Route, Outlet } from "react-router-dom";
import "./categories.style.scss";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <div>
      <Outlet/>
      this is the shop
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn/>} />
      </Route>
    </Routes>
  );
};

export default App;
