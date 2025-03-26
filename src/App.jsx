import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import auth from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

function App() {
  let [loader, setLoader] = useState(true);
  let dispatch = useDispatch();

  useEffect(() => {
    auth.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return <>hello world</>;
}

export default App;
