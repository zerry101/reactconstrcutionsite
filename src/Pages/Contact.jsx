import { useFormik } from "formik";
import { contactFormSchema } from "../Schemas";

const initialValues = {
  FIRSTNAME: "",
  LASTNAME: "",
  EMAIL: "",
  PHONENUMBER: "",
  text_message: "",
};

const Contact = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactFormSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  console.log(errors);

  return (
    <section>
      {" "}
      {/* Banner  */}
      <div
        // data-aos="fade-right"
        className="w-full flex flex-col    justify-center bg-primary"
      >
        <div className="text-secondary tracking-widest mt-9 max-md:mt-20  max-sm:mt-20  font-sans text-center text-4xl">
          GET IN TOUCH
        </div>
        <div className="text-secondary tracking-widest m-4  font-thin text-center text-2xl">
          EXPLORE PLANS
        </div>
      </div>
      {/* Form */}
      <div>
        <div className="w-full bg-dull  ">
          <div className="flex max-lg:flex-row  items-center max-md:flex-col max-sm:flex-col p-10 justify-center ">
            <div className=" h-auto p-6 flex w-full justify-center ">
              <img
                className="w-auto  h-auto  "
                src="assets\ContactPage\undraw_personal_email_re_4lx7.svg"
                alt=""
                height={100}
                // sizes="auto"
              ></img>
            </div>
            <div className="px-9      w-full ">
              <form
                onSubmit={handleSubmit}
                className=" w-full h-full flex flex-col items-start     justify-center   "
              >
                {/* Firstname Lastname row */}
                <div className="flex   max-sm:flex-col md:flex-row  justify-between  w-full ">
                  <div className="w-full m-3  ">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2">
                      Firstname
                    </label>
                    <input
                      className=" bg-gray-200  py-3 px-4 uppercase  leading-tight  tracking-wide appearance-none text-gray-700 focus:bg-white   font-semibold w-full   "
                      // label="Firstname"
                      placeholder="John"
                      name="FIRSTNAME"
                      value={values.FIRSTNAME}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.FIRSTNAME && touched.FIRSTNAME ? (
                      <p className="text-red-300">{errors.FIRSTNAME}</p>
                    ) : null}
                  </div>
                  <div className="w-full m-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2">
                      Lastname
                    </label>
                    <input
                      className=" bg-gray-200  py-3 px-4 uppercase  leading-tight  tracking-wide appearance-none text-gray-700 focus:bg-white   font-semibold w-full   "
                      // label="Firstname"
                      placeholder="DOE"
                      name="LASTNAME"
                      value={values.LASTNAME}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="m-3  w-full">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2">
                    Email
                  </label>
                  <input
                    className=" bg-gray-200 h-full py-3 px-4   leading-tight font-semibold  tracking-wide appearance-none text-gray-700 focus:bg-white    w-full   "
                    placeholder="xyz@gmail.com"
                    type="email"
                    name="EMAIL"
                    value={values.EMAIL}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="m-3  w-full">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    className=" bg-gray-200 h-full py-3 px-4   leading-tight font-semibold  tracking-wide appearance-none text-gray-700 focus:bg-white    w-full   "
                    placeholder="+91 3209871274"
                    type="tel"
                    name="PHONENUMBER"
                    value={values.PHONENUMBER}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.PHONENUMBER && (
                    <p className="text-red-300">{errors.PHONENUMBER}</p>
                  )}
                </div>
                <div className="m-3  w-full">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    className=" bg-gray-200 h-full py-3 px-4   leading-tight font-semibold  tracking-wide appearance-none text-gray-700 focus:bg-white    w-full   "
                    placeholder="COMMENTS"
                    type="text"
                    rows="3"
                    name="text_message"
                    value={values.text_message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="m-3  w-full">
                  <button
                    type="submit"
                    className=" my-3 w-full font-thin p-2 tracking-widest text-lg border-4 border-transparent bg-secondary  hover:bg-primary hover:text-secondary hover:border-secondary    text-primary  "
                  >
                    SUBMIT & GET RATES
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
