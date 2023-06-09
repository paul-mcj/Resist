// formik
import { Formik, Field, Form, ErrorMessage } from "formik";

// yup
import * as Yup from "yup";

// models
import Product from "@/models/product";

// initial form values of type Product
const initialValues: Product = {
     title: "",
     description: "",
     image: "",
     seller: "",
     price: 0.0,
     timestamp: new Date(),
};

// yup validation schema for all input elements
const validationSchema = Yup.object({
     title: Yup.string()
          .max(30, "Must be 30 characters or less")
          .required("Required field"),
     description: Yup.string()
          .max(100, "Must be 100 characters or less")
          .required("Required field"),
     image: Yup.string()
          .matches(
               /^(http:\/\/|https:\/\/).*\.(png|jpe?g)$/i,
               "Image must be of format '.png' or '.jpg'"
          )
          .required("Required field"),
     seller: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required field"),
     price: Yup.number()
          .max(999999.99, "Price cannot exceed $999,999.99")
          .min(1.0, "Price cannot be less than $1.00")
          .required("Required field"),
});

type NewProductFormProps = {
     onAddProduct: (product: Product) => void;
};

const NewProductForm = ({ onAddProduct }: NewProductFormProps) => {
     return (
          <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                         setSubmitting(false);
                         onAddProduct(values);
                    }, 5000);
               }}
          >
               {({ isValid, isSubmitting }) => (
                    <Form>
                         <label htmlFor="title">title</label>
                         <Field name="title" type="text" />
                         <ErrorMessage name="title" />

                         <label htmlFor="description">description</label>
                         <Field name="description" type="text" />
                         <ErrorMessage name="description" />

                         <label htmlFor="image">image</label>
                         <Field name="image" type="url" />
                         <ErrorMessage name="image" />

                         <label htmlFor="seller">seller</label>
                         <Field name="seller" type="text" />
                         <ErrorMessage name="seller" />

                         <label htmlFor="price">price</label>
                         <Field name="price" type="number" />
                         <ErrorMessage name="price" />

                         {/* fixme: radio button for "category" (ex. fishing, footware, etc.): */}

                         {/* fixme:  <button type="submit"> should have access to state and change to disabled based on if the form is currently submitting or not*/}
                         <button
                              type="submit"
                              disabled={isValid && isSubmitting}
                         >
                              Submit
                         </button>
                    </Form>
               )}
          </Formik>
     );

     // Add a reset button with formik.handleReset or <button type="reset">.
     // Pre-populate initialValues based on URL query string or props passed to <SignupForm>.
     // Change the input border color to red when a field has an error and isn’t focused
     // Add a shake animation to each field when it displays an error and has been visited
     // Persist form state to the browser’s sessionStorage so that form progress is kept in between page refreshes
     // reset form values (see formik docs)

     // It is possible to infect a site with a file ending in .jpg if the file contains malicious code or is used to exploit a vulnerability in the website's software. This can happen, for example, if an attacker uploads a JPG file that contains embedded code that can be executed on the server or in the user's browser.

     // However, it is important to note that simply changing the file extension of a malicious file to ".jpg" will not prevent it from being detected by anti-virus software or security scanners. These tools can detect the contents of a file and flag it as malware regardless of its extension.

     // To help prevent malicious files from being uploaded to your site, it is recommended to use input validation and sanitization techniques, as well as limit the file types and sizes that can be uploaded.
};
export default NewProductForm;
