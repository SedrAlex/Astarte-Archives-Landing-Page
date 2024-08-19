import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../../redux/apis/clientsApi";
import { setUser } from "../../redux/slices/userSlice";

// INTERNALIMPORT
import Style from "./Login.module.css";
import images from "../../img";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const LoginAndSignUp = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const [loginStatus, setLoginStatus] = useState(null);
 const navigate = useNavigate();
  const socialImage = [
    // Add your social images here
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");
    try {
      console.log("Attempting to login with email:", email);
      const response = await login({ email, password }).unwrap();
      console.log("Login response received:", response);
      localStorage.setItem("access_token", response.accessToken);
      console.log("Dispatching setUser with payload:", response.user);
      dispatch(setUser(response.user));
    
      setLoginStatus(response.user.role);
      alert("Logged in successfully!");
      navigate("/")
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed: " + error.data);
    }
  };

  return (
    <div className={Style.user}>
      <div className={Style.user_box}>
        <div className={Style.user_box_social}>
          {socialImage.map((el, i) => (
            <div
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
              className={`${Style.user_box_social_item} ${
                activeBtn === i + 1 ? Style.active : ""
              }`}
            >
              <img
                src={el.social}
                alt={el.name}
                width={30}
                height={30}
                className={Style.user_box_social_item_img}
              />
              <p>
                <span>{el.name}</span>
              </p>
            </div>
          ))}
        </div>

        <form onSubmit={handleLogin} className={Style.user_box_input}>
          <div className={Style.user_box_input_box}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={Style.user_box_input_box}>
            <label
              htmlFor="password"
              style={{ color: "white" }}
              className={Style.user_box_input_box_label}
            >
              <p>Password</p>
              <p>
                <a href="#">Forget password</a>
              </p>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button btnName="Continue" classStyle={Style.button} type="submit" disabled={isLoading} />
        </form>

        {loginStatus === "admin" && (
          <div className={Style.adminMessage}>
            <p>Welcome Admin, let's see the news!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginAndSignUp;
