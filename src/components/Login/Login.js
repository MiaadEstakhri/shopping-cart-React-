import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
  // axios
  //   .post("http://localhost:3001/users", values)
  //   .then((res) => console.log(res.data))
  //   .catch((err) => console.log(err));
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
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
        <Link to="/signup">
          <p>Not signup yet ?</p>
        </Link>
      </form>
    </section>
  );
};

export default LoginForm;
