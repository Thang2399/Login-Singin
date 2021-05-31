import React from "react";
import LoginForm from "./LoginForm";
import data from "./data";

const SignIn = ({
  setShowButtons,
  showAlert,
  errors,
  setErrors,
  user,
  setUser,
}) => {
  const LogIn = (details) => {
    for (let index = 0; index < data.length; index++) {
      if (!details.name || !details.email || !details.password) {
        console.log("missing");
        showAlert(true, "danger", "Missing information!");
        return false;
      } else if (
        data[index].email === details.email &&
        data[index].password === details.password &&
        data[index].name === details.name
      ) {
        console.log("Logged in!");
        setUser({
          name: details.name,
          email: details.email,
          password: details.password,
        });
        setShowButtons(false);
        showAlert(true, "success", "Logged in successfully!");
        setErrors({
          name: "",
          email: "",
          password: "",
          password2: "",
          message: "",
        });
        return true;
      } else {
        setErrors({ ...errors, message: "Your information does not match" });
        // return false;
      }
    }
  };

  const LogOut = () => {
    setUser({ name: "", email: "", password: "" });
    console.log("Logged out");
    setShowButtons(true);
    showAlert(true, "success", "Logged out!");
  };

  return (
    <div className="sign-up-form">
      {errors.message !== "" ? <p className="alert-container alert-danger">{errors.message}</p> : ""}
      {user.email !== "" ? (
        <div className="welcome-container">
          <h1>
            Welcome <span>{user.name}</span>
          </h1>
          <button onClick={() => LogOut()} className="btn simple-sign-up-btn">Log out</button>
        </div>
      ) : (
        <LoginForm LogIn={LogIn} />
      )}
    </div>
  );
};

export default SignIn;
