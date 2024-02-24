const Userdetail = ({ formData }) => {
  return (
    <div className="show-data text-center">
      <h1>Data insertion successful!</h1>
      <div className="span-data pt-4 fs-4">
        <span>
          {" "}
          <b>Your Name:</b> {formData.name}
        </span>
        <br />
        <span>
          {" "}
          <b>Your Email:</b> {formData.email}
        </span>
        <br />
        <span>
          {" "}
          <b>Your Dob:</b> {formData.dob}
        </span>
        <br />
        <span>
          {" "}
          <b>Your Password:</b> {formData.password}
        </span>
      </div>
    </div>
  );
};

export default Userdetail;
