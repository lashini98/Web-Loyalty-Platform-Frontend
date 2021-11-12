const openNav = () => {
  document.getElementById("mySidenav").classList.add("sidebar-active");
  document.getElementById("main").style.paddingLeft = "400px";
};

const closeNav = () => {
  console.log("we are in close nav");
  document.getElementById("mySidenav").classList.remove("sidebar-active");
  document.getElementById("main").style.paddingLeft = "0";
};

const setToLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

const getItemFromLocalStorage = (name) => {
  const item = localStorage.getItem(name);
  return JSON.parse(item);
};

const formInputs = () => {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const personalPhoneNo = document.getElementById("personalPhoneNo");
  const workPhoneNumber = document.getElementById("workPhoneNumber");
  const country = document.getElementById("country");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  return {
    firstName: firstName,
    lastName: lastName,
    email: email,
    personalPhoneNo: personalPhoneNo,
    workPhoneNumber: workPhoneNumber,
    country: country,
    password: password,
    confirmPassword: confirmPassword,
  };
};

const setSideBarInformation = (userInformation) => {
  const name = document.getElementById("sidebarName");
  const email = document.getElementById("sidebarEmail");

  name.innerText = userInformation.firstName
    ? `${userInformation.firstName} ${userInformation.lastName}`
    : "David Paul";

  email.innerText = userInformation.email
    ? userInformation.email
    : "davidpaul@gmail.com";
};

const setInitialValues = () => {
  const inputs = formInputs();
  const userInformation = getItemFromLocalStorage("userInformation");

  if (!userInformation) return;

  Object.keys(inputs).forEach((single) => {
    inputs[single] = inputs[single].value = userInformation[single];
  });

  setSideBarInformation(userInformation);
};

const saveInformation = (e) => {
  const details = formInputs();

  const userInformation = {
    firstName: details.firstName.value,
    lastName: details.lastName.value,
    email: details.email.value,
    personalPhoneNo: details.personalPhoneNo.value,
    workPhoneNumber: details.workPhoneNumber.value,
    country: details.country.value,
    password: details.password.value,
    confirmPassword: details.confirmPassword.value,
  };

  setToLocalStorage("userInformation", userInformation);
};

document.addEventListener("DOMContentLoaded", () => {
  setInitialValues();
});
