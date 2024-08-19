import React from "react";

//INTERNAL IMPORT
import Style from "./SignIn.module.css";
import LoginAndSignUp from "../../container/LoginAndSignUp/LoginAndSignUp";
import NavBar from '../../components/NavBar/NavBar';

const SignInPage = () => {
  return (
    <div className={Style.login}>
        <NavBar />

      <div className={Style.login_box}>
        <h1>Login</h1>
        <LoginAndSignUp />
        <p className={Style.login_box_para}>
        New Organization? <a href="mailto:support@example.com">Contact Us</a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;