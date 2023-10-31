import * as Yup from "yup";
import "yup-phone";

const phoneRegexp = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

export const contactFormSchema = Yup.object().shape({
  FIRSTNAME: Yup.string().min(2).max(25).required("Please enter FIRSTNAME"),
  LASTNAME: Yup.string().min(2).max(25).required("Please enter LASTNAME"),
  EMAIL: Yup.string().email().required("Please enter your EMAIL"),
  PHONENUMBER: Yup.string()
    .matches(phoneRegexp, {
      message: "Phone Number is  invalid",
    })
    .required("Phone Number is Required"),
});
