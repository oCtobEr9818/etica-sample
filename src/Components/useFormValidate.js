import { useReducer } from "react";

const initialInput = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { isTouched: true, value: state.value };
    case "Reset":
      return { isTouched: false, value: "" };
    default:
      return state;
  }
};

export const useFormValidate = (validateValue) => {
  const [input, dispatch] = useReducer(inputReducer, initialInput);

  const valueIsValid = validateValue(input.value);
  const hasError = !valueIsValid && input.isTouched;

  const onChangeValue = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const onBlurValue = () => {
    dispatch({ type: "BLUR" });
  };

  return {
    isValid: valueIsValid,
    hasError,
    onChangeValue,
    onBlurValue,
  };
};
