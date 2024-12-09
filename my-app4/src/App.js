import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Welcome from "./Welcome";
import Error from "./Error";
import Payslip from "./Payslip";
import Paycalc from "./Paycalc";
import Welcome1 from "./Welcome1";
import User from "./User";
import Protected from "./Protected";
import CustomerSupport from "./CustomerSupport";
import Feedback from "./Feedback";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path="support" element={<CustomerSupport />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/error" element={<Error />} />
        <Route path="/payslip" element={<Protected Component={Payslip} />} />
        <Route path="/paycalc" element={<Paycalc />} />
        <Route path="/welcome1" element={<Welcome1 />} />
        <Route path="/user/:nm" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
