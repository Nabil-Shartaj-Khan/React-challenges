import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isShow, setIsshow] = useState(false);
  const [offerAccept, setOfferAccept] = useState(false);

  const handleOpen = () => {
    setIsshow(true);
  };
  const handleClose = () => {
    setIsshow(false);
  };

  const handleAccept = () => {
    setIsshow(false);
    setOfferAccept(true);
  };
  return (
    <>
      <div>
        <div className="offer-button">
          {!offerAccept && (
            <button className="btn btn-primary btn-lg" onClick={handleOpen}>
              Show offer
            </button>
          )}
          {offerAccept && <div className="lead fs-1">Offer Accepted!</div>}
        </div>
        {isShow && (
          <Modal handleClose={handleClose} handleAccept={handleAccept}></Modal>
        )}
      </div>
    </>
  );
}

export default App;
