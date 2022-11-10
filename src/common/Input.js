import "./input.css";

const Input = ({ label, name, formik, type }) => {
  return (
    <div className="formControl">
      <label htmlFor={"name"}>{label}</label>
      <input
        type={type}
        id={name}
        {...formik.getFieldProps(name)}
        name={name}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
