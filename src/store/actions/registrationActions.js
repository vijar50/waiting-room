//These actions will be called by the actionCreator

export const enterFirstName = val => {
  return { type: "FIRSTNAME", value: val.target.value };
};

export const enterLastName = val => {
  return { type: "LASTNAME", value: val.target.value };
};

export const enterUserName = val => {
  return { type: "USERNAMEF", value: val.target.value };
};

export const enterEmailAddress = val => {
  return { type: "EMAILADDRESS", value: val.target.value };
};

export const enterPassword = val => {
  return { type: "PASSWORDF", value: val.target.value };
};

export const enterConfPassword = val => {
  return { type: "CONFPASSWORD", value: val.target.value };
};

export const register = (firstName, lastName, userName, emailAddress, password) => {
  return dispatch => {
    fetch("http://localhost:9000/create-user", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, *",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ firstName: firstName,
                             lastName: lastName,
                             userName: userName,
                             emailAddress: emailAddress,
                             password: password })
    })
    .then(data => console.log(data));
  }
};