import React, { useState } from "react";
import SignUp from "./SignUp";
import SingIn from "./SignIn";
import { FaEdit, FaEye } from "react-icons/fa";
import "./App.css";
import Alert from "./Alert";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    message: "",
  });
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const showAlert = (show: false, type: "", message: "") => {
    setAlert({ show, type, message });
  };

  // const [activeClass, setActiveClass] = useState({ type: "" });
  const changeClass = () => {
    // setActiveClass({ type });
    let btn = document.getElementsByClassName("btn");
    for (let index = 0; index < btn.length; index++) {
      btn[index].classList.toggle("sign-in-focus");
      // return true;
    }
  };

  return (
    <main className="content-container">
      <div className="simple-sign-up">
        <h4>Large SignUp UI</h4>
        <div className="copy-texts">
          <a href="" style={{ marginRight: "15px" }}>
            Copy HTML
          </a>
          <a href="">Copy CSS</a>
        </div>
      </div>
      <div className="flex-right-container">
        <div className="flex-right-container-img">
          <img
            src="https://imgur.com/aILP3CD.png"
            alt=""
            className="flex-right-container-img-img"
          />
        </div>

        <div className="flex-right-form">
          {showButtons ? (
            <div className="sign-in-btn">
              <button
                className="btn sign-in-focus"
                onClick={() => {
                  setShowSignUp(false);
                  changeClass();
                }}
                style={{ marginRight: "10px" }}
              >
                sign in
              </button>
              <button
                className="btn"
                onClick={() => {
                  setShowSignUp(true);
                  changeClass();
                }}
              >
                sign up
              </button>
            </div>
          ) : (
            ""
          )}

          {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          {showSignUp ? (
            <SignUp
              setShowButtons={setShowButtons}
              showAlert={showAlert}
              errors={errors}
              setErrors={setErrors}
              user={user}
              setUser={setUser}
            />
          ) : (
            <SingIn
              setShowButtons={setShowButtons}
              showAlert={showAlert}
              errors={errors}
              setErrors={setErrors}
              user={user}
              setUser={setUser}
            />
          )}
        </div>
      </div>
      <div className="footer">
        <p className="author">
          UI idea from <a href="">Chouaib Belagoun</a>
        </p>
        <div className="icons-btn">
          <FaEdit className="fa-edit" />
          <FaEye className="fa-eye" />
        </div>
      </div>
    </main>
  );
}

export default App;
