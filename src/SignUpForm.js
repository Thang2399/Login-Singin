import React from "react";

const SingUpForm = ({
  setIsSubmitting,
  setShowButtons,
  setValues,
  values,
  showAlert,
  errors,
  setErrors,
}) => {
  const SignUp = (values, errors) => {
    if (
      (!values.name &&
        !values.email &&
        !values.password &&
        !values.password2) ||
      !values.name ||
      !values.email ||
      !values.password ||
      !values.password2
    ) {
      setErrors({ ...errors, message: "Missing information" });
    } else if (values.password.length < 6) {
      setErrors({
        ...errors,
        password: "Your password must contain at least 6 characters",
      });
    } else if (values.password2 !== values.password) {
      setErrors({
        ...errors,
        password2: "Your information does not match",
      });
    } else {
      setIsSubmitting(true);
      setShowButtons(false);
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    SignUp(values);
    console.log(values);
  };

  return (
    <form action="" onSubmit={handlerSubmit}>
      {errors.message && (
        <p className="alert-container alert-danger">{errors.message}</p>
      )}
      <h1>Sign up</h1>
      <label htmlFor="name2">Full name</label>
      <input
        type="text"
        name="name2"
        id="name2"
        placeholder="Ex: Toan Thang"
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        value={values.name}
      />
      {errors.name && (
        <p className="alert-container alert-danger">{errors.name}</p>
      )}
      <label htmlFor="email2">Email</label>
      <input
        type="email"
        name="email2"
        id="email2"
        placeholder="Ex: abc123@gmail.com"
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        value={values.email}
      />
      {errors.email && (
        <p className="alert-container alert-danger">{errors.email}</p>
      )}
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="**********"
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        value={values.password}
      />
      {errors.password && (
        <p className="alert-container alert-danger">{errors.password}</p>
      )}
      <label htmlFor="password2">repeat password</label>
      <input
        type="password"
        name="password2"
        id="password2"
        placeholder="**********"
        onChange={(e) => setValues({ ...values, password2: e.target.value })}
        value={values.password2}
      />
      {/* {errors !== "" ? <p className="error-container">{errors}</p> : ""} */}
      {errors.password2 && (
        <p className="alert-container alert-danger">{errors.password2}</p>
      )}
      <p>
        By clicking you agree with our <a href="">Term of use.</a>
      </p>
      <button className="simple-sign-up-btn btn" type="submit">
        sign up
      </button>
    </form>
  );
};

export default SingUpForm;
