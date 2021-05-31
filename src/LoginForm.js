import React, { useState } from "react";

const LoginForm = ({ LogIn }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const handlerSubmit = (e) => {
    e.preventDefault();
    // console.log("Logged in");

    LogIn(details);
    console.log(details);
  };

  return (
    <div className="sign-up-form-container">
      <form action="" onSubmit={handlerSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="name2">Full name</label>
        <input
          type="text"
          name="name2"
          id="name2"
          placeholder="Ex: Toan Thang"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
        <label htmlFor="email2">Email</label>
        <input
          type="email"
          name="email2"
          id="email2"
          placeholder="Ex: abc123@gmail.com"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="**********"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        <p>
          By clicking you agree with our <a href="">Term of use.</a>
        </p>
        <button className="simple-sign-up-btn btn" type="submit">
          sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
