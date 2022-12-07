import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = async () => {
    console.log(`before setState: ${count}`);

    // call setCount twice, to update the counter by two every time we click
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);

    console.log(`after setState: ${count}`);
  };

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
