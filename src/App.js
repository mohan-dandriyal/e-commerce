import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ForgetPassword from "./user/ForgetPassword";
import Login from "./user/Login";
import Ragister from "./user/Ragister";
import { Fragment, useEffect } from "react";
import Wrapper from "./layout/Wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const location = useLocation();
  const navigate = useNavigate();



  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "" || location.pathname === "/") {
      navigate('/login');
    }
  }, [location]);

  const findUser = () => {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
         <Route path="/ragister" element={<Ragister />} />
        <Route path="/forgot_password" element={<ForgetPassword />} />
      </Routes>
    );
  };

  return (
    <Fragment>
      {
        location.pathname === "" ||
          location.pathname === "/login" ||
          location.pathname === "/ragister" ||
          location.pathname === "/forgot_password" ? (findUser()) : (
          <Wrapper />
        )}
    </Fragment>
  );
}

export default App;
