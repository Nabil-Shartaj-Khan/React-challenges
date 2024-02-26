import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; // Assuming vite.svg is in the root directory
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    const url = "https://www.reddit.com/r/aww/top/.json?t=all";
    const res = await fetch(url);
    const result = await res.json();
    const data = result.data.children;
    const list = data
      .filter((item) => item.data.url_overridden_by_dest.includes(".jpg"))
      .map((item) => item.data.url_overridden_by_dest);
    setImages(list);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleClick = (dir) => {
    const lastIdx = images.length - 1;

    if (dir === "left") {
      if (index === 0) {
        setIndex(lastIdx);
      } else {
        setIndex((idx) => idx - 1);
      }
    } else if (dir === "right") {
      if (lastIdx === index) {
        setIndex(0);
      } else {
        setIndex((idx) => idx + 1);
      }
    }
  };
  useEffect(() => {
    const tid = setInterval(() => {
      handleClick("right");
    }, 1000);

    return () => {
      clearInterval(tid);
    };
  }, [index]);

  return (
    <>
      {loading ? (
        <div>Loading Images....</div>
      ) : (
        <>
          <h1 className="text-secondary text-center pt-3">Image carousel</h1>

          <div className="carousel">
            <button onClick={() => handleClick("left")}>{"<"}</button>
            <img src={images[index]} alt="not-found" />
            <button className="right" onClick={() => handleClick("right")}>
              {">"}
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
