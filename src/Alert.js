import React, { useEffect } from "react";

const Alert = ({ type, message, removeAlert, errors }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [removeAlert]);
  return <p className={`alert-container alert-${type}`}>{message}</p>;
};

export default Alert;
