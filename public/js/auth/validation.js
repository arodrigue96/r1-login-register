export const isValidUsername = (username) => {
  const isValid = username.length >= 5;

  return isValid;
};

export const isValidPassword = (password) => {
  // Expresiones regulares utilizadas:
  const containUpperCase = /[A-Z]/;
  const containNumber = /[0-9]/;

  const isValid =
    password.length >= 8 &&
    containUpperCase.test(password) &&
    containNumber.test(password);

  return isValid;
};

export const isSamePassword = (password1, password2) => {
  const isSame = password1 === password2;

  return isSame;
};

export const isAdultAge = (age) => {
  const isAdult = age >= 18;

  return isAdult;
};
