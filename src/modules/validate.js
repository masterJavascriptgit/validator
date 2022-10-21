import {
  emailRegex,
  phoneNumberRegex,
  urlRegex,
  isStrongPasswordRegex,
  Base64Regex,
  floatRegex,
} from "../utils/regex.js";

class Validator {
  constructor() {}

  isBase64 = (base64) => {
    return Base64Regex.test(base64);
  };

  isUrl = (url) => {
    return urlRegex.test(url);
  };

  isPhoneNumber = (phone) => {
    return phoneNumberRegex.test(phone);
  };

  isEmail = (email) => {
    return emailRegex.test(email);
  };

  isEmpty = (str) => {
    if (str.length == 0 && str == "") {
      return true;
    }
    return false;
  };

  isNumeric = (number) => {
    return typeof number === "number";
  };

  isString = (str) => {
    return typeof str === "string";
  };

  isFloat = (number) => {
    return floatRegex.test(number) && number.includes(".");
  };

  isStrongPassword = (password) => {
    return isStrongPasswordRegex.test(password);
  };
}

const validator = new Validator();

export default validator;
