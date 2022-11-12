import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";
import { loginUser } from "../../services/loginService";
import { useState } from "react";
import { toast } from "react-toastify";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [error, setError] = useState(null);
  const onSubmit = async (values) => {
    // console.log(values);
    try {
      await loginUser(values);
      setError(null);
      toast.success("ok");
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message)
        setError(error.response.data.message);
      toast.error(`error is : ${error.response.data.message}`);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  return (
    <section className="formContainer">
      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn primary"
        >
          Login
        </button>
        {/* {error && <p style={{ color: "red" }}>error is : {error}</p>} */}
        <Link to="/signup">
          <p>Not signup yet ?</p>
        </Link>
      </form>
    </section>
  );
};

export default LoginForm;
