export const checkCredentials = (username, password) => {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  const areValidCredentials =
    storedUsername === username && storedPassword === password;

  return areValidCredentials;
};
