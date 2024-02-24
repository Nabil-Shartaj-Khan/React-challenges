const Userform = ({
  handleSubmit,
  handleBack,
  index,
  forms,
  handleInputChange,
  formData,
}) => {
  return (
    <form action="" className="container pt-4 fs-4" onSubmit={handleSubmit}>
      {index > 0 && (
        <a href="/" onClick={handleBack}>
          Back
        </a>
      )}
      <br />
      <label className="fw-bold">{forms[index].label}</label>
      <input
        required
        value={formData[forms[index].id]}
        id={forms[index].id}
        className="ms-3"
        type={forms[index].inputType}
        placeholder={forms[index].placeholder}
        onChange={handleInputChange}
      ></input>
      <br />
      <button className="btn btn-danger mt-4">{forms[index].buttonName}</button>
    </form>
  );
};

export default Userform;
