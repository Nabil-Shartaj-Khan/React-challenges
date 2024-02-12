import { useEffect, useState } from "react";
import "../App.css";

const FAQitem = ({ faq, index }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setIsShow(true);
    }
  }, []);

  const handleClick = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };

  return (
    <div className="box">
      <button onClick={handleClick}>{isShow ? "-" : "+"}</button>
      <div
        className="que fw-bold d-flex justify-content-left align-self-center"
        onClick={handleClick}
      >
        {faq.question}
      </div>
      {isShow && <div className="ans">{faq.answer}</div>}
    </div>
  );
};

export default FAQitem;
