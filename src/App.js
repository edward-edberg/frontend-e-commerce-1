// import logo from "./logo.svg";
import "./App.css";
// import { Profile } from "./components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./features/user/userSlice";
import axios from "axios";

//medium.com/@isphinxs/fetching-automatically-in-development-vs-production-47ecb37fc184

function App() {
  const { isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLogin(false);
    const { email, password } = values;
    const loginUser = { email, password };
    try {
      const { data } = await axios.post(`api/v1/auth/login`, loginUser);
      console.log(data);
      setValues({ email: "", password: "" });
      setIsLogin(true);
    } catch (error) {
      setIsLogin(false);
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Login</h1>
      <form action="" onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <h1>{isLogin ? "Welcome!" : ""}</h1>

      {/* <Profile /> */}
    </div>
  );
}

export default App;
