const Modal = ({ handleClose, handleAccept }) => {
  const handleOutside = (e) => {
    if (e.target.className === "modal") {
      handleClose();
    }
  };
  return (
    <div className="modal" onClick={handleOutside}>
      <div className="modal-content">
        <button className="close btn btn-danger" onClick={handleClose}>
          X
        </button>
        <div className="content">
          Click the button below to accept the offer
        </div>
        <button className="accept btn btn-success" onClick={handleAccept}>
          Accept now!
        </button>
      </div>
    </div>
  );
};

export default Modal;
