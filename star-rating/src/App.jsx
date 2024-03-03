import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[rating,setRating]=useState(0);
  const[hover,setHover]=useState(0);
  const [message, setMessage] = useState('');

  const handleRating = (num) => {
    setRating(num);
    setMessage(`Thanks for adding ${num} stars!`);
  };

  return (
    <>
          <h1 className="text-center pt-3">Star rating</h1>
          <div className="star-container text-center">
  {
    [1, 2, 3, 4, 5].map((num) => (
      <button
        onClick={() => handleRating(num)} 
        onMouseOver={() => setHover(num)}
        onMouseLeave={() => setHover(rating)}
        key={num}
      >
        <span className={`star ${num <= ((rating && hover) || hover) ? 'on' : 'off'}`}>
          &#9733;
        </span>
      </button>
    ))
  }
  <p className="lead fs-4">{message}</p>
</div>

    </>
  )
}

export default App
