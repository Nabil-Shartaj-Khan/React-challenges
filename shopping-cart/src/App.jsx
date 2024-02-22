import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [food, setFood] = useState("");
  const [shoppingList, setShoppingist] = useState([]);
  const [bucketList, setBucketList] = useState([]);

  const handleInput = (e) => {
    setFood(e.target.value);
  };

  const fetchItems = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setShoppingist(data);
  };

  useEffect(() => {
    if (food.length >= 2) {
      // API call initialization
      fetchItems(food);
    }
  }, [food]);

  const handleSelect = (e) => {
    const idx = e.target.getAttribute("data");
    if (idx) {
      const obj = {
        id: Date.now(),
        data: shoppingList[idx],
        isDone: false,
      };
      const copyBucketList = [...bucketList];
      copyBucketList.push(obj);
      setBucketList(copyBucketList);
    }
    setFood("");
  };
  const handleRight = (id) => {
    const copyBucket = [...bucketList];
    const newBucketList = copyBucket.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setBucketList(newBucketList);
  };

  const handleDelete = (id) => {
    const copyBucket = [...bucketList];
    const newList = copyBucket.filter((item) => item.id != id);
    setBucketList(newList);
  };
  return (
    <>
      <h1 className="text-center pt-4 font-monospace">Shopping list </h1>
      <div className="input text-center pt-4">
        <input type="text" value={food} onChange={handleInput} />
      </div>
      {food.length >= 2 ? (
        <div className="list text-center pt-3" onClick={handleSelect}>
          {shoppingList.map((item, index) => {
            return (
              <div data={index} className="product">
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
      <div className="bucket">
        {bucketList.map((item) => {
          return (
            <div className="shopping-item ">
              <button
                onClick={() => {
                  handleRight(item.id);
                }}
              >
                ✓
              </button>
              <div className={item.isDone ? "strike" : ""}>{item.data}</div>

              <button
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
