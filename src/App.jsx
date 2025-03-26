import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import auth from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";

function App() {
  let [loader, setLoader] = useState(true);
  let dispatch = useDispatch();

  useEffect(() => {
    auth
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoader(false));
  }, []);

  if (loader) return null;

  return (
    <>
      <Header />
      hey
      <Footer />
    </>
  );
}

export default App;
