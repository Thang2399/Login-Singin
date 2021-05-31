import React, { useState } from "react";
// import SignUpSuccess from "./SignUpSuccess";
import SingUpForm from "./SignUpForm";

const SignUp = ({
  setShowButtons,
  showAlert,
  errors,
  setErrors,
  user,
  setUser,
}) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="sign-up-form">
      {isSubmitting ? (
        <h1>You have signed up successfully! Press F5 to come back!</h1>
      ) : (
        <SingUpForm
          setIsSubmitting={setIsSubmitting}
          setShowButtons={setShowButtons}
          values={values}
          setValues={setValues}
          showAlert={showAlert}
          errors={errors}
          setErrors={setErrors}
        />
      )}
    </div>
  );
};

export default SignUp;
