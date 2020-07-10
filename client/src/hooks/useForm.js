// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (boolean, initialValue) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(boolean);
  const [values, setValues] = useState(initialValue);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [showSuccessMessage, values, handleChanges, handleSubmit];
};
