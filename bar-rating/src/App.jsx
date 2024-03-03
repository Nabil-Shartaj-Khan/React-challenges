import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [freq, setFreq] = useState(undefined);
  const [yAxis, setYaxis] = useState([]);

  const fetchUrl = async () => {
    const url =
      'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new';
    const res = await fetch(url);
    let data = await res.text();
    const map = {};
    data = data.split('\n').filter(Boolean);

    data.forEach((item) => {
      if (map[item]) {
        map[item] = map[item] + 1;
      } else {
        map[item] = 1;
      }
    });
    setFreq(map);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  useEffect(() => {
    if (freq) {
      const max = Math.max(...Object.values(freq));
      const maxVal = Math.ceil(max / 10) * 10;
      let arr = [];
      for (let i = maxVal / 10; i >= 0; i--) {
        arr.push(i * 10);
      }
      setYaxis(arr);
    }
  }, [freq]);

  return (
    <div className="App">
      <h1 className="text-center pt-3">Bar Chart</h1>
      <div className="container">
        <div className="box">
          <div className="box-y-axis" style={{ height: `${yAxis && yAxis[0]}` }}>
            {yAxis.map((val, idx) => (
              <div key={idx}>
                <span>{val}</span>
              </div>
            ))}
          </div>
          {
            freq &&
            Object.entries(freq)
              ?.map(([key, val]) => (
                <div className='box-x-axis'>
                  <div
                    style={{
                      height: `${val}%`
                    }}
                    className='graph'>
                  </div>
                  <div className='index'>
                    {key}
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
