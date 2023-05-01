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
          .matches(/\.(jpg|png)$/i, "Image must be of format '.png' or '.jpg'")
          .required("Required field"),
     seller: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required field"),
     price: Yup.number()
          .max(999999.99, "Price cannot exceed $999,999.99")
          .min(1.0, "Price cannot be less than $1.00")
          .required("Required field"),
});

const NewProductForm = () => {
     return (
          <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                         alert(JSON.stringify(values, null, 2));
                         setSubmitting(false);
                    }, 500);
               }}
          >
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

                    <button type="submit">Submit</button>
               </Form>
          </Formik>
     );

     //      Disable the submit button while the user has attempted to submit (hint: formik.isSubmitting)
     // Add a reset button with formik.handleReset or <button type="reset">.
     // Pre-populate initialValues based on URL query string or props passed to <SignupForm>.
     // Change the input border color to red when a field has an error and isn’t focused
     // Add a shake animation to each field when it displays an error and has been visited
     // Persist form state to the browser’s sessionStorage so that form progress is kept in between page refreshes
};
export default NewProductForm;
